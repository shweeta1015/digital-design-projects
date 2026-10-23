/**
 * DevSpace - Client-Side Single Page Application Router
 * Pure Vanilla JavaScript implementation of HTML5 History API Router
 */

export class Router {
  constructor(routes = [], options = {}) {
    this.routes = routes;
    this.rootElement = options.rootElement || document.getElementById('app-root');
    this.announcerElement = options.announcerElement || document.getElementById('route-announcer');
    this.currentPath = null;
    this.notFoundHandler = options.notFound || null;

    // Base title prefix
    this.titlePrefix = options.titlePrefix || 'DevSpace — Interactive Learning Hub';

    // Bound methods for event listeners
    this.handlePopState = this.handlePopState.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  /**
   * Initialize router listeners and render initial route
   */
  init() {
    window.addEventListener('popstate', this.handlePopState);
    document.addEventListener('click', this.handleLinkClick);

    // Initial navigation based on current URL or Hash fallback
    this.resolveCurrentRoute();
  }

  /**
   * Extract current route path from window.location
   * Supports standard HTML5 pathname, hash routing fallback (e.g., #/courses),
   * and query fallback (e.g., ?route=/courses)
   */
  getPath() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/')) {
      return hash.slice(1); // Extract /courses from #/courses
    }
    
    const params = new URLSearchParams(window.location.search);
    if (params.has('route')) {
      return params.get('route');
    }

    const pathname = window.location.pathname;
    // Normalize trailing slash except root
    if (pathname.length > 1 && pathname.endsWith('/')) {
      return pathname.slice(0, -1);
    }

    // In local static server root, filename might be /index.html
    if (pathname.endsWith('index.html')) {
      return '/';
    }

    return pathname || '/';
  }

  /**
   * Programmatic navigation via History API
   * @param {string} path - Target path e.g. '/courses'
   * @param {boolean} replace - Use replaceState instead of pushState
   */
  navigate(path, replace = false) {
    if (!path) return;

    // Normalize path
    let normalized = path;
    if (normalized.startsWith('#/')) {
      normalized = normalized.slice(1);
    }
    if (normalized.length > 1 && normalized.endsWith('/')) {
      normalized = normalized.slice(0, -1);
    }
    if (!normalized.startsWith('/')) {
      normalized = '/' + normalized;
    }

    // Avoid duplicate history state push if already on the exact same route
    if (this.currentPath === normalized && !replace) {
      return;
    }

    // Push or Replace state
    if (replace) {
      window.history.replaceState({ path: normalized }, '', normalized);
    } else {
      window.history.pushState({ path: normalized }, '', normalized);
    }

    this.render(normalized);
  }

  /**
   * Listen for browser Back and Forward navigation events
   */
  handlePopState(event) {
    const path = this.getPath();
    this.render(path, false);
  }

  /**
   * Intercept clicks on links intended for client-side routing
   */
  handleLinkClick(event) {
    // Traverse upwards to check if click originated inside an anchor
    const link = event.target.closest('a');
    if (!link) return;

    // Allow default browser behavior for external links, download, or modifier keys
    if (
      link.target === '_blank' ||
      link.hasAttribute('download') ||
      link.getAttribute('rel') === 'external' ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const href = link.getAttribute('href');
    if (!href) return;

    // Handle internal routing if data-link attribute is present OR href begins with '/' or '#/'
    if (link.hasAttribute('data-link') || href.startsWith('/') || href.startsWith('#/')) {
      event.preventDefault();
      this.navigate(href);

      // Close mobile navigation menu if open
      const navToggle = document.getElementById('mobileNavToggle');
      const navMenu = document.getElementById('primaryNav');
      if (navToggle && navMenu && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-locked');
      }
    }
  }

  /**
   * Resolve and execute the matched route
   */
  resolveCurrentRoute() {
    const path = this.getPath();
    this.render(path);
  }

  /**
   * Match route and mount corresponding view
   */
  render(path, shouldScroll = true) {
    this.currentPath = path;

    // Find route definition
    const route = this.routes.find((r) => r.path === path);

    if (route) {
      // Update document title
      document.title = route.title ? `${route.title} | ${this.titlePrefix}` : this.titlePrefix;

      // Execute route render callback
      try {
        if (typeof route.render === 'function') {
          route.render(this.rootElement);
        }
      } catch (err) {
        console.error(`[Router] Error rendering route "${path}":`, err);
        this.renderErrorView(err);
      }

      // Announce route change to screen readers
      this.announceRoute(route.title || 'Page loaded');
    } else {
      // 404 Not Found
      document.title = `404 Page Not Found | ${this.titlePrefix}`;
      if (this.notFoundHandler) {
        this.notFoundHandler(this.rootElement, path);
      } else {
        this.renderDefaultNotFound(path);
      }
      this.announceRoute('Page Not Found');
    }

    // Synchronize active navigation link visual & ARIA state
    this.updateActiveNavLinks(path);

    // Scroll to top for natural navigation UX
    if (shouldScroll) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    // Set focus on root container for keyboard accessibility
    if (this.rootElement) {
      this.rootElement.focus();
    }
  }

  /**
   * Synchronize visual and ARIA current state on header nav links
   */
  updateActiveNavLinks(currentPath) {
    const navLinks = document.querySelectorAll('a[data-link], nav a');
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;

      const normalizedHref = href.startsWith('#/') ? href.slice(1) : href;
      const isActive =
        normalizedHref === currentPath ||
        (normalizedHref !== '/' && currentPath.startsWith(normalizedHref));

      if (isActive) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  /**
   * Announce route transition for screen readers via ARIA live region
   */
  announceRoute(title) {
    if (this.announcerElement) {
      this.announcerElement.textContent = `Navigated to ${title}`;
    }
  }

  /**
   * Graceful fallback when a route handler encounters an exception
   */
  renderErrorView(error) {
    if (!this.rootElement) return;
    this.rootElement.innerHTML = `
      <section class="section error-view" aria-labelledby="error-heading">
        <div class="container text-center">
          <div class="error-badge">Navigation Alert</div>
          <h1 id="error-heading" class="section-title">An unexpected error occurred</h1>
          <p class="section-subtitle">We were unable to render this view. You can return to the dashboard.</p>
          <div class="btn-group justify-center">
            <a href="/" data-link class="btn btn-primary">Return to Home Dashboard</a>
          </div>
        </div>
      </section>
    `;
  }

  /**
   * Default 404 view if custom not-found is omitted
   */
  renderDefaultNotFound(path) {
    if (!this.rootElement) return;
    this.rootElement.innerHTML = `
      <section class="section not-found-view" aria-labelledby="not-found-heading">
        <div class="container text-center">
          <div class="not-found-code">404</div>
          <h1 id="not-found-heading" class="section-title">Route Not Found</h1>
          <p class="section-subtitle">The requested route <code>${escapeHtml(path)}</code> does not exist on DevSpace.</p>
          <div class="btn-group justify-center">
            <a href="/" data-link class="btn btn-primary">Back to Home Dashboard</a>
            <a href="/courses" data-link class="btn btn-outline">Explore Courses</a>
          </div>
        </div>
      </section>
    `;
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, function (m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}
