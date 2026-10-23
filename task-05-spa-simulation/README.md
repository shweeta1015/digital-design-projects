# DevSpace — Interactive Learning Hub
### Single Page Application (SPA) Simulation | Yuva Intern — Week 5

A lightweight, high-performance Single Page Application (SPA) simulation designed for web engineering education. Developed using pure **Vanilla HTML5**, **Modern CSS3**, and **ECMAScript Modules**, DevSpace delivers zero-reload route transitions via the native **HTML5 History API**, reactive course search filters, student portfolio showcases, and accessible form validation.

---

## Key Features

1. **Native Client-Side Router:** Complete SPA navigation powered by `history.pushState()`, `history.replaceState()`, and the `popstate` event. No page unloads or white screen flashes.
2. **Five Comprehensive Views:**
   - **`/` (Home Dashboard):** Platform overview, telemetry statistics cards, featured tracks, learner testimonials, and call-to-action banners.
   - **`/courses` (Courses Listing):** 8 specialized curriculum tracks with real-time debounced title search, category filter pills (`All`, `Frontend`, `Backend`, `UI/UX`, `Cloud`, `Data`), and syllabus inspection modals.
   - **`/projects` (Student Portfolio):** 6 student project cards with interactive star counters, technology badges, and full specification dialogs.
   - **`/about` (Platform Philosophy):** Architectural breakdown comparing traditional Multi-Page Applications (MPAs) against SPAs, plus a 4-stage engineering pathway.
   - **`/contact` (Advisory Contact):** Client-side inquiry form with live input validation, regex format checking, and accessible success status announcements.
   - **`404 Not Found` View:** Graceful error handling for unregistered routes with quick links back to the dashboard.
3. **Universal Accessibility (WCAG 2.2 Level AA):**
   - Visible skip-to-content link (`#app-root`).
   - Route transitions announced to screen readers via `#route-announcer` (`aria-live="polite"`).
   - High-contrast `:focus-visible` styling (`3px solid #4f46e5`).
   - Modal focus trapping and `Escape` key dismissal.
   - Mobile navigation drawer with keyboard focus lock.
4. **Fluid Cross-Device Layout:** Responsive CSS Grid and Flexbox layout verified with **0px horizontal overflow** across 320px, 375px, 768px, and 1440px viewports.

---

## Technologies Used

- **Markup:** Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`, `figure`).
- **Styling:** Modern CSS3 (CSS Custom Property Design Tokens, CSS Grid L2 with `minmax(0, 1fr)` overflow prevention, Flexbox, `clamp()` fluid typography).
- **Scripting:** Pure Vanilla JavaScript (ES2022 Modules, HTML5 History API, Custom Event Delegation).
- **Graphics:** 8 Custom Scalable Vector Graphics (SVGs) with explicit aspect ratios.
- **Testing:** Playwright automated headless browser test suite (`test_spa.py`).

---

## Project Structure

```text
task-05-spa-simulation/
├── index.html                    # Single application container & HTML5 landmarks
├── server.py                     # Lightweight Python SPA server with URL rewrite
├── test_spa.py                   # Automated Playwright test suite (10 test suites)
├── report.md                     # Comprehensive 19-section technical implementation report
├── README.md                     # Documentation & local running instructions
├── task-05-spa-simulation.zip    # Complete runnable submission archive
├── css/
│   └── style.css                 # 1,120 lines of modular CSS, design tokens & responsive grid
├── js/
│   ├── app.js                    # View controllers, reactive search/filters, form validation
│   ├── router.js                 # HTML5 History API client-side router & route announcer
│   └── data.js                   # Mock data store (8 courses, 6 projects, stats, reviews)
└── assets/                       # 8 custom SVG illustrations and thumbnails
    ├── logo.svg
    ├── hero-illustration.svg
    ├── about-mission.svg
    ├── course-frontend.svg
    ├── course-backend.svg
    ├── course-uiux.svg
    ├── course-cloud.svg
    └── course-data.svg
```

---

## How to Run Locally on Windows

Because the application uses native browser **ECMAScript Modules** (`import` / `export`), it must be served over an HTTP server rather than opening `file:///index.html` directly (which browsers block under CORS security policies).

### Method 1: Using the DevSpace SPA Development Server (Recommended)
This server includes automatic URL rewriting to `index.html` for any route, enabling direct page refreshes on sub-routes like `http://localhost:8000/courses`:

1. Open PowerShell or Command Prompt.
2. Navigate to the project directory:
   ```powershell
   cd C:\Users\Shweta\Desktop\anti_gravity_workspace\YUVAA\task-05-spa-simulation
   ```
3. Run the Python server:
   ```powershell
   python server.py 8000
   ```
4. Open your web browser and navigate to:
   ```
   http://localhost:8000
   ```

### Method 2: Using Python's Built-in HTTP Server
```powershell
python -m http.server 8000
```
Open `http://localhost:8000`. When using this basic server, navigate between routes using the header links. If directly bookmarking or refreshing deep URLs, you can use the built-in hash fallback:
- Home: `http://localhost:8000/`
- Courses: `http://localhost:8000/#/courses`
- Projects: `http://localhost:8000/#/projects`
- About: `http://localhost:8000/#/about`
- Contact: `http://localhost:8000/#/contact`

---

## How to Test the Application

### 1. Testing Route Navigation (Zero-Reload SPA)
- Click **Courses**, **Projects**, **About**, or **Contact** in the top navigation bar.
- Notice that the view updates instantaneously without any white screen flash or browser tab loading spinner.
- Observe that the URL updates in the browser address bar (e.g. `/courses`, `/projects`).

### 2. Testing Browser Back and Forward
- Navigate from **Home** &rarr; **Courses** &rarr; **Projects** &rarr; **Contact**.
- Click the browser's native **Back button** multiple times.
- Notice that the router responds to the `popstate` event, smoothly restoring each previous view without reloading the page.
- Click the **Forward button** to verify forward history traversal.

### 3. Testing Course Search & Filters
- Navigate to the **Courses** view (`/courses`).
- Type `vanilla` in the search box: the grid dynamically filters down to the Vanilla JS course in real time.
- Click the **Backend** category pill: only backend engineering courses are displayed.
- Click **Reset All Filters** to restore the full course catalog.

### 4. Testing Contact Form Validation
- Navigate to **Contact** (`/contact`).
- Click **Submit Inquiry** with empty fields: accessible red validation alerts appear under each required input, and focus moves to the first invalid field.
- Enter an invalid email address (e.g., `test@`): an email format error message is displayed.
- Fill in valid inputs and submit: an accessible green confirmation alert is displayed in `#contactStatusRegion`, and the form resets.

### 5. Running the Automated Test Suite
Ensure Playwright is installed, then run:
```powershell
python test_spa.py
```
This script validates all 10 test suites (URL routing, search, filtering, form validation, history stack, 404 view, and multi-viewport zero-overflow) with 100% pass rates.

---

## Known Limitations

- **Frontend Simulation:** The contact form validates inputs on the client side; it does not persist data to a remote SQL/NoSQL database.
- **In-Memory State:** Search filter queries and starred projects exist in memory during the browser session; refreshing the page resets filters to default.

---

## Author & Program Info
- **Candidate:** Shweeta Thorat (`shweeta1015`)
- **Program:** Yuva Intern — Frontend Developer Track (Week 5)
- **Repository:** [https://github.com/shweeta1015/digital-design-projects](https://github.com/shweeta1015/digital-design-projects)
