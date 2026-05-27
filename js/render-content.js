/* Renders portfolioData into existing page containers. */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.portfolioData;
  if (!data) return;

  renderFeaturedProjects(data.projects || []);
  renderProjectArchive(data.projects || []);
  renderSkills(data.skillCategories || []);
  renderDeveloperJourney(data.developerJourney || []);
  renderEducationBackground(data.educationBackground || []);
  renderLearningAttended(data.learningAttended || []);
  renderCertificates(data.certificates || []);
});

function renderFeaturedProjects(projects) {
  const container = document.querySelector('[data-render="featured-projects"]');
  if (!container) return;

  const featuredProjects = projects.filter(project => project.featured).slice(0, 6);
  container.innerHTML = renderProjectCards(featuredProjects, {
    variant: 'featured',
    wrapper: false
  });
}

function renderProjectArchive(projects) {
  const container = document.querySelector('[data-render="projects-gallery"]');
  if (!container) return;

  container.innerHTML = renderProjectCards(projects, {
    variant: 'archive',
    wrapper: true
  });
}

function renderProjectCards(projects, options = {}) {
  return (projects || []).map((project, index) => projectCard(project, {
    ...options,
    delay: index % 3
  })).join('');
}

function renderSkills(categories) {
  const container = document.querySelector('[data-render="skills"]');
  if (!container) return;

  container.innerHTML = categories.map((category, index) => `
    <article class="card skills-category reveal${delayClass(index)}">
      <h3>${escapeHtml(category.title)}</h3>
      <div class="skills-chips">
        ${(category.skills || []).map(skill => `
          <span class="skill-chip"><object data="${escapeAttr(skill.icon)}" width="24" height="24"></object>${escapeHtml(skill.name)}</span>
        `).join('')}
      </div>
    </article>
  `).join('');
}

function renderDeveloperJourney(items) {
  const container = document.querySelector('[data-render="developer-journey"]');
  if (!container) return;

  container.innerHTML = items.map((item, index) => `
    <div class="timeline-item ${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <div class="timeline-date">${escapeHtml(item.date)}</div>
        <h4 class="timeline-title">${escapeHtml(item.title)}</h4>
        <div class="timeline-org">${escapeHtml(item.organization)}</div>
        <p class="timeline-desc">${escapeHtml(item.description)}</p>
      </div>
    </div>
  `).join('');
}

function renderEducationBackground(items) {
  const container = document.querySelector('[data-render="education-background"]');
  if (!container) return;

  container.innerHTML = items.map(item => `
    <div>
      <span>${escapeHtml(item.level)}</span>
      <h4>${escapeHtml(item.program)}</h4>
      <p>${escapeHtml(item.school)}<br>${escapeHtml(item.period)}</p>
    </div>
  `).join('');
}

function renderLearningAttended(groups) {
  const container = document.querySelector('[data-render="learning-attended"]');
  if (!container) return;

  container.innerHTML = groups.map((group, index) => `
    <section class="learning-group" aria-labelledby="learning-attended-group-${index}">
      <h4 id="learning-attended-group-${index}">${escapeHtml(group.title)}</h4>
      <ul>
        ${(group.items || []).map(item => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>
    </section>
  `).join('');
}

function renderCertificates(certificates) {
  document.querySelectorAll('[data-render="featured-certificates"], [data-render="certificates"]').forEach((container) => {
    const isFeatured = container.dataset.render === 'featured-certificates';
    const renderedCertificates = isFeatured ? certificates.slice(0, 3) : certificates;

    container.innerHTML = renderedCertificates.map((certificate, index) => certificateCard(certificate, index)).join('');
  });
}

function projectCard(project, options) {
  const isArchive = options.variant === 'archive';
  const cardSize = !isArchive && project.bentoSize ? ` project-card-${project.bentoSize}` : '';
  const cardClass = `card project-card${cardSize} reveal${delayClass(options.delay)}`;
  const description = isArchive ? (project.archiveDescription || project.description) : project.description;
  const tech = isArchive && project.archiveTech ? project.archiveTech : project.tech;
  const detailsLabel = isArchive ? (project.archiveDetailsLabel || project.detailsLabel || 'View Details') : (project.detailsLabel || 'View Details');
  const card = `
    <article class="${cardClass}">
      <div class="project-image-wrapper">
        <div class="project-badges">
          <span class="badge badge-category">${escapeHtml(project.category)}</span>
          ${(project.status || []).map(status => `<span class="badge ${statusBadgeClass(status)}">${escapeHtml(status)}</span>`).join('')}
        </div>
        <img src="${escapeAttr(project.image)}" alt="${escapeAttr(project.imageAlt || `${project.title} project preview`)}" class="project-image">
      </div>
      <div class="project-content">
        <h3 class="project-title">${escapeHtml(project.title)}</h3>
        <p class="project-desc">${escapeHtml(description || '')}</p>
        <div class="project-tech">
          ${(tech || []).map(item => `<span class="tech-tag">${escapeHtml(item)}</span>`).join('')}
        </div>
        <div class="project-actions">
          <a href="${escapeAttr(project.githubUrl || 'https://github.com')}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">GitHub</a>
          <a href="${escapeAttr(project.detailsUrl || '#')}" class="btn btn-secondary">${escapeHtml(detailsLabel)}</a>
        </div>
      </div>
    </article>
  `;

  if (!options.wrapper) return card;

  return `
    <div class="project-card-wrapper reveal${delayClass(options.delay)}" data-category="${escapeAttr((project.filters || []).join(' '))}">
      ${card}
    </div>
  `;
}

function certificateCard(certificate, index) {
  const details = [
    certificate.issuer ? `Issuer: ${certificate.issuer}` : '',
    certificate.year ? `Year: ${certificate.year}` : '',
    certificate.description || ''
  ].filter(Boolean).join(' | ');

  return `
    <article class="card certificate-card reveal${delayClass(index)}"
      data-modal-title="${escapeAttr(certificate.title)}"
      data-modal-details="${escapeAttr(details)}"
      data-modal-image="${escapeAttr(certificate.image)}"
      tabindex="0">
      <img src="${escapeAttr(certificate.image)}" alt="${escapeAttr(`${certificate.title} certificate preview`)}" class="certificate-image">
      <div>
        ${certificate.category ? `<span class="badge badge-category">${escapeHtml(certificate.category)}</span>` : ''}
        <h3>${escapeHtml(certificate.title)}</h3>
        <p>${escapeHtml(certificate.issuer || '')}</p>
        <span>${escapeHtml(certificate.year || '')}</span>
      </div>
    </article>
  `;
}

function statusBadgeClass(status) {
  const normalized = String(status).toLowerCase();
  if (normalized.includes('progress')) return 'badge-progress';
  if (normalized.includes('experimental')) return 'badge-experimental';
  if (normalized.includes('case')) return 'badge-case-study';
  return 'badge-completed';
}

function delayClass(index) {
  const delay = index % 3;
  return delay ? ` delay-${delay}` : '';
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, '&#096;');
}

window.renderProjectCards = renderProjectCards;
