/* ===================== script.js =====================
   VINAYAK OVERSEAS SERVICES
   Interactive Features & Animations
   ===================================================== */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* =====================================================
     1. NAVBAR — Sticky + Scroll Effect
     ===================================================== */
  const navbar = document.getElementById('navbar');
  const topBar = document.getElementById('top-bar');

  function handleScroll() {
    const scrollY = window.scrollY;

    // Navbar glass effect on scroll
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back-to-top visibility
    backToTopBtn.classList.toggle('visible', scrollY > 400);

    // Active nav link based on section in view
    updateActiveNavLink();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* =====================================================
     2. HAMBURGER MENU
     ===================================================== */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen.toString());
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu on link click
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  /* =====================================================
     3. ACTIVE NAV LINK — Intersection Observer
     ===================================================== */
  const sections   = document.querySelectorAll('section[id]');
  const navLinks   = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop    = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  /* =====================================================
     4. HERO CAROUSEL / SLIDER
     ===================================================== */
  const slides    = document.querySelectorAll('.hero-slide');
  const dots      = document.querySelectorAll('.dot');
  let currentSlide = 0;
  let slideInterval;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    // Re-trigger hero content animations
    const activeContent = slides[currentSlide].querySelector('.hero-content');
    if (activeContent) {
      activeContent.querySelectorAll('.hero-tagline, .hero-heading, .hero-sub, .btn-hero').forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight; // reflow
        el.style.animation = '';
      });
    }
  }

  function startAutoSlide() {
    stopAutoSlide();
    slideInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5500);
  }

  function stopAutoSlide() {
    if (slideInterval) clearInterval(slideInterval);
  }

  // Dot click handlers
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      goToSlide(idx);
      startAutoSlide(); // reset timer on manual nav
    });
  });

  // Touch swipe support for mobile
  let touchStartX = 0;
  const heroSection = document.querySelector('.hero');

  if (heroSection) {
    heroSection.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSection.addEventListener('touchend', e => {
      const delta = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(delta) > 50) {
        goToSlide(currentSlide + (delta > 0 ? 1 : -1));
        startAutoSlide();
      }
    }, { passive: true });
  }

  // Pause on hover
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoSlide);
    heroSection.addEventListener('mouseleave', startAutoSlide);
  }

  startAutoSlide();

  /* =====================================================
     5. SCROLL ANIMATIONS (AOS-like, custom)
     ===================================================== */
  const aosElements = document.querySelectorAll('[data-aos]');

  const aosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('aos-animate');
        }, parseInt(delay));
        aosObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  aosElements.forEach(el => aosObserver.observe(el));

  /* =====================================================
     6. SERVICE CARDS — Staggered Animation
     ===================================================== */
  const svcCards = document.querySelectorAll('.service-card');

  const svcObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll('.service-card');
        cards.forEach((card, i) => {
          setTimeout(() => {
            card.style.opacity    = '1';
            card.style.transform  = 'translateY(0)';
          }, i * 110);
        });
        svcObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const svcGrid = document.querySelector('.services-grid');
  if (svcGrid) {
    svcCards.forEach(card => {
      card.style.opacity   = '0';
      card.style.transform = 'translateY(32px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.35s ease, border-color 0.35s ease';
    });
    svcObserver.observe(svcGrid);
  }

  /* =====================================================
     7. NUMBER COUNTER ANIMATION (Stats)
     ===================================================== */
  function animateCounter(el, target, suffix) {
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      el.textContent = start + suffix;
    }, 16);
  }

  const statsSection = document.querySelector('.about-stats');
  let statsAnimated = false;

  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !statsAnimated) {
        statsAnimated = true;
        const statNums = statsSection.querySelectorAll('.stat-num');
        const targets  = [500, 10, 50];
        const suffixes = ['+', '+', '+'];
        statNums.forEach((el, i) => {
          const sup = el.querySelector('sup');
          if (sup) sup.remove();
          animateCounter(el, targets[i], '');
          if (i < targets.length) {
            setTimeout(() => {
              const supEl = document.createElement('sup');
              supEl.textContent = suffixes[i];
              el.appendChild(supEl);
            }, 1850);
          }
        });
        statsObserver.unobserve(statsSection);
      }
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
  }

  /* =====================================================
     8. CONTACT FORM — Validation & Submit
     ===================================================== */
  const contactForm = document.getElementById('contact-form');
  const toast       = document.getElementById('toast');

  function showToast(message, type = 'success') {
    if (!toast) return;
    toast.querySelector('span').textContent = message;
    toast.className = `toast show ${type}`;
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setFieldError(fieldId, show) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    if (show) {
      field.style.borderColor = 'var(--danger)';
      field.style.boxShadow   = '0 0 0 3px rgba(229,62,62,.12)';
    } else {
      field.style.borderColor = '';
      field.style.boxShadow   = '';
    }
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name    = document.getElementById('contact-name').value.trim();
      const email   = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      let valid = true;

      if (!name) {
        setFieldError('contact-name', true);
        valid = false;
      } else { setFieldError('contact-name', false); }

      if (!email || !validateEmail(email)) {
        setFieldError('contact-email', true);
        valid = false;
      } else { setFieldError('contact-email', false); }

      if (!message) {
        setFieldError('contact-message', true);
        valid = false;
      } else { setFieldError('contact-message', false); }

      if (!valid) {
        showToast('Please fill in all required fields correctly.', 'error');
        return;
      }

      // Simulate send
      const btn = contactForm.querySelector('.btn-send');
      const originalContent = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = originalContent;
        btn.disabled  = false;
        contactForm.reset();
        showToast('Message sent successfully! We\'ll get back to you soon.');
      }, 1800);
    });

    // Clear error on input
    ['contact-name', 'contact-email', 'contact-message'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => setFieldError(id, false));
      }
    });
  }

  /* =====================================================
     9. BACK TO TOP
     ===================================================== */
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* =====================================================
     10. SMOOTH SCROLL for anchor links
     ===================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset    = navbar ? navbar.offsetHeight : 0;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    });
  });

  /* =====================================================
     11. EXPERT CARDS — Reveal on Scroll
     ===================================================== */
  const expertCards = document.querySelectorAll('.expert-card');

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
        }, idx * 120);
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  expertCards.forEach(card => {
    card.style.opacity   = '0';
    card.style.transform = 'translateY(28px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.35s ease';
    cardObserver.observe(card);
  });

  /* =====================================================
     12. INIT
     ===================================================== */
  handleScroll(); // Run once on page load
  updateActiveNavLink();
});
