# Week 3: JavaScript Interactive User Experience — ApexHub Innovation Space

**Candidate:** Shweeta ([@shweeta1015](https://github.com/shweeta1015))  
**Assignment:** YUVAA Internship Program — Digital Design & Frontend Engineering Track  
**Project Folder:** `task-03`  
**Target Evaluation:** 100 / 100  

---

## 🚀 Overview

**ApexHub Innovation Space** is a dynamic web platform engineered for a premier technology coworking and hardware prototyping campus. Building upon the semantic HTML5 architecture from Week 1 and responsive multi-viewport CSS3 layout from Week 2, Week 3 delivers an accessible, zero-framework Vanilla JavaScript interactive experience.

The application incorporates eight cohesive interactive systems that elevate user engagement, eliminate page reloads, and provide stateful client-side workflows.

---

## ✨ Interactive Features Implemented

1. **Appearance Theme Switcher (Light / Dark Mode):**
   - Toggle button with animated sun/moon icon transition.
   - User preference persisted in browser `localStorage`.
   - Dynamic update of CSS custom properties with WCAG AA compliant contrast ratios.

2. **Mobile Navigation Drawer & Scrollspy:**
   - Off-canvas slide-in navigation drawer for mobile viewports (<768px).
   - WAI-ARIA expanded state toggles, focus trapping, and backdrop dismissal.
   - Active scrollspy dynamically highlights current section links during scroll.

3. **Workspace Filter Tabs:**
   - Instant categorization across *All Spaces*, *Hot Desks*, *Dedicated Desks*, and *Private Studios*.
   - Filtered via HTML5 `data-category` attributes with smooth CSS opacity transitions and zero layout shift.

4. **Live Multi-Tier Pricing Calculator:**
   - Interactive tier selection (*Hot Desk*, *Dedicated Desk*, *Private Studio*, *FabLab Pass*).
   - Smooth range slider for team headcount scaling (1 to 30 members) with real-time value display.
   - Monthly vs Annual commitment toggle unlocking an automatic 20% savings discount.
   - Specialized infrastructure add-ons (Biometric keycards, Static fiber IP, IoT lab access).
   - Animated financial number transitions powered by `requestAnimationFrame`.

5. **WAI-ARIA Compliant FAQ Accordion:**
   - Multi-panel expandable FAQ section following W3C WAI-ARIA authoring guidelines.
   - Full keyboard accessibility (`Enter`, `Space`, `ArrowUp`, `ArrowDown`).
   - Coordinated single-panel expansion with smooth height transitions.

6. **Client-Side Form Validation & Dynamic Confirmation Generator:**
   - Real-time client-side input validation with regex patterns for email, telephone, date, and name.
   - Inline accessible error messages and red focus indicators for malformed inputs.
   - Live character counter for custom tour notes.
   - Dynamic confirmation card generation displaying an allocated booking ticket reference ID (`APX-XXXX`).

7. **Scroll-Triggered Back-to-Top Button:**
   - Floating action button appearing smoothly when scrolling past 400px.
   - Accessible smooth scroll-to-top trigger.

8. **IntersectionObserver Scroll Reveal Animations:**
   - Hardware-accelerated viewport reveals for cards and section headers.
   - Full support for `prefers-reduced-motion: reduce` media queries.

---

## 🛠️ Technologies & Architectural Highlights

- **HTML5:** Semantic landmark architecture (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), custom `data-*` attributes, full WAI-ARIA role and state semantics.
- **CSS3:** Modern CSS variables (50+ custom properties), CSS Grid (`minmax(0, 1fr)`), Flexbox, fluid typography (`clamp()`), and responsive media queries (320px, 375px, 768px, 1440px).
- **Vanilla JavaScript (ES6+):** Pure native JavaScript without external dependencies. Event delegation, DOM manipulation, asynchronous animations, regex validation, and `localStorage` API.

---

## 📊 Automated Playwright Test Results

Automated browser testing was conducted using Playwright headless Chrome across all four target viewports:

| Viewport Device | Resolution | Scroll Width | Client Width | Overflow | Console Errors | Status |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| **Small Mobile (iPhone SE)** | 320 × 568 | 320px | 320px | **0px** | 0 | **PASS** |
| **Standard Mobile (iPhone 13)** | 375 × 812 | 375px | 375px | **0px** | 0 | **PASS** |
| **Tablet Portrait (iPad)** | 768 × 1024 | 768px | 768px | **0px** | 0 | **PASS** |
| **Desktop HD (1440p)** | 1440 × 900 | 1440px | 1440px | **0px** | 0 | **PASS** |

### Interactive Feature Matrix
- **Theme Switcher:** PASS (light → dark persistence verified)
- **Space Filter Tabs:** PASS (studio filtered, hotdesk hidden)
- **Pricing Calculator:** PASS ($1,460/mo with 20% annual discount verified)
- **FAQ Accordion:** PASS (WAI-ARIA expanded state verified)
- **Form Validation:** PASS (Visual field errors on empty submission verified)
- **Form Submission:** PASS (Confirmation ticket `APX-6262` rendered)
- **Mobile Navigation Drawer:** PASS (Expanded state on mobile verified)
- **Asset Integrity:** PASS (8/8 images loaded, 100% alt text present)

---

## 📂 Project Structure

```text
task-03/
├── index.html                    # Semantic HTML5 with interactive modules & ARIA
├── css/
│   └── style.css                 # 1,960 lines of responsive CSS & custom properties
├── js/
│   └── script.js                 # 826 lines of pure Vanilla JavaScript (ES6+)
├── assets/                       # 7 optimized vector SVGs with explicit dimensions
│   ├── hero-workspace.svg
│   ├── space-hotdesk.svg
│   ├── space-dedicated.svg
│   ├── space-studio.svg
│   ├── avatar-1.svg
│   ├── avatar-2.svg
│   └── avatar-3.svg
├── report/
│   ├── Week_3_Technical_Report.docx         # Complete 14-section Microsoft Word Report
│   └── Week_3_Submission_Description.txt    # 295-word portal submission description
├── test_previews/                           # 14 automated Playwright viewport screenshots
├── test_summary.json                        # Empirical test run summary metrics
└── README.md                                # This documentation file
```

---

## 💻 How to Run the Project Locally

1. **Direct Browser Execution:**
   - Double-click `index.html` or open it directly in any modern browser (Chrome, Edge, Firefox, Safari).

2. **Using a Local Static Server (Recommended):**
   ```bash
   # Using Python
   python -m http.server 8000
   # Open http://localhost:8000 in your browser
   ```

3. **Running the Automated Playwright Suite:**
   ```bash
   python run_week3_tests.py
   ```

---

## 📄 Submission Deliverables

- **Word Technical Report:** [`report/Week_3_Technical_Report.docx`](report/Week_3_Technical_Report.docx)
- **Submission Description:** [`report/Week_3_Submission_Description.txt`](report/Week_3_Submission_Description.txt)
- **GitHub Repository:** [https://github.com/shweeta1015/digital-design-projects/tree/main/task-03](https://github.com/shweeta1015/digital-design-projects/tree/main/task-03)
