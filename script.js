/* ===================== script.js =====================
   VINAYAK OVERSEAS SERVICES
   Interactive Features & Animations
   ===================================================== */

'use strict';
document.addEventListener('DOMContentLoaded', () => {

  /* =====================================================
     1. NAVBAR — Sticky + Scroll Effect
     ===================================================== */
  const navbar       = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('back-to-top');

  function handleScroll() {
    const scrollY = window.scrollY;

    // Navbar shadow on scroll
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back-to-top visibility
    if (backToTopBtn) {
      backToTopBtn.classList.toggle('visible', scrollY > 400);
    }

    // Active nav link based on scroll position
    updateActiveNavLink();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* =====================================================
     2. HAMBURGER MENU
     ===================================================== */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen.toString());
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on nav link click
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
  }

  /* =====================================================
     3. ACTIVE NAV LINK — Scroll spy
     ===================================================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

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
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  /* =====================================================
     4. SCROLL ANIMATIONS (Custom AOS-like)
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
    rootMargin: '0px 0px -40px 0px'
  });

  aosElements.forEach(el => aosObserver.observe(el));

  /* =====================================================
     5. NUMBER COUNTER ANIMATION (Hero Stats Bar)
     ===================================================== */
  function animateCounter(el, target) {
    let start       = 0;
    const duration  = 1800;
    const step      = Math.ceil(target / (duration / 16));
    const supEl     = el.querySelector('sup');
    const suffix    = supEl ? supEl.textContent : '';
    if (supEl) supEl.remove();

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      el.textContent = start;
      if (start >= target) {
        const s = document.createElement('sup');
        s.textContent = suffix;
        el.appendChild(s);
      }
    }, 16);
  }

  const heroStatsBar = document.querySelector('.hero-stats-bar');
  let heroStatsAnimated = false;

  if (heroStatsBar) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !heroStatsAnimated) {
        heroStatsAnimated = true;
        const statNums = heroStatsBar.querySelectorAll('.h-stat-num');
        const targets  = [500, 10, 50, 30];
        statNums.forEach((el, i) => {
          if (targets[i] !== undefined) animateCounter(el, targets[i]);
        });
        statsObserver.unobserve(heroStatsBar);
      }
    }, { threshold: 0.5 });
    statsObserver.observe(heroStatsBar);
  }

  /* =====================================================
     6. FAQ ACCORDION
     ===================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all
      faqItems.forEach(fi => {
        fi.classList.remove('active');
        const q = fi.querySelector('.faq-question');
        if (q) {
          q.setAttribute('aria-expanded', 'false');
          const icon = q.querySelector('i');
          if (icon) icon.className = 'fas fa-chevron-down';
        }
      });

      // Open clicked if it was closed
      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        const icon = btn.querySelector('i');
        if (icon) icon.className = 'fas fa-chevron-up';
      }
    });
  });

  /* =====================================================
     7. NEWSLETTER FORM
     ===================================================== */
  const toast = document.getElementById('toast');

  function showToast(message, type = 'success') {
    if (!toast) return;
    toast.querySelector('span').textContent = message;
    toast.className = `toast show ${type}`;
    setTimeout(() => toast.classList.remove('show'), 4500);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      if (emailInput && validateEmail(emailInput.value.trim())) {
        showToast('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
      } else {
        showToast('Please enter a valid email address.', 'error');
      }
    });
  }

  /* =====================================================
     8. BACK TO TOP
     ===================================================== */
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* =====================================================
     9. SMOOTH SCROLL for anchor links
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
     10. WHY FEATURES — Hover active highlight
     ===================================================== */
  const whyFeatures = document.querySelectorAll('.why-feature');
  whyFeatures.forEach(feat => {
    feat.addEventListener('mouseenter', () => {
      whyFeatures.forEach(f => f.classList.remove('active'));
      feat.classList.add('active');
    });
  });

  /* =====================================================
     11. HOW IT WORKS STEPS — stagger reveal
     ===================================================== */
  const hiwSteps = document.querySelectorAll('.hiw-step');
  if (hiwSteps.length) {
    hiwSteps.forEach(step => {
      step.style.opacity   = '0';
      step.style.transform = 'translateX(20px)';
      step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    const hiwCol = document.querySelector('.hiw-steps-col');
    if (hiwCol) {
      const hiwObs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          hiwSteps.forEach((step, i) => {
            setTimeout(() => {
              step.style.opacity   = '1';
              step.style.transform = 'translateX(0)';
            }, i * 150);
          });
          hiwObs.unobserve(hiwCol);
        }
      }, { threshold: 0.2 });
      hiwObs.observe(hiwCol);
    }
  }

  /* =====================================================
     12. INIT
     ===================================================== */
  handleScroll();       // Run once on page load
  updateActiveNavLink();
});
