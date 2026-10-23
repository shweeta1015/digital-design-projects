# Digital Design & Web Development Projects

A curated collection of digital design and frontend web development projects, showcasing UI/UX wireframing, semantic HTML5, modern CSS3 styling, fluid responsive layout architectures, and accessibility standards.

---

## Repository Structure

```
digital-design-projects/
├── README.md
├── .gitignore
├── task-01-static-webpage/            # Week 1: Responsive Static Webpage Assignment
│   ├── index.html                     # Semantic HTML5 webpage (ApexHub)
│   ├── style.css                      # Modern CSS3 stylesheet (Variables, Flexbox, Grid)
│   ├── wireframe.svg                  # Dual-viewport low-fidelity vector wireframe
│   ├── report.md                      # Comprehensive assignment report (Markdown)
│   ├── report.pdf                     # Compiled assignment report (PDF)
│   ├── report.docx                    # Formatted submission report (Word Document)
│   ├── assets/                        # Local SVG graphics, illustrations & avatars
│   │   ├── hero-workspace.svg
│   │   ├── space-hotdesk.svg
│   │   ├── space-dedicated.svg
│   │   ├── space-studio.svg
│   │   ├── avatar-1.svg
│   │   ├── avatar-2.svg
│   │   └── avatar-3.svg
│   └── test_previews/                 # Cross-viewport browser screenshots
│       ├── desktop_1440x900.png
│       ├── laptop_1024x768.png
│       ├── tablet_768x1024.png
│       ├── mobile_375x812.png
│       ├── fullpage_1440w.png
│       ├── fullpage_375w.png
│       └── test_summary.json
│
├── task-2/                            # Week 2: Implementation of Responsive Web Design
│   ├── index.html                     # Semantic HTML5 webpage (Aura Digital Studio)
│   ├── style.css                      # Production CSS3 stylesheet (50 tokens, fluid clamp())
│   ├── script.js                      # Vanilla JS (ARIA mobile drawer, real-time form validation)
│   ├── report.md                      # Comprehensive technical implementation report (Markdown)
│   ├── report.pdf                     # Compiled publication-grade PDF report
│   ├── report.docx                    # Formatted Microsoft Word submission report
│   ├── test_summary.json              # Machine-readable automated test execution metrics
│   ├── assets/                        # 14 custom vector SVG illustrations & UI graphics
│   │   ├── hero-agency-illustration.svg
│   │   ├── project-novapay.svg
│   │   ├── project-kroma.svg
│   │   ├── project-solaria.svg
│   │   ├── project-aetheria.svg
│   │   ├── service-brand.svg
│   │   ├── service-product.svg
│   │   ├── service-web.svg
│   │   ├── service-cloud.svg
│   │   ├── service-systems.svg
│   │   ├── service-motion.svg
│   │   ├── avatar-elena.svg
│   │   ├── avatar-marcus.svg
│   │   └── avatar-priya.svg
│   └── test_previews/                 # Headless Chrome multi-viewport test captures
│
├── task-03/                           # Week 3: JavaScript Interactive User Experience
│   ├── index.html                     # Semantic HTML5 dynamic web app (ApexHub Innovation Space)
│   ├── css/
│   │   └── style.css                  # 1,960 lines of responsive CSS, light/dark themes
│   ├── js/
│   │   └── script.js                  # 826 lines of pure Vanilla JS (Theme, Calc, Accordion, Validation)
│   ├── assets/                        # 7 custom vector SVG illustrations & avatars
│   ├── report/
│   │   ├── Week_3_Technical_Report.docx      # 14-section formal Microsoft Word Technical Report
│   │   └── Week_3_Submission_Description.txt # 295-word submission portal description
│   ├── test_previews/                 # 14 automated Playwright viewport screenshots
│   ├── test_summary.json              # Playwright automated test metrics (0px overflow)
│   └── README.md                      # Task 03 technical documentation
│
└── task-04-performance-accessibility/ # Week 4: Enhancing Web Page Performance & Accessibility
    ├── index.html                     # Optimized semantic HTML5 webpage (ApexHub)
    ├── style.css                      # Modular CSS3 stylesheet (1,159 lines, zero-overflow grid)
    ├── report.md                      # Comprehensive 13-section technical report with Lighthouse audits
    ├── README.md                      # Technical documentation & reproduction steps
    └── assets/                        # 7 scalable vector graphics (SVGs) with explicit dimensions
```

---

## Projects Directory

### Task 01: Responsive Static Webpage — ApexHub Innovation Space
- **Directory:** [`task-01-static-webpage/`](task-01-static-webpage/)
- **Concept:** ApexHub — A clean-tech, high-performance co-working and innovation hub built for software engineers, hardware creators, and sustainable startups.
- **Tech Stack:** Semantic HTML5, CSS3, Vector SVGs, Playwright & Chrome CDP for automated testing.
- **Key Features:**
  - 100% framework-free (no Bootstrap, Tailwind, or client-side UI libraries).
  - Responsive design across 4 standard viewports (Mobile 320–480px, Tablet 481–768px, Laptop 769–1024px, Desktop 1025px+).
  - Fluid typography (`clamp()`), CSS custom properties, and standardized spacing scales.
  - Multi-dimensional layout blending CSS Grid for 2D card structures and Flexbox for 1D alignments.
  - Accessible mobile navigation drawer with automated drawer close on in-page section jump.
  - Zero unintended horizontal scroll across all screen sizes.

