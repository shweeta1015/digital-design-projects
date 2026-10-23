/**
 * DevSpace - Single Page Application View Controller & Interaction Engine
 */

import { Router } from './router.js';
import {
  platformStats,
  platformFeatures,
  coursesData,
  studentProjectsData,
  learnerTestimonials
} from './data.js';

// Application State
const state = {
  courseSearchQuery: '',
  selectedCategory: 'All',
  projectFilter: 'All',
  starredProjects: new Set()
};

/* ==========================================================================
   VIEW RENDERERS
   ========================================================================== */

/**
 * 1. Home Dashboard View (Route: '/')
 */
export function renderHome(container) {
  const featuredCourses = coursesData.filter((c) => c.badge === 'Featured' || c.badge === 'Hot' || c.badge === 'Popular').slice(0, 3);

  container.innerHTML = `
    <!-- Hero Section -->
    <section class="hero-section" aria-labelledby="hero-heading">
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="pill-badge">
            <span class="badge-dot" aria-hidden="true"></span>
            Single Page Application Simulation — Week 5
          </div>
          <h1 id="hero-heading" class="hero-title">
            Master Modern Web Engineering at <span class="text-gradient">DevSpace</span>
          </h1>
          <p class="hero-description">
            Experience an ultra-fast, zero-reload interactive learning platform. Build real-world single-page applications, scalable backend microservices, and design systems with instant browser feedback.
          </p>
          <div class="btn-group">
            <a href="/courses" data-link class="btn btn-primary">
              Explore Courses
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="/projects" data-link class="btn btn-outline">
              View Student Projects
            </a>
          </div>
          <div class="hero-trust">
            <span>Trusted by 14,000+ ambitious developers from top engineering programs</span>
          </div>
        </div>
        <div class="hero-graphic">
          <img src="assets/hero-illustration.svg" alt="DevSpace interactive IDE and learning telemetry dashboard" width="540" height="380" class="fluid-img" loading="eager" fetchpriority="high">
        </div>
      </div>
    </section>

    <!-- Platform Telemetry / Metrics Section -->
    <section class="section stats-section" aria-labelledby="stats-heading">
      <div class="container">
        <h2 id="stats-heading" class="sr-only">Platform Statistics</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">${platformStats.totalLearners}</div>
            <div class="stat-label">Active Developers</div>
            <div class="stat-desc">Enrolled worldwide</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">${platformStats.interactiveCourses}</div>
            <div class="stat-label">Engineering Modules</div>
            <div class="stat-desc">Self-paced & project-based</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">${platformStats.projectsCompleted}</div>
            <div class="stat-label">Verified Projects</div>
            <div class="stat-desc">Published to student portfolios</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">${platformStats.satisfactionRate}</div>
            <div class="stat-label">Student Satisfaction</div>
            <div class="stat-desc">Based on 4,800+ verified ratings</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Features Section -->
    <section class="section features-section" aria-labelledby="features-heading">
      <div class="container">
        <div class="section-header text-center">
          <span class="sub-title">Engineered for Excellence</span>
          <h2 id="features-heading" class="section-title">Why Developers Choose DevSpace</h2>
          <p class="section-subtitle">A modern curriculum designed without obsolete frameworks or artificial bottlenecks.</p>
        </div>
        <div class="grid-4">
          ${platformFeatures.map(f => `
            <article class="feature-card">
              <div class="feature-icon" aria-hidden="true">${f.icon}</div>
              <h3 class="feature-title">${f.title}</h3>
              <p class="feature-desc">${f.description}</p>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Featured Courses Section -->
    <section class="section courses-preview-section" aria-labelledby="featured-heading">
      <div class="container">
        <div class="section-header flex-between">
          <div>
            <span class="sub-title">Popular Programs</span>
            <h2 id="featured-heading" class="section-title">Featured Learning Tracks</h2>
          </div>
          <a href="/courses" data-link class="btn btn-outline btn-sm">
            View All Courses (${coursesData.length})
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        <div class="grid-3">
          ${featuredCourses.map(renderCourseCardMarkup).join('')}
        </div>
      </div>
    </section>

    <!-- Learner Testimonials Section -->
    <section class="section testimonials-section" aria-labelledby="testimonials-heading">
      <div class="container">
        <div class="section-header text-center">
          <span class="sub-title">Student Voices</span>
          <h2 id="testimonials-heading" class="section-title">Feedback from Real Developers</h2>
          <p class="section-subtitle">Read how DevSpace helped engineers transition into high-performance web development roles.</p>
        </div>
        <div class="grid-3">
          ${learnerTestimonials.map(t => `
            <article class="testimonial-card">
              <div class="testimonial-stars" aria-label="Rating: 5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote class="testimonial-quote">
                "${t.content}"
              </blockquote>
              <div class="testimonial-author">
                <div class="author-avatar" aria-hidden="true">${t.initials}</div>
                <div>
                  <div class="author-name">${t.name}</div>
                  <div class="author-role">${t.role} · ${t.company}</div>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section" aria-labelledby="cta-heading">
      <div class="container">
        <div class="cta-banner">
          <div class="cta-content">
            <h2 id="cta-heading" class="cta-title">Ready to Elevate Your Frontend Architecture?</h2>
            <p class="cta-desc">Start learning client-side routing, History API state management, and modern component engineering today.</p>
            <div class="btn-group">
              <a href="/courses" data-link class="btn btn-primary">Start Exploring Courses</a>
              <a href="/contact" data-link class="btn btn-light">Ask an Advisor</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Attach modal handlers for syllabus inspection
  attachCourseModalListeners(container);
}

/**
 * 2. Courses View (Route: '/courses')
 */
export function renderCourses(container) {
  container.innerHTML = `
    <div class="page-header" aria-labelledby="courses-page-title">
      <div class="container">
        <span class="sub-title">Explore Curriculum</span>
        <h1 id="courses-page-title" class="page-title">Interactive Engineering Courses</h1>
        <p class="page-subtitle">Filter by specialization or search by keyword to discover in-depth tracks on web engineering, distributed systems, and UX architectures.</p>
      </div>
    </div>

    <section class="section" aria-labelledby="course-filters-heading">
      <div class="container">
        <!-- Controls: Search & Category Filter -->
        <div class="filter-controls-card">
          <h2 id="course-filters-heading" class="sr-only">Course Filters and Search</h2>
          <div class="search-input-wrapper">
            <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <label for="courseSearchInput" class="sr-only">Search courses by title, skill, or keyword</label>
            <input
              type="search"
              id="courseSearchInput"
              class="form-control search-input"
              placeholder="Search courses by title, skill (e.g. Vanilla JS, Docker, SQL)..."
              value="${escapeHtml(state.courseSearchQuery)}"
              autocomplete="off"
            >
            ${state.courseSearchQuery ? `
              <button type="button" id="clearSearchBtn" class="search-clear-btn" aria-label="Clear search query">✕</button>
            ` : ''}
          </div>

          <!-- Category Filter Pills -->
          <div class="category-pills" role="toolbar" aria-label="Filter courses by category">
            ${['All', 'Frontend', 'Backend', 'UI/UX', 'Cloud', 'Data'].map(cat => `
              <button
                type="button"
                class="category-pill ${state.selectedCategory === cat ? 'is-active' : ''}"
                data-category="${cat}"
                aria-pressed="${state.selectedCategory === cat}"
              >
                ${cat}
              </button>
            `).join('')}
          </div>

          <div class="filter-status-bar flex-between">
            <div id="courseCountDisplay" class="course-count-text" role="status" aria-live="polite">
              Loading courses...
            </div>
            ${(state.courseSearchQuery || state.selectedCategory !== 'All') ? `
              <button type="button" id="resetFiltersBtn" class="btn-text">
                Reset All Filters
              </button>
            ` : ''}
          </div>
        </div>

        <!-- Courses Cards Grid Container -->
        <div id="coursesGrid" class="grid-3 courses-grid" aria-live="polite">
          <!-- Dynamically populated by updateCoursesList() -->
        </div>
      </div>
    </section>
  `;

  // Attach search and filter event listeners
  setupCoursesListeners(container);
  updateCoursesList(container);
}

/**
 * Update the courses list dynamically based on search & category state
 */
function updateCoursesList(container) {
  const grid = container.querySelector('#coursesGrid');
  const countDisplay = container.querySelector('#courseCountDisplay');
  if (!grid || !countDisplay) return;

  const query = state.courseSearchQuery.toLowerCase().trim();
  const category = state.selectedCategory;

  const filtered = coursesData.filter(course => {
    const matchesCategory = category === 'All' || course.category.toLowerCase() === category.toLowerCase();
    const matchesQuery = !query ||
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.skills.some(s => s.toLowerCase().includes(query)) ||
      course.category.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });

  countDisplay.innerHTML = `Showing <strong>${filtered.length}</strong> of ${coursesData.length} courses${category !== 'All' ? ` in <em>${category}</em>` : ''}${query ? ` matching "<em>${escapeHtml(query)}</em>"` : ''}`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state-card col-span-all text-center">
        <div class="empty-icon" aria-hidden="true">🔍</div>
        <h3 class="empty-title">No Matching Courses Found</h3>
        <p class="empty-desc">We couldn't find any courses matching your search query "<strong>${escapeHtml(query)}</strong>" in the ${category} category.</p>
        <button type="button" id="emptyResetBtn" class="btn btn-primary btn-sm">Clear Filters & View All</button>
      </div>
    `;
    const emptyBtn = grid.querySelector('#emptyResetBtn');
    if (emptyBtn) {
      emptyBtn.addEventListener('click', () => {
        state.courseSearchQuery = '';
        state.selectedCategory = 'All';
        renderCourses(container);
      });
    }
    return;
  }

  grid.innerHTML = filtered.map(renderCourseCardMarkup).join('');
  attachCourseModalListeners(container);
}

/**
 * Setup event listeners on Courses view
 */
function setupCoursesListeners(container) {
  const searchInput = container.querySelector('#courseSearchInput');
  const clearBtn = container.querySelector('#clearSearchBtn');
  const resetBtn = container.querySelector('#resetFiltersBtn');
  const categoryButtons = container.querySelectorAll('.category-pill');

  let debounceTimer = null;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        state.courseSearchQuery = e.target.value;
        renderCourses(container); // Re-render to update clear button & list
        // Re-focus input
        const reInput = container.querySelector('#courseSearchInput');
        if (reInput) {
          reInput.focus();
          reInput.selectionStart = reInput.selectionEnd = reInput.value.length;
        }
      }, 180);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      state.courseSearchQuery = '';
      renderCourses(container);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.courseSearchQuery = '';
      state.selectedCategory = 'All';
      renderCourses(container);
    });
  }

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedCategory = btn.dataset.category;
      renderCourses(container);
    });
  });
}

