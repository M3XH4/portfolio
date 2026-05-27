/* Main Orchestration & Global Features */

document.addEventListener('DOMContentLoaded', () => {
  hydrateSkillIcons();

  const contactForm = document.getElementById('portfolioContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      
      // Simple validation indicator
      let isValid = true;
      const inputs = contactForm.querySelectorAll('.form-control');
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = 'rgba(239, 68, 68, 0.5)'; // Red border on empty
        } else {
          input.style.borderColor = 'var(--border-color)';
        }
      });

      if (!isValid) {
        showFormAlert('Please fill in all fields.', 'error');
        return;
      }

      // Simulate API submit status
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending...';

      setTimeout(() => {
        submitBtn.innerHTML = 'Success!';
        submitBtn.style.background = 'var(--status-completed)';
        showFormAlert('Message sent successfully! I will get back to you shortly.', 'success');
        
        contactForm.reset();
        
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
          submitBtn.style.background = 'var(--accent-gradient)';
        }, 3000);
      }, 1500);
    });
  }

  // Display toast alerts helper
  function showFormAlert(message, type) {
    const existingAlert = document.querySelector('.form-alert');
    if (existingAlert) existingAlert.remove();

    const alertEl = document.createElement('div');
    alertEl.className = `form-alert form-alert-${type}`;
    alertEl.innerText = message;
    
    // Style inline
    alertEl.style.position = 'fixed';
    alertEl.style.bottom = '1rem';
    alertEl.style.right = '1rem';
    alertEl.style.left = '1rem';
    alertEl.style.maxWidth = 'min(24rem, calc(100vw - 2rem))';
    alertEl.style.marginLeft = 'auto';
    alertEl.style.marginRight = 'auto';
    alertEl.style.padding = '1rem 1.25rem';
    alertEl.style.borderRadius = 'var(--radius-sm)';
    alertEl.style.color = '#fff';
    alertEl.style.zIndex = '999';
    alertEl.style.fontSize = '0.95rem';
    alertEl.style.boxShadow = 'var(--shadow-lg)';
    alertEl.style.transition = 'opacity 0.3s ease';
    
    if (type === 'success') {
      alertEl.style.backgroundColor = 'var(--status-completed)';
    } else {
      alertEl.style.backgroundColor = '#ef4444';
    }

    document.body.appendChild(alertEl);
    
    setTimeout(() => {
      alertEl.style.opacity = '0';
      setTimeout(() => alertEl.remove(), 300);
    }, 4000);
  }

  function hydrateSkillIcons() {
    const iconObjects = document.querySelectorAll('.skill-chip object[data$=".svg"]');
    iconObjects.forEach(async (iconObject) => {
      try {
        const iconUrl = iconObject.getAttribute('data');
        if (!iconUrl) return;

        const response = await fetch(iconUrl);
        if (!response.ok) return;

        const svgText = await response.text();
        const svgDocument = new DOMParser().parseFromString(svgText, 'image/svg+xml');
        const svg = svgDocument.querySelector('svg');
        if (!svg) return;

        sanitizeSkillSvg(svg);
        iconObject.before(svg);
        iconObject.dataset.iconHydrated = 'true';
        iconObject.setAttribute('aria-hidden', 'true');
      } catch (error) {
        console.warn('Skill icon could not be prepared:', error);
      }
    });
  }

  function sanitizeSkillSvg(svg) {
    svg.classList.add('skill-icon');
    svg.removeAttribute('width');
    svg.removeAttribute('height');
    svg.removeAttribute('fill');
    svg.removeAttribute('stroke');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');

    svg.querySelectorAll('title, desc, style').forEach(element => element.remove());
    removeSvgBackgroundShapes(svg);

    const paintableElements = svg.querySelectorAll('path, circle, ellipse, line, polyline, polygon, rect');
    paintableElements.forEach((element) => {
      normalizeSvgPaint(element);
    });
  }

  function removeSvgBackgroundShapes(svg) {
    const viewBox = svg.getAttribute('viewBox');
    if (!viewBox) return;

    const [, , viewBoxWidth, viewBoxHeight] = viewBox.split(/\s+/).map(Number);
    if (!viewBoxWidth || !viewBoxHeight) return;

    svg.querySelectorAll('rect').forEach((rect) => {
      const x = Number(rect.getAttribute('x') || 0);
      const y = Number(rect.getAttribute('y') || 0);
      const width = rect.getAttribute('width');
      const height = rect.getAttribute('height');
      const rectWidth = width === '100%' ? viewBoxWidth : Number(width);
      const rectHeight = height === '100%' ? viewBoxHeight : Number(height);
      const fill = (rect.getAttribute('fill') || '').toLowerCase();
      const isFullCanvas = x === 0 && y === 0 && rectWidth >= viewBoxWidth && rectHeight >= viewBoxHeight;
      const isBackgroundFill = !fill || fill === '#fff' || fill === '#ffffff' || fill === 'white' || fill === '#000' || fill === '#000000' || fill === 'black';

      if (isFullCanvas && isBackgroundFill) {
        rect.remove();
      }
    });
  }

  function normalizeSvgPaint(element) {
    const fill = element.getAttribute('fill');
    const stroke = element.getAttribute('stroke');
    const hasVisibleStroke = stroke && stroke !== 'none';

    element.removeAttribute('style');
    element.removeAttribute('class');

    if (hasVisibleStroke) {
      element.setAttribute('stroke', 'currentColor');
      if (!fill) {
        element.setAttribute('fill', 'none');
      }
    }

    if (fill && fill !== 'none') {
      element.setAttribute('fill', 'currentColor');
    }

    if (!fill && !hasVisibleStroke) {
      element.setAttribute('fill', 'currentColor');
    }
  }
});
