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
└── week-02-responsive-web-design/     # Week 2: Implementation of Responsive Web Design
    ├── index.html                     # Semantic HTML5 webpage (Aura Digital Studio)
    ├── style.css                      # Production CSS3 stylesheet (50 tokens, fluid clamp())
    ├── script.js                      # Vanilla JS (ARIA mobile drawer, real-time form validation)
    ├── report.md                      # Comprehensive technical implementation report (Markdown)
    ├── report.pdf                     # Compiled publication-grade PDF report
    ├── report.docx                    # Formatted Microsoft Word submission report
    ├── test_summary.json              # Machine-readable automated test execution metrics
    ├── assets/                        # 14 custom vector SVG illustrations & UI graphics
    │   ├── hero-agency-illustration.svg
    │   ├── project-novapay.svg
    │   ├── project-kroma.svg
    │   ├── project-solaria.svg
    │   ├── project-aetheria.svg
    │   ├── service-brand.svg
    │   ├── service-product.svg
    │   ├── service-web.svg
    │   ├── service-cloud.svg
    │   ├── service-systems.svg
    │   ├── service-motion.svg
    │   ├── avatar-elena.svg
    │   ├── avatar-marcus.svg
    │   └── avatar-priya.svg
    └── test_previews/                 # Headless Chrome multi-viewport test captures
        ├── mobile_320x568.png
        ├── mobile_375x812.png
        ├── tablet_768x1024.png
        ├── laptop_1024x768.png
        ├── desktop_1440x900.png
        ├── fullpage_1440w.png
        ├── fullpage_1024w.png
        ├── fullpage_768w.png
        ├── fullpage_375w.png
        └── fullpage_320w.png
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

### Week 02: Implementation of Responsive Web Design — Aura Digital Studio
- **Directory:** [`week-02-responsive-web-design/`](week-02-responsive-web-design/)
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

## How to Run & View Locally

### Option 1: Direct File Launch in Browser
Open either project's entrypoint directly in any modern web browser (Google Chrome, Microsoft Edge, Firefox, or Safari):
- **Week 1:** Open `task-01-static-webpage/index.html`
- **Week 2:** Open `week-02-responsive-web-design/index.html`

### Option 2: Local HTTP Server (Python)
From the repository root, start a lightweight web server:

```bash
# To run Week 1:
cd task-01-static-webpage
python -m http.server 3000

# To run Week 2:
cd week-02-responsive-web-design
python -m http.server 3000
```

Open `http://localhost:3000` in your web browser.

---

## Documentation & Deliverables

### Week 1 Deliverables (`task-01-static-webpage/`)
- [**Wireframe Design**](task-01-static-webpage/wireframe.svg): Low-fidelity vector blueprint for desktop and mobile viewports.
- [**Assignment Report (Markdown)**](task-01-static-webpage/report.md): Technical report detailing design decisions, semantic markup, CSS architecture, and test matrices.
- [**Assignment Report (PDF)**](task-01-static-webpage/report.pdf): Publication-grade PDF report.
- [**Assignment Report (Word Document)**](task-01-static-webpage/report.docx): Formatted Microsoft Word report.

### Week 2 Deliverables (`week-02-responsive-web-design/`)
- [**Webpage Entrypoint**](week-02-responsive-web-design/index.html): Semantic HTML5 responsive agency webpage.
- [**Stylesheet**](week-02-responsive-web-design/style.css): Modular CSS3 design system with 50 custom property tokens and 4 media queries.
- [**Client Script**](week-02-responsive-web-design/script.js): Accessible mobile navigation and client-side form validation.
- [**Technical Implementation Report (Markdown)**](week-02-responsive-web-design/report.md): 470+ line comprehensive engineering report with code snippets, breakpoint tables, and test matrices.
- [**Technical Report (PDF)**](week-02-responsive-web-design/report.pdf): Formatted publication-ready PDF document.
- [**Technical Report (Word Document)**](week-02-responsive-web-design/report.docx): Formatted Microsoft Word document with embedded cross-device screenshots.
- [**Automated Test Summary**](week-02-responsive-web-design/test_summary.json): Machine-readable verification log from Playwright automated runs.

---

## License

This repository is maintained for educational and digital portfolio demonstration purposes.