/**
 * Helper: Generate course card markup
 */
function renderCourseCardMarkup(c) {
  return `
    <article class="course-card" data-course-id="${c.id}">
      <div class="course-thumb-wrapper">
        <img src="${c.thumbnail}" alt="${c.title} course illustration" width="320" height="180" class="course-thumb" loading="lazy">
        <span class="course-badge badge-${c.badge.toLowerCase().replace(/\s+/g, '-')}">${c.badge}</span>
      </div>
      <div class="course-body">
        <div class="course-meta-top">
          <span class="course-cat">${c.category}</span>
          <span class="course-level level-${c.level.toLowerCase()}">${c.level}</span>
        </div>
        <h3 class="course-title">${c.title}</h3>
        <p class="course-desc">${c.description}</p>
        <div class="course-skills">
          ${c.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
        <div class="course-footer">
          <div class="course-stats">
            <span class="rating-badge">★ ${c.rating.toFixed(2)}</span>
            <span class="duration-text">${c.duration} · ${c.lessons} lessons</span>
          </div>
          <button type="button" class="btn btn-outline btn-sm syllabus-btn" data-syllabus-id="${c.id}" aria-label="View syllabus for ${c.title}">
            Syllabus
          </button>
        </div>
      </div>
    </article>
  `;
}

