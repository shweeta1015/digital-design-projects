/**
 * Aura Digital Studio — JavaScript
 * Week 2: Implementation of Responsive Web Design
 * Scope: Lightweight, accessible mobile navigation drawer & client-side form validation
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initContactFormValidation();
  initNewsletterValidation();
});

/**
 * 1. Accessible Mobile Navigation Drawer Toggle
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('primary-navigation');
  const navLinks = navMenu ? navMenu.querySelectorAll('.nav-link, .nav-cta') : [];

  if (!toggleBtn || !navMenu) return;

  function openMenu() {
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.classList.add('is-active');
    navMenu.classList.add('is-open');
  }

  function closeMenu() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.classList.remove('is-active');
    navMenu.classList.remove('is-open');
  }

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Auto-close drawer when any navigation link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('is-open')) {
        closeMenu();
      }
    });
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      closeMenu();
      toggleBtn.focus();
    }
  });

  // Auto-close if window is resized above tablet breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

/**
 * 2. Client-Side Contact Form Validation
 */
function initContactFormValidation() {
  const form = document.getElementById('contact-form');
  const statusBox = document.getElementById('form-status');

  if (!form) return;

  const fields = {
    name: {
      input: document.getElementById('contact-name'),
      error: document.getElementById('name-error'),
      validate: (val) => {
        if (!val.trim()) return 'Full name is required.';
        if (val.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      }
    },
    email: {
      input: document.getElementById('contact-email'),
      error: document.getElementById('email-error'),
      validate: (val) => {
        if (!val.trim()) return 'Work email address is required.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (!emailRegex.test(val.trim())) return 'Please provide a valid work email address (e.g. name@company.com).';
        return '';
      }
    },
    service: {
      input: document.getElementById('contact-service'),
      error: document.getElementById('service-error'),
      validate: (val) => {
        if (!val) return 'Please select a desired capability.';
        return '';
      }
    },
    budget: {
      input: document.getElementById('contact-budget'),
      error: document.getElementById('budget-error'),
      validate: (val) => {
        if (!val) return 'Please select your target budget range.';
        return '';
      }
    },
    message: {
      input: document.getElementById('contact-message'),
      error: document.getElementById('message-error'),
      validate: (val) => {
        if (!val.trim()) return 'Project details are required.';
        if (val.trim().length < 10) return 'Please provide at least 10 characters describing your project vision.';
        return '';
      }
    }
  };

  // Attach live validation on blur and input
  Object.keys(fields).forEach((key) => {
    const field = fields[key];
    if (!field.input) return;

    field.input.addEventListener('blur', () => {
      validateSingleField(field);
    });

    field.input.addEventListener('input', () => {
      if (field.input.classList.contains('is-invalid')) {
        validateSingleField(field);
      }
    });

    if (field.input.tagName === 'SELECT') {
      field.input.addEventListener('change', () => {
        validateSingleField(field);
      });
    }
  });

  function validateSingleField(field) {
    const errMessage = field.validate(field.input.value);
    if (errMessage) {
      field.input.classList.add('is-invalid');
      if (field.error) {
        field.error.textContent = errMessage;
        field.error.classList.add('is-visible');
      }
      return false;
    } else {
      field.input.classList.remove('is-invalid');
      if (field.error) {
        field.error.textContent = '';
        field.error.classList.remove('is-visible');
      }
      return true;
    }
  }

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let allValid = true;
    let firstInvalidInput = null;

    Object.keys(fields).forEach((key) => {
      const field = fields[key];
      const valid = validateSingleField(field);
      if (!valid) {
        allValid = false;
        if (!firstInvalidInput) {
          firstInvalidInput = field.input;
        }
      }
    });

    if (!allValid) {
      if (statusBox) {
        statusBox.className = 'form-status is-error';
        statusBox.textContent = 'Please correct the highlighted errors before submitting your brief.';
      }
      if (firstInvalidInput) {
        firstInvalidInput.focus();
      }
      return;
    }

    // Success State Simulation
    const clientName = fields.name.input.value.trim();
    if (statusBox) {
      statusBox.className = 'form-status is-success';
      statusBox.textContent = `Thank you, ${clientName}! Your project brief has been received. Our leadership team will review and reply within 24 hours.`;
    }

    form.reset();
    Object.keys(fields).forEach((key) => {
      fields[key].input.classList.remove('is-invalid');
      if (fields[key].error) fields[key].error.classList.remove('is-visible');
    });
  });
}

/**
 * 3. Newsletter Subscription Validation
 */
function initNewsletterValidation() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('newsletter-email');
    if (!input) return;

    const email = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(email)) {
      alert('Please enter a valid work email address.');
      input.focus();
      return;
    }

    alert('Thank you for subscribing to the Aura Studio monthly dispatch!');
    input.value = '';
  });
}
