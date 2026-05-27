/* Scroll and Mouse Interactivity Animations */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Reveal setup using IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');

  const revealOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px', // Trigger slightly before element enters view
    threshold: 0.15
  };

  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Stop observing after anim triggers once
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
  revealElements.forEach(element => revealObserver.observe(element));

  // 2. Lightweight scroll parallax for the hero technical background
  const parallaxShell = document.querySelector('[data-parallax-shell]');
  if (parallaxShell) {
    let ticking = false;

    const updateHeroParallax = () => {
      const rect = parallaxShell.getBoundingClientRect();
      const offset = Math.round(rect.top * -0.12);
      parallaxShell.style.setProperty('--parallax-offset', `${offset}px`);
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeroParallax);
        ticking = true;
      }
    }, { passive: true });

    updateHeroParallax();
  }

  // 3. Cursor Parallax Blur Glow movement (Hero Section interaction)
  const heroSection = document.querySelector('.hero-section');
  const glow1 = document.querySelector('.blur-glow-1');
  const glow2 = document.querySelector('.blur-glow-2');

  if (heroSection && glow1 && glow2) {
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    const ease = 0.08; // Friction factor

    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      // Calculate cursor percentage coordinates relative to section
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Map to displacements
      targetX = (x - rect.width / 2) * 0.12; 
      targetY = (y - rect.height / 2) * 0.12;
    });

    heroSection.addEventListener('mouseleave', () => {
      // Return blobs back to base position slowly
      targetX = 0;
      targetY = 0;
    });

    const updateParallax = () => {
      // Linear interpolation to make the animation smooth
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      // Apply transforms
      if (glow1) {
        glow1.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      if (glow2) {
        glow2.style.transform = `translate(${-currentX * 1.5}px, ${-currentY * 1.5}px)`;
      }

      requestAnimationFrame(updateParallax);
    };

    updateParallax();
  }
});
