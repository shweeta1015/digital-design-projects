# Digital Design & Web Development Projects

A curated collection of digital design and frontend web development projects, showcasing UI/UX wireframing, semantic HTML5, modern CSS3 styling, and responsive layout architectures.

---

## Repository Structure

```
digital-design-projects/
├── README.md
├── .gitignore
└── task-01-static-webpage/            # Week 1: Responsive Static Webpage Assignment
    ├── index.html                     # Semantic HTML5 webpage
    ├── style.css                      # Modern CSS3 stylesheet (Variables, Flexbox, Grid)
    ├── wireframe.svg                  # Dual-viewport low-fidelity vector wireframe
    ├── report.md                      # Comprehensive assignment report (Markdown)
    ├── report.pdf                     # Compiled assignment report (PDF)
    ├── report.docx                    # Formatted submission report (Word Document)
    ├── assets/                        # Local SVG graphics, illustrations & avatars
    │   ├── hero-workspace.svg
    │   ├── space-hotdesk.svg
    │   ├── space-dedicated.svg
    │   ├── space-studio.svg
    │   ├── avatar-1.svg
    │   ├── avatar-2.svg
    │   └── avatar-3.svg
    └── test_previews/                 # Cross-viewport browser screenshots
        ├── desktop_1440x900.png
        ├── laptop_1024x768.png
        ├── tablet_768x1024.png
        ├── mobile_375x812.png
        ├── fullpage_1440w.png
        ├── fullpage_375w.png
        └── test_summary.json
```

---

## Projects Directory

### Task 01: Responsive Static Webpage — ApexHub Innovation Space
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

## How to Run & View Locally

### Option 1: Direct File Launch
Open `task-01-static-webpage/index.html` in any modern web browser (Google Chrome, Microsoft Edge, Firefox, or Safari).

### Option 2: Local HTTP Server (Python)
From the repository root, start a lightweight web server:

```bash
# Navigate to the project directory
cd task-01-static-webpage

# Start a local HTTP server on port 3000
python -m http.server 3000
```

Open `http://localhost:3000` in your web browser.

---

## Documentation & Deliverables

Detailed engineering documentation and design rationale can be accessed in the `task-01-static-webpage` folder:
- [**Wireframe Design**](task-01-static-webpage/wireframe.svg): Low-fidelity vector blueprint for desktop and mobile viewports.
- [**Assignment Report (Markdown)**](task-01-static-webpage/report.md): Full documentation of design decisions, semantic markup, CSS techniques, and test logs.
- [**Assignment Report (PDF)**](task-01-static-webpage/report.pdf): Formatted PDF document.
- [**Assignment Report (Word Document)**](task-01-static-webpage/report.docx): Formatted Microsoft Word report.

---

## License

This repository is maintained for educational and digital portfolio demonstration purposes.