/**
 * 3. Student Projects View (Route: '/projects')
 */
export function renderProjects(container) {
  container.innerHTML = `
    <div class="page-header" aria-labelledby="projects-page-title">
      <div class="container">
        <span class="sub-title">Student Portfolio</span>
        <h1 id="projects-page-title" class="page-title">Showcase of Student Projects</h1>
        <p class="page-subtitle">Real-world applications built by DevSpace engineers. Explore single-page architectures, accessible design systems, and distributed backends.</p>
      </div>
    </div>

    <section class="section" aria-labelledby="projects-grid-heading">
      <div class="container">
        <!-- Filter Controls -->
        <div class="filter-controls-card">
          <div class="flex-between flex-wrap gap-md">
            <div>
              <h2 id="projects-grid-heading" class="card-group-title">Filter by Project Status</h2>
              <p class="text-muted text-sm">Select a category or status to review specific portfolio submissions.</p>
            </div>
            <div class="category-pills" role="toolbar" aria-label="Filter projects by status">
              ${['All', 'Featured', 'Completed', 'In Progress'].map(st => `
                <button
                  type="button"
                  class="category-pill ${state.projectFilter === st ? 'is-active' : ''}"
                  data-status="${st}"
                  aria-pressed="${state.projectFilter === st}"
                >
                  ${st}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Projects Grid -->
        <div id="projectsGrid" class="grid-3 projects-grid">
          <!-- Populated by updateProjectsList() -->
        </div>
      </div>
    </section>
  `;

  setupProjectsListeners(container);
  updateProjectsList(container);
}

function updateProjectsList(container) {
  const grid = container.querySelector('#projectsGrid');
  if (!grid) return;

  const filter = state.projectFilter;
  const filtered = studentProjectsData.filter(p => {
    if (filter === 'All') return true;
    return p.status.toLowerCase() === filter.toLowerCase();
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state-card col-span-all text-center">
        <h3 class="empty-title">No Projects in this Category</h3>
        <p class="empty-desc">There are currently no projects matching the status "${filter}".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const isStarred = state.starredProjects.has(p.id);
    const starCount = p.stars + (isStarred ? 1 : 0);

    return `
      <article class="project-card" data-project-id="${p.id}">
        <div class="project-header">
          <span class="project-status status-${p.status.toLowerCase().replace(/\s+/g, '-')}">${p.status}</span>
          <span class="project-category">${p.category}</span>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-author">Built by <strong>${p.author}</strong></p>
        <p class="project-desc">${p.description}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
        </div>
        <div class="project-footer">
          <div class="project-metrics">
            <button
              type="button"
              class="star-toggle-btn ${isStarred ? 'is-starred' : ''}"
              data-star-id="${p.id}"
              aria-label="${isStarred ? 'Remove star from' : 'Star'} project ${p.title}"
            >
              ★ <span class="star-count">${starCount}</span>
            </button>
            <span class="view-metric" title="Total project views">👁️ ${p.views}</span>
          </div>
          <button type="button" class="btn btn-outline btn-sm inspect-project-btn" data-project-id="${p.id}">
            Inspect Spec
          </button>
        </div>
      </article>
    `;
  }).join('');

  // Attach Star Toggle & Inspect listeners
  attachProjectCardListeners(container);
}

function setupProjectsListeners(container) {
  const pills = container.querySelectorAll('.category-pill');
  pills.forEach(btn => {
    btn.addEventListener('click', () => {
      state.projectFilter = btn.dataset.status;
      renderProjects(container);
    });
  });
}

function attachProjectCardListeners(container) {
  const starButtons = container.querySelectorAll('.star-toggle-btn');
  starButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.starId;
      if (state.starredProjects.has(id)) {
        state.starredProjects.delete(id);
      } else {
        state.starredProjects.add(id);
      }
      updateProjectsList(container);
    });
  });

  const inspectButtons = container.querySelectorAll('.inspect-project-btn');
  inspectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.projectId;
      const proj = studentProjectsData.find(p => p.id === id);
      if (proj) {
        showGlobalModal(`Project Specification: ${proj.title}`, `
          <div class="modal-spec-content">
            <p class="modal-author-badge">Author: <strong>${proj.author}</strong> | Category: <strong>${proj.category}</strong></p>
            <p>${proj.description}</p>
            <h4>Architecture & Core Technologies:</h4>
            <ul>
              ${proj.tags.map(t => `<li><strong>${t}</strong>: Production implementation and integration test suite.</li>`).join('')}
            </ul>
            <h4>Verification Status:</h4>
            <p>Peer-reviewed by DevSpace senior engineering mentor. Verified responsive at 320px–1440px viewports with 0px horizontal overflow.</p>
          </div>
        `);
      }
    });
  });
}

/**
 * 4. About View (Route: '/about')
 */
export function renderAbout(container) {
  container.innerHTML = `
    <div class="page-header" aria-labelledby="about-page-title">
      <div class="container">
        <span class="sub-title">Our Philosophy</span>
        <h1 id="about-page-title" class="page-title">About DevSpace Learning Hub</h1>
        <p class="page-subtitle">Pioneering accessible, framework-independent frontend architecture and distributed systems mastery.</p>
      </div>
    </div>

    <section class="section" aria-labelledby="mission-heading">
      <div class="container grid-2-col">
        <div>
          <span class="sub-title">The Problem We Solve</span>
          <h2 id="mission-heading" class="section-title">Beyond Black-Box Frameworks</h2>
          <p class="mb-md">
            Modern web development education frequently emphasizes massive frameworks before students understand the native browser environment. When things break or performance lags, developers struggle without fundamental knowledge of the DOM, the Event Loop, and browser APIs.
          </p>
          <p class="mb-md">
            <strong>DevSpace</strong> was created as a rigorous learning hub to teach software engineers how to build robust, production-ready Single Page Applications using the native capabilities of modern browsers: the <strong>HTML5 History API</strong>, semantic DOM manipulation, CSS Custom Properties, and WCAG accessibility standards.
          </p>
          <div class="feature-bullets">
            <div class="bullet-item">
              <span class="bullet-icon">✓</span>
              <span><strong>Pure Web Standards:</strong> Zero runtime baggage, zero transpilation barriers, 100% native browser support.</span>
            </div>
            <div class="bullet-item">
              <span class="bullet-icon">✓</span>
              <span><strong>Deep History API Mastery:</strong> PushState, popstate, decoupled state routing, and back/forward navigation.</span>
            </div>
            <div class="bullet-item">
              <span class="bullet-icon">✓</span>
              <span><strong>Universal Accessibility:</strong> WCAG 2.2 AA compliant focus management and live screen-reader announcements.</span>
            </div>
          </div>
        </div>
        <div class="text-center">
          <img src="assets/about-mission.svg" alt="DevSpace collaborative engineering pathways illustration" width="500" height="360" class="fluid-img" loading="lazy">
        </div>
      </div>
    </section>

    <!-- Architecture Comparison Section -->
    <section class="section bg-light" aria-labelledby="arch-heading">
      <div class="container">
        <div class="section-header text-center">
          <span class="sub-title">Technical Deep Dive</span>
          <h2 id="arch-heading" class="section-title">Traditional MPA vs. DevSpace SPA Architecture</h2>
          <p class="section-subtitle">Understanding why client-side routing delivers lightning-fast perceived performance.</p>
        </div>
        <div class="grid-2-col">
          <article class="arch-card mpa-card">
            <div class="arch-badge badge-mpa">Traditional Multi-Page App (MPA)</div>
            <h3>Full Page Reload Cycle</h3>
            <ul class="arch-list">
              <li><strong>Click:</strong> Browser sends HTTP GET request to server.</li>
              <li><strong>Network:</strong> Entire HTML document parsed and rendered from scratch.</li>
              <li><strong>Flash:</strong> White screen flash between page transitions.</li>
              <li><strong>State Loss:</strong> JavaScript memory and form focus completely wiped.</li>
              <li><strong>Bandwidth:</strong> Redundant headers, footers, and styles re-downloaded.</li>
            </ul>
          </article>

          <article class="arch-card spa-card">
            <div class="arch-badge badge-spa">DevSpace Single Page App (SPA)</div>
            <h3>Instant Client-Side DOM Hydration</h3>
            <ul class="arch-list">
              <li><strong>Click:</strong> Router intercepts click, calls <code>history.pushState()</code>.</li>
              <li><strong>No Flash:</strong> Persistent shell (Header/Footer) remains untouched.</li>
              <li><strong>Instant:</strong> Target view renders directly into <code>#app-root</code> in milliseconds.</li>
              <li><strong>State Retained:</strong> Search inputs, active sessions, and client memory persist.</li>
              <li><strong>Accessible:</strong> Screen readers notified via <code>aria-live="polite"</code>.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Interactive Learning Pathway Timeline -->
    <section class="section" aria-labelledby="pathway-heading">
      <div class="container">
        <div class="section-header text-center">
          <span class="sub-title">Curriculum Blueprint</span>
          <h2 id="pathway-heading" class="section-title">The Four-Stage Engineering Journey</h2>
        </div>
        <div class="pathway-grid">
          <div class="pathway-step">
            <div class="step-num">01</div>
            <h4>Semantic Foundations</h4>
            <p>HTML5 landmarks, strict heading hierarchies, and WCAG 2.2 AA accessibility principles.</p>
          </div>
          <div class="pathway-step">
            <div class="step-num">02</div>
            <h4>Modern CSS Tokens</h4>
            <p>Fluid typography clamp(), CSS Grid minmax layout safety, and high-contrast color systems.</p>
          </div>
          <div class="pathway-step">
            <div class="step-num">03</div>
            <h4>SPA State & Routing</h4>
            <p>HTML5 History API, popstate event loops, component rendering, and decoupled modules.</p>
          </div>
          <div class="pathway-step">
            <div class="step-num">04</div>
            <h4>Performance & CI/CD</h4>
            <p>Zero layout shift (CLS), asset optimization, automated Playwright audits, and GitHub push.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * 5. Contact View (Route: '/contact')
 */
export function renderContact(container) {
  container.innerHTML = `
    <div class="page-header" aria-labelledby="contact-page-title">
      <div class="container">
        <span class="sub-title">Get in Touch</span>
        <h1 id="contact-page-title" class="page-title">Connect with DevSpace Advisors</h1>
        <p class="page-subtitle">Have questions about our single-page application curriculum or student project tracks? Send us a simulated message below.</p>
      </div>
    </div>

    <section class="section" aria-labelledby="contact-form-heading">
      <div class="container contact-grid">
        <!-- Contact Form Card -->
        <div class="contact-form-card">
          <h2 id="contact-form-heading" class="card-group-title">Send an Inquiry</h2>
          <p class="form-instructions text-muted mb-md">
            Fields marked with an asterisk (<span class="req" aria-hidden="true">*</span>) are mandatory. Real-time client-side validation is active.
          </p>

          <!-- Form Status Live Region -->
          <div id="contactStatusRegion" class="status-region" role="status" aria-live="polite"></div>

          <form id="contactForm" novalidate aria-labelledby="contact-form-heading">
            <div class="form-group">
              <label for="contactName" class="form-label">
                Full Name <span class="req" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="contactName"
                name="name"
                class="form-control"
                placeholder="e.g. Elena Vance"
                required
                minlength="2"
                autocomplete="name"
                aria-describedby="nameError"
              >
              <span id="nameError" class="field-error" role="alert" aria-live="assertive"></span>
            </div>

            <div class="form-group">
              <label for="contactEmail" class="form-label">
                Email Address <span class="req" aria-hidden="true">*</span>
              </label>
              <input
                type="email"
                id="contactEmail"
                name="email"
                class="form-control"
                placeholder="name@domain.com"
                required
                autocomplete="email"
                aria-describedby="emailError"
              >
              <span id="emailError" class="field-error" role="alert" aria-live="assertive"></span>
            </div>

            <div class="form-group">
              <label for="contactSubject" class="form-label">
                Inquiry Topic <span class="req" aria-hidden="true">*</span>
              </label>
              <select id="contactSubject" name="subject" class="form-control" required aria-describedby="subjectError">
                <option value="">-- Please select a subject --</option>
                <option value="courses">Course Curriculum & Syllabus</option>
                <option value="projects">Student Project Mentorship</option>
                <option value="technical">SPA Technical Architecture Question</option>
                <option value="general">General Inquiries & Feedback</option>
              </select>
              <span id="subjectError" class="field-error" role="alert" aria-live="assertive"></span>
            </div>

            <div class="form-group">
              <label for="contactMessage" class="form-label">
                Message Details <span class="req" aria-hidden="true">*</span>
              </label>
              <textarea
                id="contactMessage"
                name="message"
                class="form-control"
                rows="5"
                placeholder="Please describe your question or learning goals in detail (minimum 10 characters)..."
                required
                minlength="10"
                aria-describedby="messageError"
              ></textarea>
              <span id="messageError" class="field-error" role="alert" aria-live="assertive"></span>
            </div>

            <button type="submit" id="contactSubmitBtn" class="btn btn-primary btn-block">
              Submit Inquiry
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
        </div>

        <!-- Contact Information / FAQ Sidebar -->
        <aside class="contact-sidebar" aria-labelledby="sidebar-heading">
          <div class="sidebar-box">
            <h3 id="sidebar-heading" class="sidebar-title">Simulation Note</h3>
            <p class="sidebar-text">
              This contact form is a <strong>frontend SPA simulation</strong>. All inputs are evaluated against strict client-side validation rules in real time. Upon valid submission, a simulated confirmation state is rendered without page reloads or server transmissions.
            </p>
          </div>

          <div class="sidebar-box">
            <h3 class="sidebar-title">Advisory Office Hours</h3>
            <ul class="contact-info-list">
              <li><strong>Technical Inquiries:</strong> Mon–Fri, 9:00 AM – 6:00 PM IST</li>
              <li><strong>Curriculum Lead:</strong> Shweta Thorat (Yuva Intern)</li>
              <li><strong>Repository:</strong> <a href="https://github.com/shweeta1015/digital-design-projects" target="_blank" rel="noopener">digital-design-projects</a></li>
              <li><strong>Environment:</strong> Pure Vanilla HTML5 / CSS3 / ES Modules</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  `;

  setupContactForm(container);
}

/**
 * Handle contact form real-time validation and submission
 */
function setupContactForm(container) {
  const form = container.querySelector('#contactForm');
  const statusRegion = container.querySelector('#contactStatusRegion');
  if (!form) return;

  const fields = {
    name: form.querySelector('#contactName'),
    email: form.querySelector('#contactEmail'),
    subject: form.querySelector('#contactSubject'),
    message: form.querySelector('#contactMessage')
  };

  const errors = {
    name: form.querySelector('#nameError'),
    email: form.querySelector('#emailError'),
    subject: form.querySelector('#subjectError'),
    message: form.querySelector('#messageError')
  };

  function validateField(fieldName) {
    const input = fields[fieldName];
    const err = errors[fieldName];
    const val = input.value.trim();
    let message = '';

    if (fieldName === 'name') {
      if (!val) {
        message = 'Please enter your full name.';
      } else if (val.length < 2) {
        message = 'Name must be at least 2 characters long.';
      }
    } else if (fieldName === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!val) {
        message = 'Please provide an email address.';
      } else if (!emailRegex.test(val)) {
        message = 'Please enter a valid email address (e.g. name@domain.com).';
      }
    } else if (fieldName === 'subject') {
      if (!val) {
        message = 'Please select an inquiry topic.';
      }
    } else if (fieldName === 'message') {
      if (!val) {
        message = 'Please enter your message.';
      } else if (val.length < 10) {
        message = 'Message must be at least 10 characters long.';
      }
    }

    if (message) {
      input.classList.add('is-invalid');
      input.setAttribute('aria-invalid', 'true');
      err.textContent = message;
      return false;
    } else {
      input.classList.remove('is-invalid');
      input.removeAttribute('aria-invalid');
      err.textContent = '';
      return true;
    }
  }

  // Real-time blur listeners
  Object.keys(fields).forEach(key => {
    fields[key].addEventListener('blur', () => validateField(key));
    fields[key].addEventListener('input', () => {
      if (fields[key].classList.contains('is-invalid')) {
        validateField(key);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let allValid = true;
    Object.keys(fields).forEach(key => {
      const isValid = validateField(key);
      if (!isValid && allValid) {
        fields[key].focus();
        allValid = false;
      }
    });

    if (allValid) {
      const name = fields.name.value.trim();
      const subject = fields.subject.options[fields.subject.selectedIndex].text;

      // Render accessible success card inside status region
      statusRegion.innerHTML = `
        <div class="alert alert-success" role="alert">
          <div class="alert-icon" aria-hidden="true">✓</div>
          <div>
            <h4 class="alert-heading">Inquiry Received Successfully!</h4>
            <p>Thank you, <strong>${escapeHtml(name)}</strong>. Your simulated inquiry regarding <em>"${escapeHtml(subject)}"</em> has been validated and accepted by the client router.</p>
            <p class="text-sm mt-xs">Simulation Notice: In production, this client-side state machine triggers an asynchronous JSON POST payload to the API server.</p>
          </div>
        </div>
      `;

      form.reset();
      Object.keys(fields).forEach(key => {
        fields[key].classList.remove('is-invalid');
        fields[key].removeAttribute('aria-invalid');
        errors[key].textContent = '';
      });

      // Smooth scroll status into view
      statusRegion.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

/**
 * 6. 404 Not Found View
 */
export function renderNotFound(container, attemptedPath) {
  container.innerHTML = `
    <section class="section not-found-view" aria-labelledby="not-found-heading">
      <div class="container text-center">
        <div class="not-found-code" aria-hidden="true">404</div>
        <h1 id="not-found-heading" class="section-title">View Not Found</h1>
        <p class="section-subtitle">
          The requested route <code>${escapeHtml(attemptedPath)}</code> does not correspond to any view registered with the DevSpace client router.
        </p>
        <div class="btn-group justify-center mt-lg">
          <a href="/" data-link class="btn btn-primary">
            Return to Dashboard
          </a>
          <a href="/courses" data-link class="btn btn-outline">
            Browse All Courses
          </a>
        </div>
      </div>
    </section>
  `;
}

/* ==========================================================================
   GLOBAL MODAL & UI HELPERS
   ========================================================================== */

function attachCourseModalListeners(container) {
  const syllabusButtons = container.querySelectorAll('.syllabus-btn');
  syllabusButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.syllabusId;
      const course = coursesData.find(c => c.id === id);
      if (course) {
        showGlobalModal(`Course Syllabus: ${course.title}`, `
          <div class="modal-syllabus-content">
            <div class="modal-meta-grid">
              <div><strong>Level:</strong> ${course.level}</div>
              <div><strong>Duration:</strong> ${course.duration}</div>
              <div><strong>Lessons:</strong> ${course.lessons}</div>
              <div><strong>Instructor:</strong> ${course.instructor}</div>
            </div>
            <p class="modal-course-desc">${course.description}</p>
            <h4>Key Modules & Practical Deliverables:</h4>
            <ol class="modal-modules-list">
              <li><strong>Module 1:</strong> Foundations & Architectural Analysis</li>
              <li><strong>Module 2:</strong> State Machines & Component Lifecycle</li>
              <li><strong>Module 3:</strong> Client-Side Routing with HTML5 History API</li>
              <li><strong>Module 4:</strong> Accessibility, WCAG 2.2 AA Auditing & Focus Trapping</li>
              <li><strong>Module 5:</strong> Capstone Project Formulation & Performance Profiling</li>
            </ol>
            <div class="modal-actions">
              <a href="/contact" data-link class="btn btn-primary btn-sm modal-enroll-link">Inquire About This Track</a>
            </div>
          </div>
        `);
      }
    });
  });
}

function showGlobalModal(title, bodyHtml) {
  let modalOverlay = document.getElementById('globalModalOverlay');
  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.id = 'globalModalOverlay';
    modalOverlay.className = 'modal-overlay';
    modalOverlay.setAttribute('role', 'dialog');
    modalOverlay.setAttribute('aria-modal', 'true');
    modalOverlay.setAttribute('aria-labelledby', 'modalTitle');
    document.body.appendChild(modalOverlay);
  }

  modalOverlay.innerHTML = `
    <div class="modal-container">
      <div class="modal-header">
        <h3 id="modalTitle" class="modal-title">${escapeHtml(title)}</h3>
        <button type="button" id="modalCloseBtn" class="modal-close-btn" aria-label="Close dialog">✕</button>
      </div>
      <div class="modal-body">
        ${bodyHtml}
      </div>
    </div>
  `;

  modalOverlay.classList.add('is-open');
  document.body.classList.add('modal-open');

  const closeBtn = modalOverlay.querySelector('#modalCloseBtn');
  const closeModal = () => {
    modalOverlay.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', handleEsc);
  };

  const handleEsc = (e) => {
    if (e.key === 'Escape') closeModal();
  };

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', handleEsc);

  // Focus close button for accessibility
  closeBtn.focus();

  // If there's an internal link inside modal
  const enrollLink = modalOverlay.querySelector('.modal-enroll-link');
  if (enrollLink) {
    enrollLink.addEventListener('click', () => closeModal());
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, function (m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}

/* ==========================================================================
   APP BOOTSTRAPPER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('app-root');
  const announcerElement = document.getElementById('route-announcer');

  // Define SPA Routes
  const routes = [
    { path: '/', title: 'Home Dashboard', render: renderHome },
    { path: '/courses', title: 'Interactive Courses', render: renderCourses },
    { path: '/projects', title: 'Student Projects', render: renderProjects },
    { path: '/about', title: 'About DevSpace', render: renderAbout },
    { path: '/contact', title: 'Contact Advisors', render: renderContact }
  ];

  // Initialize Router
  const router = new Router(routes, {
    rootElement,
    announcerElement,
    notFound: renderNotFound,
    titlePrefix: 'DevSpace — Interactive Learning Hub'
  });

  router.init();

  // Mobile Navigation Drawer Toggle Setup
  const mobileToggle = document.getElementById('mobileNavToggle');
  const primaryNav = document.getElementById('primaryNav');

  if (mobileToggle && primaryNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('nav-locked', isOpen);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && primaryNav.classList.contains('is-open')) {
        primaryNav.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-locked');
        mobileToggle.focus();
      }
    });
  }

  // Expose router for developer debugging in console
  window.__DEVSPACE_ROUTER__ = router;
});