---

### Task 2: Implementation of Responsive Web Design — Aura Digital Studio
- **Directory:** [`task-2/`](task-2/)
- **Concept:** Aura Digital Studio — A premier digital product and responsive engineering agency delivering bespoke web applications, design systems, and cloud-native solutions.
- **Design Aesthetic:** Clean, modern, light theme with pure white backgrounds (`#ffffff`, `#f8fafc`), crisp slate borders (`#e2e8f0`), and vibrant lavender (`#7c3aed`) & royal cobalt blue (`#2563eb`) accent palettes.
- **Tech Stack:** Semantic HTML5, CSS3 (CSS Grid L2, Flexbox, Custom Properties), Vanilla JavaScript (ECMAScript 2022), Vector SVGs, Playwright + Headless Chromium test engine.
- **Standards & Verification:**
  - **100% W3C Nu HTML Validator Compliance:** Verified with **0 errors and 0 warnings**.
  - **Zero Horizontal Overflow:** Verified across 5 exact viewports (**320×568**, **375×812**, **768×1024**, **1024×768**, **1440×900**) with `scrollWidth == clientWidth` (0px overflow).
  - **Fluid Mathematical Typography & Spacing:** Sizing powered by CSS `clamp()` (`clamp(2.25rem, 1.6rem + 2.8vw, 4rem)` for hero displays).
  - **Accessible WAI-ARIA Navigation:** Lightweight mobile drawer toggle adhering to ARIA practices (`aria-expanded`, `aria-controls`, `Escape` listener, body scroll lock, and link click auto-close).
  - **Real-Time Client-Side Form Validation:** Dynamic field validation with live visual state indicators, regex email validation, character length constraints, and screen-reader status live regions (`role="status"`, `aria-live="polite"`).
  - **Resolution-Independent Assets:** 14 custom vector SVG illustrations and interface graphics (~35 KB total asset payload).

---

### Task 03: JavaScript Interactive User Experience — ApexHub Innovation Space
- **Directory:** [`task-03/`](task-03/)
- **Concept:** ApexHub Innovation Space — Dynamic, accessible web application for a tech coworking and rapid prototyping campus.
- **Tech Stack:** Semantic HTML5, CSS3 (Light/Dark mode tokens, CSS Grid, Flexbox), Vanilla JavaScript (ES6+), WAI-ARIA authoring practices, Playwright test engine.
- **Key Interactive Features:**
  - **Appearance Switcher:** Light/Dark theme toggle with `localStorage` preference persistence.
  - **Dynamic Mobile Navigation:** Off-canvas drawer with focus trapping and active Scrollspy section tracking.
  - **Interactive Space Filtering:** Category filtering (*Hot Desks*, *Dedicated Desks*, *Private Studios*) via `data-category` attributes.
  - **Live Pricing Engine:** Multi-variable plan calculation with member slider (1–30), 20% annual discount toggle, and `requestAnimationFrame` animated totals.
  - **Accessible FAQ Accordion:** W3C WAI-ARIA compliant accordion with keyboard navigation (`Enter`, `Space`, `ArrowUp`, `ArrowDown`).
  - **Client-Side Form Validation:** Real-time regex validation, live error alerts, character counters, and dynamic reservation ticket generator (`APX-XXXX`).
  - **Zero Mobile Overflow:** Verified 0px horizontal overflow across all 4 viewports (320px, 375px, 768px, 1440px).

---

