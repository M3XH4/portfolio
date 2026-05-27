/* Projects and certificates filtering */

document.addEventListener('DOMContentLoaded', () => {
  const filterGroups = document.querySelectorAll('[data-filter-group]');

  filterGroups.forEach((group) => {
    const buttons = group.querySelectorAll('[data-filter]');
    const targetSelector = group.dataset.filterTarget;
    const cards = targetSelector ? document.querySelectorAll(targetSelector) : [];

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        buttons.forEach((item) => {
          item.classList.toggle('active', item === button);
          item.setAttribute('aria-pressed', String(item === button));
        });

        cards.forEach((card) => {
          const category = card.dataset.category || '';
          const shouldShow = filter === 'all' || category.split(' ').includes(filter);
          card.hidden = !shouldShow;
        });
      });
    });
  });
});
