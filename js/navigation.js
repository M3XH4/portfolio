/* Navigation and Menu Interactions */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  // 1. Sticky Header scroll handling
  const checkScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Initial execution

  // 2. Mobile Menu toggle behavior
  const setMobileMenuState = (shouldOpen) => {
    hamburger.classList.toggle('open', shouldOpen);
    mobileNav.classList.toggle('open', shouldOpen);
    document.body.classList.toggle('no-scroll', shouldOpen);
    hamburger.setAttribute('aria-expanded', String(shouldOpen));
    mobileNav.setAttribute('aria-hidden', String(!shouldOpen));
  };

  const toggleMobileMenu = () => {
    setMobileMenuState(!mobileNav.classList.contains('open'));
  };

  hamburger.addEventListener('click', toggleMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      setMobileMenuState(false);
    });
  });

  // Close mobile nav on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      toggleMobileMenu();
    }
  });

  const desktopQuery = window.matchMedia('(min-width: 768px)');
  const syncDesktopState = (event) => {
    if (event.matches && mobileNav.classList.contains('open')) {
      setMobileMenuState(false);
    }
  };

  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener('change', syncDesktopState);
  }

  // 3. Scroll spy highlight navigation links based on visible sections
  const scrollSpyOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the active middle portion
    threshold: 0
  };

  const scrollSpyCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Update desktop links
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        // Update mobile links
        mobileLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(scrollSpyCallback, scrollSpyOptions);
  sections.forEach(section => observer.observe(section));
});
