/* Dynamic project detail renderer powered by window.portfolioData.projects. */

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('mainContainer');
  const projects = getProjects();

  if (!main || !projects.length) return;

  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get('id') || params.get('project') || projects[0].id;
  const project = getProjectById(requestedId);

  if (!project) {
    renderProjectNotFound(requestedId);
    return;
  }

  renderProjectDetails(project);
});

function getProjects() {
  return (window.portfolioData && Array.isArray(window.portfolioData.projects))
    ? window.portfolioData.projects
    : [];
}

function getProjectById(id) {
  const normalizedId = String(id || '').trim();
  return getProjects().find((project) => (
    project.id === normalizedId || project.slug === normalizedId
  ));
}

function renderProjectDetails(project) {
  const main = document.getElementById('mainContainer');
  if (!main || !project) return;

  document.title = `${project.title || 'Project Details'} | Case Study Walkthrough`;
  main.innerHTML = `
    ${renderProjectHero(project)}
    <section class="section-padding">
      <div class="container">
        ${renderHeroImage(project)}
        <div class="details-grid">
          <div class="details-main-column">
            ${renderTextSection('Project Overview', getOverview(project))}
            ${renderTextSection('The Challenge', project.problem)}
            ${renderTextSection('The Solution & Implementation', project.solution)}
            ${renderFeatures(project)}
            ${renderArchitecture(project)}
            ${renderChallenges(project)}
            ${renderListSection('Key Learnings & Takeaways', project.learnings)}
            ${renderListSection('Future Improvements', project.futureImprovements)}
            ${renderListSection('Achievements', project.achievements)}
          </div>
          <div class="details-sidebar">
            ${renderProjectSpecs(project)}
            ${renderTechnologies(project)}
            ${renderButtons(project)}
          </div>
        </div>
        ${renderGallery(project)}
        ${renderProjectNavigation(project)}
      </div>
    </section>
    ${renderGalleryModal(project)}
  `;

  setupProjectGallery(project);
}

function renderProjectHero(project) {
  const statuses = arrayFrom(project.status);
  return `
    <section class="details-hero">
      <div class="container">
        <a href="projects.html" class="details-back-link" aria-label="Back to all projects">
          ${leftArrowIcon()}
          Back to Projects
        </a>
        <div class="details-meta">
          ${statuses.map((status) => `<span class="badge ${statusBadgeClass(status)}">${escapeHtml(status)}</span>`).join('')}
          ${project.category ? `<span class="details-category">${escapeHtml(project.category)}</span>` : ''}
        </div>
        <h1>${escapeHtml(project.title || 'Project Details')}</h1>
        ${getSummary(project) ? `<p class="details-lead">${escapeHtml(getSummary(project))}</p>` : ''}
      </div>
    </section>
  `;
}

function renderHeroImage(project) {
  const src = project.heroImage || project.thumbnail || project.image;
  if (!src) return '';

  return `
    <div class="card detail-hero-image-card reveal">
      <img src="${escapeAttr(src)}" alt="${escapeAttr(project.imageAlt || `${project.title} project preview`)}" class="detail-hero-image">
    </div>
  `;
}

function renderButtons(project) {
  const github = project.github || project.githubUrl;
  const liveDemo = project.liveDemo || project.liveDemoUrl;
  const buttons = [];

  if (github) {
    buttons.push(`<a href="${escapeAttr(github)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub Code</a>`);
  }

  if (liveDemo && liveDemo !== '#') {
    buttons.push(`<a href="${escapeAttr(liveDemo)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Live Demo</a>`);
  }

  if (!buttons.length) return '';

  return `
    <aside class="card details-side-card reveal" aria-labelledby="links-title">
      <h2 class="details-side-title" id="links-title">Codebase & Links</h2>
      <div class="details-link-actions">${buttons.join('')}</div>
    </aside>
  `;
}

function renderGallery(project) {
  const screenshots = normalizeScreenshots(project.screenshots);
  if (!screenshots.length) return '';

  return `
    <section class="details-card details-gallery reveal" aria-labelledby="screenshots-title">
      <h2 class="details-section-title" id="screenshots-title">Screenshots</h2>
      <div class="details-screenshot-grid">
        ${screenshots.map((screenshot, index) => `
          <button class="details-screenshot-card" type="button" data-gallery-index="${index}" aria-label="Open screenshot ${index + 1}: ${escapeAttr(screenshot.alt)}">
            <img src="${escapeAttr(screenshot.src)}" alt="${escapeAttr(screenshot.alt)}" class="details-screenshot">
          </button>
        `).join('')}
      </div>
    </section>
  `;
}

