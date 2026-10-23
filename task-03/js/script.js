/**
 * ApexHub Innovation Space — Week 3 Interactive User Experience Script
 * Author: Frontend Developer Intern | YUVA Intern Program
 * Features:
 *   1. Visual Appearance Theme Switcher (Light/Dark with localStorage)
 *   2. Accessible Mobile Drawer Navigation & Scrollspy
 *   3. Smooth Scroll Interception with Fixed Header Offset
 *   4. Interactive Spaces Filter Tabs
 *   5. Dynamic Team Pricing Calculator Widget
 *   6. Accessible WAI-ARIA FAQ Accordions
 *   7. Client-Side Form Validation with Live Feedback & Character Counter
 *   8. Floating Back-to-Top Navigation
 *   9. Toast Notifications & Clipboard Integration
 *  10. IntersectionObserver Scroll Reveal Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. VISUAL THEME SWITCHER (LIGHT / DARK)
  // =========================================================================
  const themeToggle = document.getElementById('themeToggle');
  const themeStatusText = document.getElementById('themeStatusText');
  const STORAGE_KEY = 'apexhub-theme-preference';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    if (themeStatusText) {
      themeStatusText.textContent = `Current theme: ${theme}`;
    }
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
      themeToggle.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    }
  }

  // Detect saved preference or system preference
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      showToast(`Switched to ${nextTheme.toUpperCase()} theme`);
    });
  }

  // =========================================================================
  // 2. MOBILE DRAWER NAVIGATION & SCROLLSPY
  // =========================================================================
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');
  const navOverlay = document.getElementById('navOverlay');
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('backToTop');

  function openMobileMenu() {
    if (!navToggle || !primaryNav) return;
    navToggle.setAttribute('aria-expanded', 'true');
    primaryNav.classList.add('open');
    if (navOverlay) navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!navToggle || !primaryNav) return;
    navToggle.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('open');
    if (navOverlay) navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && primaryNav && primaryNav.classList.contains('open')) {
      closeMobileMenu();
      if (navToggle) navToggle.focus();
    }
  });

  // Close when navigation anchor is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Scrollspy & Sticky Header Elevation
  const sections = Array.from(document.querySelectorAll('section[id]'));
  
  function handleScroll() {
    const scrollPos = window.scrollY;

    // Header elevation
    if (header) {
      if (scrollPos > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Scrollspy active highlight
    const headerHeight = header ? header.offsetHeight : 74;
    const currentPos = scrollPos + headerHeight + 50;

    let currentSectionId = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (currentPos >= top && currentPos < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
        } else if (!link.classList.contains('nav-cta')) {
          link.classList.remove('active');
        }
      });
    }

    // Floating Back-to-Top Button Visibility
    if (backToTopBtn) {
      if (scrollPos > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // =========================================================================
  // 3. SMOOTH SCROLLING WITH FIXED HEADER OFFSET
  // =========================================================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#top') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = header ? header.offsetHeight + 10 : 80;
        const elemPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elemPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // =========================================================================
  // 4. INTERACTIVE SPACES FILTER TABS
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const spaceCards = document.querySelectorAll('.space-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update button active state
      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      // Filter cards
      spaceCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('is-hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  // "Select in Calculator" buttons inside space cards
  const selectSpaceBtns = document.querySelectorAll('.select-space-btn');
  selectSpaceBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const spaceName = btn.getAttribute('data-space-name');
      const planPill = document.querySelector(`.plan-pill[data-plan="${btn.closest('.space-card').getAttribute('data-category')}"]`);
      
      if (planPill) {
        planPill.click();
      }

      // Smooth scroll to calculator
      const calcSection = document.getElementById('calculator');
      if (calcSection) {
        const headerOffset = header ? header.offsetHeight + 10 : 80;
        const offsetPosition = calcSection.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }

      showToast(`Selected "${spaceName}" in pricing calculator`);
    });
  });

  // =========================================================================
  // 5. INTERACTIVE PRICING CALCULATOR WIDGET
  // =========================================================================
  const planPills = document.querySelectorAll('.plan-pill');
  const teamSizeSlider = document.getElementById('teamSizeSlider');
  const teamSizeValue = document.getElementById('teamSizeValue');
  const billingBtns = document.querySelectorAll('.billing-btn');
  const addonBiometric = document.getElementById('addonBiometric');
  const addonFiber = document.getElementById('addonFiber');
  const addonHardware = document.getElementById('addonHardware');

  // Summary output elements
  const summaryTierName = document.getElementById('summaryTierName');
  const summaryTeamCount = document.getElementById('summaryTeamCount');
  const summaryAddonsPrice = document.getElementById('summaryAddonsPrice');
  const discountRow = document.getElementById('discountRow');
  const summaryDiscountAmount = document.getElementById('summaryDiscountAmount');
  const summaryTotalAmount = document.getElementById('summaryTotalAmount');
  const summaryBilledInfo = document.getElementById('summaryBilledInfo');
  const applyToBookingBtn = document.getElementById('applyToBookingBtn');

  const calculatorState = {
    planKey: 'hotdesk',
    planName: 'Hot Desk',
    basePrice: 199,
    teamSize: 1,
    isAnnual: false,
    addonsTotal: 0
  };

  function updateCalculator() {
    // Plan base calculation
    const teamMultiplier = calculatorState.teamSize;
    const baseTotal = calculatorState.basePrice * teamMultiplier;

    // Addons calculation
    let addonsFee = 0;
    if (addonBiometric && addonBiometric.checked) addonsFee += parseInt(addonBiometric.getAttribute('data-addon-price') || '35', 10);
    if (addonFiber && addonFiber.checked) addonsFee += parseInt(addonFiber.getAttribute('data-addon-price') || '50', 10);
    if (addonHardware && addonHardware.checked) addonsFee += parseInt(addonHardware.getAttribute('data-addon-price') || '80', 10);
    calculatorState.addonsTotal = addonsFee;

    const subtotal = baseTotal + addonsFee;
    let discount = 0;
    let effectiveMonthly = subtotal;

    if (calculatorState.isAnnual) {
      discount = Math.round(subtotal * 0.20);
      effectiveMonthly = subtotal - discount;
    }

    // Update DOM
    if (summaryTierName) summaryTierName.textContent = `${calculatorState.planName} ($${calculatorState.basePrice}/mo)`;
    if (summaryTeamCount) summaryTeamCount.textContent = `${calculatorState.teamSize} × Member${calculatorState.teamSize > 1 ? 's' : ''}`;
    if (summaryAddonsPrice) summaryAddonsPrice.textContent = `$${addonsFee} / mo`;

    if (calculatorState.isAnnual) {
      if (discountRow) discountRow.style.display = 'flex';
      if (summaryDiscountAmount) summaryDiscountAmount.textContent = `-$${discount} / mo`;
      if (summaryBilledInfo) summaryBilledInfo.textContent = `Billed annually as $${(effectiveMonthly * 12).toLocaleString()} / year (Save 20%)`;
    } else {
      if (discountRow) discountRow.style.display = 'none';
      if (summaryBilledInfo) summaryBilledInfo.textContent = 'Billed monthly with no long-term lock-in';
    }

    if (summaryTotalAmount) {
      // Smooth animated number update
      animateNumber(summaryTotalAmount, effectiveMonthly);
    }
  }

  function animateNumber(element, targetNum) {
    const currentNum = parseInt(element.textContent.replace(/,/g, ''), 10) || targetNum;
    if (currentNum === targetNum) {
      element.textContent = targetNum.toLocaleString();
      return;
    }
    const diff = targetNum - currentNum;
    const steps = 12;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextVal = Math.round(currentNum + (diff * (currentStep / steps)));
      element.textContent = nextVal.toLocaleString();
      if (currentStep >= steps) {
        clearInterval(timer);
        element.textContent = targetNum.toLocaleString();
      }
    }, 16);
  }

  // Plan pill clicks
  planPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      planPills.forEach((p) => {
        p.classList.remove('active');
        p.setAttribute('aria-checked', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-checked', 'true');

      calculatorState.planKey = pill.getAttribute('data-plan');
      calculatorState.planName = pill.querySelector('.pill-name').textContent;
      calculatorState.basePrice = parseInt(pill.getAttribute('data-price'), 10);
      updateCalculator();
    });
  });

  // Team size slider
  if (teamSizeSlider) {
    teamSizeSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      calculatorState.teamSize = val;
      if (teamSizeValue) {
        teamSizeValue.textContent = `${val} Member${val > 1 ? 's' : ''}`;
      }
      teamSizeSlider.setAttribute('aria-valuenow', val);
      updateCalculator();
    });
  }

  // Billing duration toggle
  billingBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      billingBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');

      calculatorState.isAnnual = btn.getAttribute('data-cycle') === 'annual';
      updateCalculator();
    });
  });

  // Addon checkboxes
  [addonBiometric, addonFiber, addonHardware].forEach((chk) => {
    if (chk) {
      chk.addEventListener('change', updateCalculator);
    }
  });

  // Initial calculation
  updateCalculator();

  // Apply Configuration to Tour Booking Form
  if (applyToBookingBtn) {
    applyToBookingBtn.addEventListener('click', () => {
      const spaceTypeSelect = document.getElementById('spaceType');
      const specialRequests = document.getElementById('specialRequests');

      if (spaceTypeSelect) {
        // Map planKey to dropdown option
        for (let i = 0; i < spaceTypeSelect.options.length; i++) {
          if (spaceTypeSelect.options[i].text.includes(calculatorState.planName)) {
            spaceTypeSelect.selectedIndex = i;
            break;
          }
        }
      }

      if (specialRequests) {
        const planDetail = `Configured: ${calculatorState.planName} for ${calculatorState.teamSize} member(s). Billing: ${calculatorState.isAnnual ? 'Annual (20% Off)' : 'Monthly'}.`;
        specialRequests.value = planDetail;
        const charCounter = document.getElementById('charCounter');
        if (charCounter) charCounter.textContent = `${planDetail.length} / 250`;
      }

      // Scroll to tour booking form
      const bookingSec = document.getElementById('tour-booking');
      if (bookingSec) {
        const headerOffset = header ? header.offsetHeight + 10 : 80;
        const offsetPosition = bookingSec.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }

      showToast('Calculator configuration applied to Tour Booking!');
    });
  }

  // =========================================================================
  // 6. ACCESSIBLE WAI-ARIA FAQ ACCORDION
  // =========================================================================
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');
    const content = item.querySelector('.accordion-content');

    if (trigger && content) {
      trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        // Optional accordion policy: close other open panels
        accordionItems.forEach((other) => {
          if (other !== item && other.classList.contains('open')) {
            const otherTrigger = other.querySelector('.accordion-trigger');
            const otherContent = other.querySelector('.accordion-content');
            if (otherTrigger && otherContent) {
              otherTrigger.setAttribute('aria-expanded', 'false');
              other.classList.remove('open');
              otherContent.hidden = true;
              otherContent.style.maxHeight = null;
            }
          }
        });

        if (isExpanded) {
          trigger.setAttribute('aria-expanded', 'false');
          item.classList.remove('open');
          content.style.maxHeight = null;
          content.hidden = true;
        } else {
          trigger.setAttribute('aria-expanded', 'true');
          item.classList.add('open');
          content.hidden = false;
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });

      // Keyboard arrow navigation between FAQ triggers
      trigger.addEventListener('keydown', (e) => {
        const triggers = Array.from(document.querySelectorAll('.accordion-trigger'));
        const index = triggers.indexOf(trigger);

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const next = triggers[(index + 1) % triggers.length];
          next.focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prev = triggers[(index - 1 + triggers.length) % triggers.length];
          prev.focus();
        } else if (e.key === 'Home') {
          e.preventDefault();
          triggers[0].focus();
        } else if (e.key === 'End') {
          e.preventDefault();
          triggers[triggers.length - 1].focus();
        }
      });
    }
  });

  // =========================================================================
  // 7. CLIENT-SIDE FORM VALIDATION & INTERACTIVE TOUR BOOKING
  // =========================================================================
  const tourForm = document.getElementById('tourForm');
  const formStatus = document.getElementById('formStatus');
  const bookingSuccessCard = document.getElementById('bookingSuccessCard');
  const bookAnotherBtn = document.getElementById('bookAnotherBtn');
  const submitTourBtn = document.getElementById('submitTourBtn');
  const tourDateInput = document.getElementById('tourDate');
  const specialRequests = document.getElementById('specialRequests');
  const charCounter = document.getElementById('charCounter');

  // Set minimum date to tomorrow
  if (tourDateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    tourDateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  // Character counter
  if (specialRequests && charCounter) {
    specialRequests.addEventListener('input', () => {
      const len = specialRequests.value.length;
      charCounter.textContent = `${len} / 250`;
      if (len >= 230) {
        charCounter.style.color = 'var(--color-accent-amber)';
      } else {
        charCounter.style.color = 'var(--color-text-muted)';
      }
    });
  }

  // Field validators
  function validateField(groupId, inputId, errorId, validatorFn, errorMsg) {
    const group = document.getElementById(groupId);
    const input = document.getElementById(inputId);
    const errorElem = document.getElementById(errorId);
    if (!input || !group) return true;

    const isValid = validatorFn(input.value.trim(), input);
    if (!isValid) {
      group.classList.add('has-error');
      group.classList.remove('has-success');
      if (errorElem) errorElem.textContent = errorMsg;
      input.setAttribute('aria-invalid', 'true');
      return false;
    } else {
      group.classList.remove('has-error');
      group.classList.add('has-success');
      if (errorElem) errorElem.textContent = '';
      input.removeAttribute('aria-invalid');
      return true;
    }
  }

  const validators = {
    name: (val) => val.length >= 3 && /^[a-zA-Z\s.'-]+$/.test(val),
    email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val),
    phone: (val) => /^[\d\s()+-]{9,20}$/.test(val),
    location: (val) => val !== '',
    spaceType: (val) => val !== '',
    date: (val) => val !== '',
    consent: (val, input) => input.checked
  };

  // Attach live blur & input validation listeners
  const fieldRules = [
    { group: 'groupName', input: 'fullName', error: 'errorName', fn: validators.name, msg: 'Please provide your full name (minimum 3 letters).' },
    { group: 'groupEmail', input: 'workEmail', error: 'errorEmail', fn: validators.email, msg: 'Enter a valid professional work email address.' },
    { group: 'groupPhone', input: 'phoneNumber', error: 'errorPhone', fn: validators.phone, msg: 'Enter a valid direct telephone number.' },
    { group: 'groupLocation', input: 'hubLocation', error: 'errorLocation', fn: validators.location, msg: 'Please select a preferred innovation campus.' },
    { group: 'groupSpaceType', input: 'spaceType', error: 'errorSpaceType', fn: validators.spaceType, msg: 'Please select an environment tier.' },
    { group: 'groupTourDate', input: 'tourDate', error: 'errorDate', fn: validators.date, msg: 'Please pick an upcoming tour date.' },
    { group: 'groupConsent', input: 'consentCheckbox', error: 'errorConsent', fn: validators.consent, msg: 'Consent is required to finalize tour booking.' }
  ];

  fieldRules.forEach((rule) => {
    const inputElem = document.getElementById(rule.input);
    if (inputElem) {
      const eventName = inputElem.type === 'checkbox' || inputElem.tagName === 'SELECT' ? 'change' : 'blur';
      inputElem.addEventListener(eventName, () => {
        validateField(rule.group, rule.input, rule.error, rule.fn, rule.msg);
      });
      // Clear error on active typing
      if (inputElem.tagName === 'INPUT' && inputElem.type !== 'checkbox') {
        inputElem.addEventListener('input', () => {
          const group = document.getElementById(rule.group);
          if (group && group.classList.contains('has-error')) {
            validateField(rule.group, rule.input, rule.error, rule.fn, rule.msg);
          }
        });
      }
    }
  });

  if (tourForm) {
    tourForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let formIsValid = true;
      let firstInvalidField = null;

      fieldRules.forEach((rule) => {
        const isFieldValid = validateField(rule.group, rule.input, rule.error, rule.fn, rule.msg);
        if (!isFieldValid) {
          formIsValid = false;
          if (!firstInvalidField) {
            firstInvalidField = document.getElementById(rule.input);
          }
        }
      });

      if (!formIsValid) {
        if (formStatus) {
          formStatus.className = 'form-status status-error';
          formStatus.textContent = 'Please review the highlighted fields above before confirming.';
        }
        if (firstInvalidField) {
          firstInvalidField.focus();
        }
        showToast('Form submission paused: please resolve highlighted fields.');
        return;
      }

      // Valid form -> Simulate Server Submission
      if (formStatus) {
        formStatus.className = 'form-status';
        formStatus.style.display = 'none';
      }

      // Show loading spinner
      if (submitTourBtn) {
        submitTourBtn.disabled = true;
        const btnText = submitTourBtn.querySelector('.btn-text');
        const btnSpinner = submitTourBtn.querySelector('.btn-spinner');
        if (btnText) btnText.textContent = 'Reserving Your Experience...';
        if (btnSpinner) btnSpinner.style.display = 'inline-block';
      }

      setTimeout(() => {
        // Collect form data
        const attendeeName = document.getElementById('fullName').value.trim();
        const campusElem = document.getElementById('hubLocation');
        const campusName = campusElem.options[campusElem.selectedIndex].text.split('—')[0].trim();
        const spaceName = document.getElementById('spaceType').value;
        const tourDate = document.getElementById('tourDate').value;

        // Populate Success Card
        const resRefNumber = document.getElementById('resRefNumber');
        const resAttendeeName = document.getElementById('resAttendeeName');
        const resCampusLocation = document.getElementById('resCampusLocation');
        const resSpaceInterest = document.getElementById('resSpaceInterest');
        const resTourDate = document.getElementById('resTourDate');

        const randomRef = 'APX-' + Math.floor(1000 + Math.random() * 9000);
        if (resRefNumber) resRefNumber.textContent = randomRef;
        if (resAttendeeName) resAttendeeName.textContent = attendeeName;
        if (resCampusLocation) resCampusLocation.textContent = campusName;
        if (resSpaceInterest) resSpaceInterest.textContent = spaceName;
        if (resTourDate) resTourDate.textContent = tourDate;

        // Transition UI
        tourForm.style.display = 'none';
        if (bookingSuccessCard) {
          bookingSuccessCard.style.display = 'block';
        }

        // Reset submit button state
        if (submitTourBtn) {
          submitTourBtn.disabled = false;
          const btnText = submitTourBtn.querySelector('.btn-text');
          const btnSpinner = submitTourBtn.querySelector('.btn-spinner');
          if (btnText) btnText.textContent = 'Confirm Tour Reservation';
          if (btnSpinner) btnSpinner.style.display = 'none';
        }

        showToast(`Tour confirmed! Reference: ${randomRef}`);
      }, 850);
    });
  }

  // Book another tour button
  if (bookAnotherBtn) {
    bookAnotherBtn.addEventListener('click', () => {
      if (tourForm) {
        tourForm.reset();
        tourForm.style.display = 'flex';
        // Clear success classes
        fieldRules.forEach((rule) => {
          const group = document.getElementById(rule.group);
          if (group) {
            group.classList.remove('has-error', 'has-success');
          }
        });
      }
      if (charCounter) charCounter.textContent = '0 / 250';
      if (bookingSuccessCard) bookingSuccessCard.style.display = 'none';
      if (formStatus) formStatus.style.display = 'none';
      const nameInput = document.getElementById('fullName');
      if (nameInput) nameInput.focus();
    });
  }

  // =========================================================================
  // 8. FLOATING BACK TO TOP BUTTON
  // =========================================================================
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      if (navToggle) navToggle.focus();
    });
  }

  // =========================================================================
  // 9. TOAST NOTIFICATIONS SYSTEM & CLIPBOARD
  // =========================================================================
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    toastContainer.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 3000);
  }

  // Copy Hub Address Button
  const copyAddressBtn = document.getElementById('copyAddressBtn');
  if (copyAddressBtn) {
    copyAddressBtn.addEventListener('click', () => {
      const address = '500 Howard Street, Suite 400, San Francisco, CA 94105';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(address).then(() => {
          showToast('ApexHub address copied to clipboard!');
        }).catch(() => {
          fallbackCopyText(address);
        });
      } else {
        fallbackCopyText(address);
      }
    });
  }

  function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('ApexHub address copied to clipboard!');
    } catch (err) {
      showToast('Address: 500 Howard St, Suite 400, SF');
    }
    document.body.removeChild(textArea);
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterStatus = document.getElementById('newsletterStatus');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      if (!validators.email(email)) {
        if (newsletterStatus) {
          newsletterStatus.style.color = 'var(--color-accent-rose)';
          newsletterStatus.textContent = 'Please provide a valid email.';
        }
        return;
      }
      if (newsletterStatus) {
        newsletterStatus.style.color = 'var(--color-accent-emerald)';
        newsletterStatus.textContent = '✓ Subscribed to Founder Dispatch!';
      }
      newsletterEmail.value = '';
      showToast('Thank you for subscribing to Founder Dispatch!');
    });
  }

  // =========================================================================
  // 10. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // =========================================================================
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: reveal immediately if observer not supported or reduced motion
    revealElements.forEach((el) => {
      el.classList.add('is-revealed');
    });
  }

});
