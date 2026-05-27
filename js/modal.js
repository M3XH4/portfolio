/* Accessible certificate preview modal */

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('certificateModal');
  if (!modal) return;

  const dialog = modal.querySelector('.certificate-modal__dialog');
  const image = document.getElementById('certificateModalImage');
  const title = document.getElementById('certificateModalTitle');
  const details = document.getElementById('certificateModalDetails');
  const closeButtons = modal.querySelectorAll('[data-modal-close]');
  let previousFocus = null;

  const focusableSelector = 'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])';

  const openModal = (trigger) => {
    previousFocus = document.activeElement;
    title.textContent = trigger.dataset.modalTitle || 'Certificate';
    details.textContent = trigger.dataset.modalDetails || '';
    image.src = trigger.dataset.modalImage || '';
    image.alt = `${title.textContent} full certificate preview`;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    const closeButton = modal.querySelector('.certificate-modal__close');
    if (closeButton) closeButton.focus();
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    image.removeAttribute('src');
    if (previousFocus && typeof previousFocus.focus === 'function') {
      previousFocus.focus();
    }
  };

  const trapFocus = (event) => {
    if (event.key !== 'Tab' || !modal.classList.contains('is-open')) return;
    const focusable = Array.from(dialog.querySelectorAll(focusableSelector));
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-modal-image]');
    if (trigger) openModal(trigger);
  });

  document.addEventListener('keydown', (event) => {
    const trigger = event.target.closest('[data-modal-image]');
    if (trigger && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      openModal(trigger);
    }
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
    trapFocus(event);
  });
});