### Task 04: Enhancing Web Page Performance & Accessibility — ApexHub Innovation Space
- **Directory:** [`task-04-performance-accessibility/`](task-04-performance-accessibility/)
- **Concept:** ApexHub Innovation Space — High-performance, fully accessible showcase demonstrating WCAG 2.2 Level AA compliance, Core Web Vitals optimization, and strict semantic HTML5 engineering.
- **Tech Stack:** Semantic HTML5, CSS3 (Modern Custom Properties, CSS Grid, Flexbox), Zero External Blocking Dependencies, Vector SVGs.
- **Key Performance & Accessibility Optimizations:**
  - **Lighthouse Performance Score:** **100/100** (FCP: 0.2s, LCP: 0.4s, CLS: 0.000, Speed Index: 0.4s, TBT: 10ms).
  - **Lighthouse Accessibility Score:** **97/100** (Full WCAG 2.2 AA contrast compliance, descriptive labels, live error feedback, skip link).
  - **Lighthouse Best Practices & SEO:** **100/100** across both categories.
  - **Zero Blocking Scripts & Fonts:** System font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto...`), inline SVG icons, zero render-blocking Google Font network calls.
  - **Zero Layout Shift (CLS: 0.000):** Explicit `width` and `height` attributes on all SVGs, `aspect-ratio` containers, and `contain-intrinsic-size` where applicable.
  - **Accessible Form Controls:** Explicit `<label for="...">` associations, `aria-required`, `aria-describedby`, client-side pattern matching, and live region status announcers.
  - **Fluid Typography & Responsive Design:** Clamp-based fluid sizing, CSS Grid/Flexbox architectures, tested 0px overflow across 320px, 375px, 768px, and 1440px.

---

## How to Run & View Locally

### Option 1: Direct File Launch in Browser
Open any project's entrypoint directly in any modern web browser:
- **Week 1:** Open `task-01-static-webpage/index.html`
- **Week 2:** Open `task-2/index.html`
- **Week 3:** Open `task-03/index.html`
- **Week 4:** Open `task-04-performance-accessibility/index.html`

### Option 2: Local HTTP Server (Python)
From the repository root, start a lightweight web server:

```bash
# To run Week 1:
cd task-01-static-webpage && python -m http.server 3000

# To run Week 2:
cd task-2 && python -m http.server 3000

# To run Week 3:
cd task-03 && python -m http.server 3000

# To run Week 4:
cd task-04-performance-accessibility && python -m http.server 3000
```

Open `http://localhost:3000` in your web browser.

---

## Documentation & Deliverables

### Week 1 Deliverables (`task-01-static-webpage/`)
- [**Wireframe Design**](task-01-static-webpage/wireframe.svg): Low-fidelity vector blueprint for desktop and mobile viewports.
- [**Assignment Report (Markdown)**](task-01-static-webpage/report.md): Technical report detailing design decisions, semantic markup, CSS architecture, and test matrices.
- [**Assignment Report (PDF)**](task-01-static-webpage/report.pdf): Publication-grade PDF report.
- [**Assignment Report (Word Document)**](task-01-static-webpage/report.docx): Formatted Microsoft Word report.

### Week 2 Deliverables (`task-2/`)
- [**Webpage Entrypoint**](task-2/index.html): Semantic HTML5 responsive agency webpage.
- [**Stylesheet**](task-2/style.css): Modular CSS3 design system with 50 custom property tokens and 4 media queries.
- [**Client Script**](task-2/script.js): Accessible mobile navigation and client-side form validation.
- [**Technical Implementation Report (Markdown)**](task-2/report.md): 470+ line comprehensive engineering report with code snippets, breakpoint tables, and test matrices.
- [**Technical Report (PDF)**](task-2/report.pdf): Formatted publication-ready PDF document.
- [**Technical Report (Word Document)**](task-2/report.docx): Formatted Microsoft Word document with embedded cross-device screenshots.
- [**Automated Test Summary**](task-2/test_summary.json): Machine-readable verification log from Playwright automated runs.

### Week 3 Deliverables (`task-03/`)
- [**Webpage Entrypoint**](task-03/index.html): Semantic HTML5 dynamic interactive web application.
- [**Stylesheet**](task-03/css/style.css): Production CSS3 stylesheet with light/dark theme custom properties and fluid layouts.
- [**Client Script**](task-03/js/script.js): Pure Vanilla JavaScript (Theme toggle, live calculator, accordion, validation).
- [**Technical README**](task-03/README.md): Full technical documentation and verification matrix.
- [**Technical Report (Word Document)**](task-03/report/Week_3_Technical_Report.docx): Formal 14-section Microsoft Word report with embedded screenshots.
- [**Submission Description**](task-03/report/Week_3_Submission_Description.txt): 295-word portal submission description text.
- [**Automated Test Summary**](task-03/test_summary.json): Playwright automated test metrics verifying 0px overflow and 100% asset loading.
- [**Test Previews**](task-03/test_previews/): 14 cross-device screenshots and interactive state captures.

### Week 4 Deliverables (`task-04-performance-accessibility/`)
- [**Webpage Entrypoint**](task-04-performance-accessibility/index.html): Highly-optimized semantic HTML5 web page with WCAG 2.2 Level AA accessibility.
- [**Stylesheet**](task-04-performance-accessibility/style.css): Production CSS3 stylesheet (1,159 lines, modern color palette `#2563eb`, `#4f46e5`, `#7c3aed`, system typography, `:focus-visible`).
- [**Technical Report (Markdown)**](task-04-performance-accessibility/report.md): 13-section technical report with before/after empirical Lighthouse audit tables, Core Web Vitals breakdown, and WCAG criteria compliance.
- [**Technical README**](task-04-performance-accessibility/README.md): Full technical documentation, architectural breakdown, reproduction steps, and audit instructions.
- [**Optimized Vector Assets**](task-04-performance-accessibility/assets/): 7 scalable vector graphics (SVGs) with explicit aspect ratios and dimension attributes.

---

## License

This repository is maintained for educational and digital portfolio demonstration purposes.