function renderTextSection(title, text) {
  if (!text) return '';

  return `
    <section class="details-card reveal">
      <h2 class="details-section-title">${escapeHtml(title)}</h2>
      <p>${escapeHtml(text)}</p>
    </section>
  `;
}

function renderFeatures(project) {
  return renderListSection('Core Features', project.features);
}

function renderChallenges(project) {
  return renderListSection('Engineering Challenges', project.challenges);
}

function renderListSection(title, items) {
  const list = arrayFrom(items);
  if (!list.length) return '';

  return `
    <section class="details-card reveal">
      <h2 class="details-section-title">${escapeHtml(title)}</h2>
      <ul class="details-list">
        ${list.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>
    </section>
  `;
}

function renderArchitecture(project) {
  if (!project.architecture) return '';

  const architecture = project.architecture;
  const description = typeof architecture === 'string' ? architecture : architecture.description;
  const diagram = typeof architecture === 'object' ? architecture.diagram : '';

  if (!description && !diagram) return '';

  return `
    <section class="details-card reveal">
      <h2 class="details-section-title">System Architecture</h2>
      ${description ? `<p>${escapeHtml(description)}</p>` : ''}
      ${diagram ? `<div class="details-architecture-visual">${escapeHtml(diagram)}</div>` : ''}
    </section>
  `;
}

function renderProjectSpecs(project) {
  const specs = [
    ['Timeline', project.timeline],
    ['Role', project.role],
    ['Client', project.client],
    ['Team Size', project.teamSize],
    ['Platform', project.platform],
    ['Database', project.database],
    ['API', project.api],
    ['Deployment', project.deployment]
  ].filter(([, value]) => Boolean(value));

  if (!specs.length) return '';

  return `
    <aside class="card details-side-card reveal" aria-labelledby="specs-title">
      <h2 class="details-side-title" id="specs-title">Project Specifications</h2>
      <div class="details-spec-list">
        ${specs.map(([label, value]) => `
          <div>
            <span>${escapeHtml(label)}</span>
            <strong>${escapeHtml(value)}</strong>
          </div>
        `).join('')}
      </div>
    </aside>
  `;
}

