#!/usr/bin/env python3
"""
DevSpace SPA Development Server
Serves static assets and rewrites missing routes to index.html for HTML5 History API support.
Usage:
    python server.py [port]
Example:
    python server.py 8000
"""

import sys
import os
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class SPARequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def do_GET(self):
        # Extract path without query parameters or anchors
        clean_path = self.path.split('?')[0].split('#')[0]
        # Resolve target filesystem path
        target = os.path.normpath(os.path.join(BASE_DIR, clean_path.lstrip('/')))

        # If file or folder exists, serve normally
        if os.path.exists(target):
            super().do_GET()
        else:
            # SPA Fallback: Serve index.html with 200 OK
            self.send_response(200)
            self.send_header('Content-Type', 'text/html; charset=utf-8')
            self.end_headers()
            with open(os.path.join(BASE_DIR, 'index.html'), 'rb') as f:
                self.wfile.write(f.read())

def run():
    server = HTTPServer(('127.0.0.1', PORT), SPARequestHandler)
    print(f"==================================================")
    print(f" DevSpace SPA Development Server Active")
    print(f" URL: http://localhost:{PORT}")
    print(f" Root: {BASE_DIR}")
    print(f" SPA Route Fallback: Enabled (index.html)")
    print(f" Press Ctrl+C to stop the server.")
    print(f"==================================================")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server...")
        server.server_close()

if __name__ == '__main__':
    run()