function renderTechnologies(project) {
  const groupedStack = project.techStack;

  if (groupedStack && typeof groupedStack === 'object' && !Array.isArray(groupedStack)) {
    const groups = Object.entries(groupedStack).filter(([, items]) => arrayFrom(items).length);
    if (!groups.length) return '';

    return `
      <aside class="card details-side-card reveal" aria-labelledby="tech-title">
        <h2 class="details-side-title" id="tech-title">Technology Stack</h2>
        ${groups.map(([group, items]) => `
          <div class="details-tech-group">
            <h3>${escapeHtml(formatLabel(group))}</h3>
            <div class="project-tech">
              ${arrayFrom(items).map((item) => `<span class="tech-tag">${escapeHtml(item)}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </aside>
    `;
  }

  const technologies = arrayFrom(project.technologies || project.tech || project.archiveTech);
  if (!technologies.length) return '';

  return `
    <aside class="card details-side-card reveal" aria-labelledby="tech-title">
      <h2 class="details-side-title" id="tech-title">Technology Stack</h2>
      <div class="project-tech">
        ${technologies.map((item) => `<span class="tech-tag">${escapeHtml(item)}</span>`).join('')}
      </div>
    </aside>
  `;
}

function renderProjectNavigation(project) {
  const projects = getProjects();
  const currentIndex = projects.findIndex((item) => item.id === project.id || item.slug === project.slug);

  if (currentIndex < 0 || projects.length < 2) return '';

  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  return `
    <nav class="details-nav" aria-label="Project navigation">
      <a href="${escapeAttr(getProjectDetailsUrl(previous))}" class="btn btn-outline">
        ${leftArrowIcon()}
        Previous Case Study
      </a>
      <a href="${escapeAttr(getProjectDetailsUrl(next))}" class="btn btn-outline">
        Next Case Study
        ${rightArrowIcon()}
      </a>
    </nav>
  `;
}

function renderGalleryModal(project) {
  const screenshots = normalizeScreenshots(project.screenshots);
  if (!screenshots.length) return '';

  const hasMultiple = screenshots.length > 1;
  return `
    <div class="project-gallery-modal" id="projectGalleryModal" role="dialog" aria-modal="true" aria-labelledby="projectGalleryModalTitle" aria-hidden="true" hidden>
      <div class="project-gallery-backdrop" data-gallery-close></div>
      <div class="project-gallery-dialog">
        <button class="project-gallery-close" type="button" data-gallery-close aria-label="Close screenshot preview">&times;</button>
        <figure>
          <img src="" alt="" id="projectGalleryImage">
          <figcaption>
            <strong id="projectGalleryModalTitle">${escapeHtml(project.title || 'Project screenshot')}</strong>
            <span id="projectGalleryCaption"></span>
          </figcaption>
        </figure>
        ${hasMultiple ? `
          <button class="project-gallery-nav project-gallery-prev" type="button" data-gallery-prev aria-label="Previous screenshot">${leftArrowIcon()}</button>
          <button class="project-gallery-nav project-gallery-next" type="button" data-gallery-next aria-label="Next screenshot">${rightArrowIcon()}</button>
        ` : ''}
      </div>
    </div>
  `;
}

function setupProjectGallery(project) {
  const screenshots = normalizeScreenshots(project.screenshots);
  const modal = document.getElementById('projectGalleryModal');
  if (!modal || !screenshots.length) return;

  const image = document.getElementById('projectGalleryImage');
  const caption = document.getElementById('projectGalleryCaption');
  const closeButtons = modal.querySelectorAll('[data-gallery-close]');
  const previousButton = modal.querySelector('[data-gallery-prev]');
  const nextButton = modal.querySelector('[data-gallery-next]');
  let activeIndex = 0;
  let previousFocus = null;

  const showScreenshot = (index) => {
    activeIndex = (index + screenshots.length) % screenshots.length;
    const screenshot = screenshots[activeIndex];
    image.src = screenshot.src;
    image.alt = screenshot.alt;
    caption.textContent = screenshot.alt;
  };

  const openModal = (index, trigger) => {
    previousFocus = trigger || document.activeElement;
    showScreenshot(index);
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modal.querySelector('.project-gallery-close').focus();
  };

  const closeModal = () => {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (previousFocus && typeof previousFocus.focus === 'function') {
      previousFocus.focus();
    }
  };

  document.querySelectorAll('[data-gallery-index]').forEach((button) => {
    button.addEventListener('click', () => {
      openModal(Number(button.dataset.galleryIndex), button);
    });
  });

  closeButtons.forEach((button) => button.addEventListener('click', closeModal));
  previousButton?.addEventListener('click', () => showScreenshot(activeIndex - 1));
  nextButton?.addEventListener('click', () => showScreenshot(activeIndex + 1));

  document.addEventListener('keydown', (event) => {
    if (modal.hidden) return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowLeft' && previousButton) showScreenshot(activeIndex - 1);
    if (event.key === 'ArrowRight' && nextButton) showScreenshot(activeIndex + 1);
  });
}

function renderProjectNotFound(projectId) {
  const main = document.getElementById('mainContainer');
  if (!main) return;

  document.title = 'Project Not Found | Developer Portfolio';
  main.innerHTML = `
    <section class="section-padding">
      <div class="container">
        <div class="card project-not-found reveal">
          <span class="badge badge-experimental">Not Found</span>
          <h1>Project Not Found</h1>
          <p>The requested project${projectId ? ` (${escapeHtml(projectId)})` : ''} does not exist in the portfolio data yet.</p>
          <a href="projects.html" class="btn btn-primary">Return to Projects</a>
        </div>
      </div>
    </section>
  `;
}

function getOverview(project) {
  return project.fullDescription || project.overview || project.archiveDescription || project.description;
}

function getSummary(project) {
  return project.shortDescription || project.description || project.archiveDescription || project.fullDescription;
}

function getProjectDetailsUrl(project) {
  return project.detailsUrl || `project-details.html?id=${encodeURIComponent(project.slug || project.id)}`;
}

function normalizeScreenshots(screenshots) {
  return arrayFrom(screenshots)
    .map((screenshot) => {
      if (typeof screenshot === 'string') {
        return { src: screenshot, alt: 'Project screenshot' };
      }

      return {
        src: screenshot.src,
        alt: screenshot.alt || 'Project screenshot'
      };
    })
    .filter((screenshot) => Boolean(screenshot.src));
}

function arrayFrom(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function statusBadgeClass(status) {
  const normalized = String(status).toLowerCase();
  if (normalized.includes('progress')) return 'badge-progress';
  if (normalized.includes('experimental')) return 'badge-experimental';
  if (normalized.includes('case')) return 'badge-case-study';
  return 'badge-completed';
}

function formatLabel(value) {
  return String(value)
    .replace(/([A-Z])/g, ' $1')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .trim();
}

function leftArrowIcon() {
  return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>';
}

function rightArrowIcon() {
  return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
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

window.getProjectById = getProjectById;
window.renderProjectDetails = renderProjectDetails;
