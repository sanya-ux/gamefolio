/* ===========================================
   Main JavaScript
   Handles modal, tabs, and dynamic content loading
   
   Projects data is in: data/projects.js
   Artworks data is in: data/artworks.js (if exists)
   =========================================== */

// Wait for DOM and data to load
document.addEventListener('DOMContentLoaded', () => {
  // Prevent browser from restoring previous scroll position
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  initPortfolio();

  // Add scrolled class to header
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
});

function initPortfolio() {
  // Get data from window.portfolioData (loaded from data/projects.js)
  const projects = window.portfolioData?.projects || {};
  const artworks = window.portfolioData?.artworks || {};
  const essays = window.portfolioData?.essays || [];
  const reviews = window.portfolioData?.reviews || [];

  // Render projects grid in Work tab
  renderProjectsGrid(projects);

  // Render artworks carousel in Art tab
  renderArtCarousel(artworks);

  // Render essays section in Work tab
  renderEssays(essays);

  // Render reviews across tabs
  renderReviews(reviews);

  // Initialize other functionality
  initModal();
  initTabs();
  initThemeToggle();
}

// Render Reviews section across tabs
function renderReviews(reviews) {
  const lists = document.querySelectorAll('.reviews-list');
  if (!lists.length) return;

  if (!reviews || reviews.length === 0) {
    lists.forEach(list => {
      const section = list.closest('.reviews-section');
      if (section) section.style.display = 'none';
      list.innerHTML = '';
    });
    return;
  }

  const reviewsHTML = reviews.map(review => `
    <div class="review-card">
      <p class="review-text">"${review.text}"</p>
      <div class="review-meta">
        <p class="review-author">${review.author}</p>
        <p class="review-role">${review.role}</p>
      </div>
    </div>
  `).join('');

  lists.forEach(list => {
    list.innerHTML = reviewsHTML;
  });
}

function renderProjectsGrid(projects) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const projectArray = Object.values(projects);

  if (projectArray.length === 0) {
    grid.innerHTML = '<p style="color: #888;">No projects yet. Add projects in data/projects.js</p>';
    return;
  }

  // Clear existing content
  grid.innerHTML = '';

  // Loop through projects and create cards
  let currentSlot = 0;
  projectArray.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'card';

    // Calculate row for staggered animation so pairs appear together
    const animDuration = 0.35; // Match CSS animation duration so rows wait for the previous to complete
    const slotsNeeded = item.layout === 'wide' ? 2 : 1;
    if (slotsNeeded === 2 && currentSlot % 2 !== 0) {
      currentSlot += 1;
    }
    const currentRow = Math.floor(currentSlot / 2);
    card.style.animationDelay = `${currentRow * animDuration}s`;
    currentSlot += slotsNeeded;

    if (item.layout === 'wide') {
      card.classList.add('card-wide');
    }
    card.setAttribute('data-id', item.id);

    // Create image element - use cover if available, otherwise image
    const img = document.createElement('img');
    img.src = item.cover || item.image;
    img.alt = item.title || '';
    img.loading = 'lazy';

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'card-overlay';

    const label = document.createElement('span');
    label.className = 'card-label';
    label.textContent = item.hoverTitle || item.title || '';

    overlay.appendChild(label);
    card.appendChild(img);
    card.appendChild(overlay);

    // Add click event to call openModal(item.id)
    card.addEventListener('click', () => openModal(item.id));

    // Append card to grid
    grid.appendChild(card);
  });
}

function renderArtCarousel(artworks) {
  const track1 = document.getElementById('artCarouselTrack1');
  const track2 = document.getElementById('artCarouselTrack2');
  const track3 = document.getElementById('artCarouselTrack3');
  const track4 = document.getElementById('artCarouselTrack4');

  const allArtworks = Object.values(artworks || {});

  if (allArtworks.length === 0) {
    if (track1) track1.innerHTML = '<p style="color: #888;">No artworks yet.</p>';
    if (track2) track2.innerHTML = '<p style="color: #888;">No artworks yet.</p>';
    return;
  }

  // First carousel row - Game Art
  if (track1) {
    const rowArtworks1 = allArtworks.filter(a => a.category === 'game-art');
    const data1 = rowArtworks1.length ? rowArtworks1 : allArtworks;

    track1.innerHTML = data1.map((artwork, index) => `
      <div class="art-carousel-slide" data-index="${index}">
        <img src="${artwork.image}" alt="${artwork.title}" loading="lazy" />
      </div>
    `).join('');

    enableArtOverlayForTrack(track1);
  }

  // Second carousel row - Environment
  if (track2) {
    const rowArtworks2 = allArtworks.filter(a => a.category === 'environment');
    const data2 = rowArtworks2.length ? rowArtworks2 : allArtworks;

    track2.innerHTML = data2.map((artwork, index) => `
      <div class="art-carousel-slide" data-index="${index}">
        <img src="${artwork.image}" alt="${artwork.title}" loading="lazy" />
      </div>
    `).join('');

    enableArtOverlayForTrack(track2);
  }

  // Third carousel row - Illustration
  if (track3) {
    const rowArtworks3 = allArtworks.filter(a => a.category === 'illustration');
    const data3 = rowArtworks3.length ? rowArtworks3 : allArtworks;

    track3.innerHTML = data3.map((artwork, index) => `
      <div class="art-carousel-slide" data-index="${index}">
        <img src="${artwork.image}" alt="${artwork.title}" loading="lazy" />
      </div>
    `).join('');

    enableArtOverlayForTrack(track3);
  }

  // Fourth carousel row - Sketches
  if (track4) {
    const rowArtworks4 = allArtworks.filter(a => a.category === 'sketches');
    const data4 = rowArtworks4.length ? rowArtworks4 : allArtworks;

    track4.innerHTML = data4.map((artwork, index) => `
      <div class="art-carousel-slide" data-index="${index}">
        <img src="${artwork.image}" alt="${artwork.title}" loading="lazy" />
      </div>
    `).join('');

    enableArtOverlayForTrack(track4);
  }

  // Enable middle mouse button scrolling for all tracks
  setupMiddleMouseScroll(track1);
  setupMiddleMouseScroll(track2);
  setupMiddleMouseScroll(track3);
  setupMiddleMouseScroll(track4);
}

function enableArtOverlayForTrack(track) {
  if (!track) return;
  const images = track.querySelectorAll('.art-carousel-slide img');
  images.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      openArtOverlay(img.src, img.alt || '');
    });
  });
}

// Middle mouse button (middle-click) drag scrolling
function setupMiddleMouseScroll(track) {
  if (!track) return;

  let isMiddleMouseDown = false;
  let startX = 0;
  let scrollLeft = 0;

  // Prevent default middle-click behavior (auto-scroll)
  track.addEventListener('mousedown', (e) => {
    if (e.button === 1) { // Middle mouse button
      e.preventDefault();
      isMiddleMouseDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.cursor = 'grabbing';
    }
  });

  track.addEventListener('mouseleave', () => {
    if (isMiddleMouseDown) {
      isMiddleMouseDown = false;
      track.style.cursor = '';
    }
  });

  track.addEventListener('mouseup', () => {
    if (isMiddleMouseDown) {
      isMiddleMouseDown = false;
      track.style.cursor = '';
    }
  });

  track.addEventListener('mousemove', (e) => {
    if (!isMiddleMouseDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    track.scrollLeft = scrollLeft - walk;
  });
}

// Render Essays section under Work tab
function renderEssays(essays) {
  const list = document.querySelector('.essays-list');
  if (!list) return;

  // If no essays provided, hide the section
  if (!essays || essays.length === 0) {
    list.innerHTML = '';
    list.parentElement.style.display = 'none';
    return;
  }

  list.innerHTML = '';

  essays.forEach(essay => {
    const link = document.createElement('a');
    link.className = 'essay-item';
    const url = typeof essay.url === 'string' ? essay.url.trim() : '';
    const hasUrl = url.length > 0;
    link.href = hasUrl ? url : '#';
    if (hasUrl) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    } else {
      link.setAttribute('aria-disabled', 'true');
      link.addEventListener('click', (e) => e.preventDefault());
    }

    let thumb;
    if (essay.image) {
      thumb = document.createElement('img');
      thumb.className = 'essay-thumb';
      thumb.src = essay.image;
      thumb.alt = essay.title || '';
      thumb.loading = 'lazy';
    } else {
      // Fallback to the CSS placeholder background
      thumb = document.createElement('div');
      thumb.className = 'essay-thumb';
    }

    const content = document.createElement('div');
    content.className = 'essay-content';

    const titleEl = document.createElement('h3');
    titleEl.className = 'essay-title';
    titleEl.textContent = essay.title || '';

    const descEl = document.createElement('p');
    descEl.className = 'essay-desc';
    descEl.textContent = essay.description || '';

    content.appendChild(titleEl);
    if (essay.description) {
      content.appendChild(descEl);
    }

    link.appendChild(thumb);
    link.appendChild(content);

    list.appendChild(link);
  });
}

// ── MODAL FUNCTIONS ──
const backdrop = document.getElementById('modalBackdrop');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.getElementById('modalClose');
const modal = document.getElementById('modal');

// ── ART OVERLAY ELEMENTS ──
const artOverlayBackdrop = document.getElementById('artOverlayBackdrop');
const artOverlayImage = document.getElementById('artOverlayImage');
const artOverlayClose = document.getElementById('artOverlayClose');

function openModal(projectKey) {
  // Try both projects and artworks
  const allData = { ...window.portfolioData?.projects, ...window.portfolioData?.artworks };
  const p = allData[projectKey];

  if (!p) return;

  // Build generic content blocks if available
  let contentHTML = '';
  if (p.content && Array.isArray(p.content)) {
    contentHTML = p.content.map(block => renderBlock(block)).join('');
  }

  // Helper function to render any block
  function renderBlock(block) {
    const customClass = block.class ? ` ${block.class}` : '';

    switch (block.type) {
      case 'spacing':
        const spaceClass = block.space ? ` space-${block.space}` : '';
        return `<div class="modal-block-spacing${spaceClass}"></div>`;
    }

    switch (block.type) {
      case 'heading': {
        const level = block.level || 2;
        return `<h${level} class="modal-block-heading${customClass}">${block.text}</h${level}>`;
      }

      case 'text':
        const smallClass = block.small ? ' modal-block-text-small' : '';
        return `<p class="modal-block-text${customClass}${smallClass}">${block.text}</p>`;
      case 'centertext':
        return `<p class="modal-block-centertext${customClass}">${block.text}</p>`;
      case 'centerheading':
        return `<p class="modal-block-centerheading${customClass}">${block.text}</p>`;
      case 'centertextwide':
        return `<p class="modal-block-centertextwide${customClass}">${block.text}</p>`;
      case 'smallheading':
        return `<p class="modal-block-smallheading${customClass}">${block.text}</p>`;


      case 'paragraph':
        return `<p class="modal-block-paragraph${customClass}">${block.text}</p>`;
      case 'list': {
        const ordered = !!block.ordered;
        const tag = ordered ? 'ol' : 'ul';
        const items = Array.isArray(block.items) ? block.items : [];
        return `<${tag} class="modal-block-list${customClass}">${items.map(item => `<li>${item}</li>`).join('')}</${tag}>`;
      }

      // Image block with optional caption
      case 'image':
        return `<figure class="modal-block-image${customClass}"><img src="${block.src}" alt="${block.caption || ''}" loading="lazy" />${block.caption ? `<figcaption>${block.caption}</figcaption>` : ''}</figure>`;
      case 'imagesmall':
        return `<figure class="modal-block-imagesmall${customClass}"><img src="${block.src}" alt="${block.caption || ''}" loading="lazy" />${block.caption ? `<figcaption>${block.caption}</figcaption>` : ''}</figure>`;

      case 'imagesmall2':
        return `<figure class="modal-block-imagesmall2${customClass}"><img src="${block.src}" alt="${block.caption || ''}" loading="lazy" />${block.caption ? `<figcaption>${block.caption}</figcaption>` : ''}</figure>`;


      case 'imagemedium':
        return `<figure class="modal-block-imagemedium${customClass}"><img src="${block.src}" alt="${block.caption || ''}" loading="lazy" />${block.caption ? `<figcaption>${block.caption}</figcaption>` : ''}</figure>`;

      case 'imagestretch':
        return `<figure class="modal-block-imagestretch${customClass}"><img src="${block.src}" alt="${block.caption || ''}" loading="lazy" />${block.caption ? `<figcaption>${block.caption}</figcaption>` : ''}</figure>`;

      case 'imagebg': {
        const bgContent = (block.content || []).map(b => renderBlock(b)).join('');
        const opacityStyle = block.opacity !== undefined ? `--bg-opacity: ${block.opacity};` : '';
        return `<div class="modal-block-imagebg${customClass}" style="background-image: url('${block.src}'); ${opacityStyle}"><div class="modal-imagebg-overlay"></div><div class="modal-imagebg-content">${bgContent}</div></div>`;
      }

      case 'imagebig':
        return `<figure class="modal-block-imagebig${customClass}"><img src="${block.src}" alt="${block.caption || ''}" loading="lazy" />${block.caption ? `<figcaption>${block.caption}</figcaption>` : ''}</figure>`;

      case 'video':
        return `<div class="modal-block-video${customClass}"><video controls preload="metadata" poster="${block.poster || ''}"><source src="${block.src}" type="video/mp4" /></video></div>`;

      case 'youtube':
        return `<div class="modal-block-video${customClass}">
    <iframe
      src="${block.src}"
      title="YouTube video"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>`;

      // Gallery blocks - display images in a grid with specified columns
      case 'gallery3': {
        const cols = block.columns || 3;
        const captions = block.captions || [];
        return `<div class="modal-block-gallery3${customClass}" style="--columns: ${cols}">${block.images.map((img, i) => captions[i] ? `<figure style="margin:0;"><img src="${img}" alt="" loading="lazy" /><figcaption style="font-size:13px; font-weight:200; color:var(--primarytext); margin-top:8px; text-align:center;">${captions[i]}</figcaption></figure>` : `<img src="${img}" alt="" loading="lazy" />`).join('')}</div>`;
      }
      case 'gallery2': {
        const cols = block.columns || 2;
        const captions = block.captions || [];
        return `<div class="modal-block-gallery2${customClass}" style="--columns: ${cols}">${block.images.map((img, i) => captions[i] ? `<figure style="margin:0;"><img src="${img}" alt="" loading="lazy" /><figcaption style="font-size:13px; font-weight:200; color:var(--primarytext); margin-top:8px; text-align:center;">${captions[i]}</figcaption></figure>` : `<img src="${img}" alt="" loading="lazy" />`).join('')}</div>`;
      }
      case 'quote':
        return `<blockquote class="modal-block-quote${customClass}"><p>${block.text}</p>${block.author ? `<cite>— ${block.author}</cite>` : ''}</blockquote>`;

      case 'row': {
        // Two-column row: { type: 'row', left: [...], right: [...] }
        const leftContent = (block.left || []).map(b => renderBlock(b)).join('');
        const rightContent = (block.right || []).map(b => renderBlock(b)).join('');
        return `<div class="modal-row${customClass}"><div class="modal-row-left">${leftContent}</div><div class="modal-row-right">${rightContent}</div></div>`;
      }


      case 'card': {
        // Card with image, title, text, and/or list items
        let cardContent = '';
        if (block.title) {
          cardContent += `<h4 class="modal-card-title">${block.title}</h4>`;
        }
        if (block.text) {
          cardContent += `<p class="modal-card-text">${block.text}</p>`;
        }
        if (block.items && Array.isArray(block.items)) {
          cardContent += `<ul class="modal-card-list">${block.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
        }
        return `<div class="modal-card${customClass}">${block.image ? `<img src="${block.image}" alt="${block.title || ''}" loading="lazy" />` : ''}<div class="modal-card-content">${cardContent}</div></div>`;
      }
      default:
        return '';
    }

  }

  modalBody.innerHTML = `
    <h2 class="modal-title">${p.title}</h2>
    <div class="modal-meta">
      <div class="modal-meta-item">
        <label>Timeline</label>
        <span>${p.timeline}</span>
      </div>
      <div class="modal-meta-item">
        <label>Keywords</label>
        <span>${p.keywords}</span>
      </div>
      <div class="modal-meta-item">
        <label>Softwares</label>
        <span>${p.softwares}</span>
      </div>
    </div>
    <hr class="modal-divider" />
    <div class="modal-blocks">
      ${contentHTML}
    </div>
  `;



  // Show the modal
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// Insert visual placeholders that match the VISHWAS case study layout
function addVishwasPlaceholders(root) {
  function createPlaceholder(label) {
    const el = document.createElement('div');
    el.className = 'modal-image-placeholder';
    if (label) {
      const span = document.createElement('span');
      span.textContent = label;
      el.appendChild(span);
    }
    return el;
  }

  function insertPlaceholderAfterHeading(headingText, label) {
    const headings = root.querySelectorAll('h2, h3, h4, h5');
    const target = Array.from(headings).find((h) =>
      h.textContent.trim().toLowerCase().startsWith(headingText.toLowerCase())
    );
    if (target && target.parentNode) {
      const placeholder = createPlaceholder(label);
      target.parentNode.insertBefore(placeholder, target.nextSibling);
    }
  }

  // insertPlaceholderAfterHeading('DigiLocker: Digital Asset Nomination and Claim', 'Overview visuals');
}



function closeModal() {
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

function openArtOverlay(src, alt) {
  if (!artOverlayBackdrop || !artOverlayImage) return;
  artOverlayImage.src = src;
  artOverlayImage.alt = alt || '';
  artOverlayBackdrop.classList.add('open');
  artOverlayBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeArtOverlay() {
  if (!artOverlayBackdrop || !artOverlayImage) return;
  artOverlayBackdrop.classList.remove('open');
  artOverlayBackdrop.setAttribute('aria-hidden', 'true');
  artOverlayImage.src = '';
  document.body.style.overflow = '';
}

function initModal() {
  // Card clicks are handled by direct event listeners in renderProjectsGrid/renderArtworksGrid
  // This event delegation catches clicks on cards as fallback
  document.addEventListener('click', (e) => {
    const card = e.target.closest('[data-id]');
    if (card) openModal(card.dataset.id);
  });

  closeBtn?.addEventListener('click', closeModal);

  backdrop?.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  // Art overlay interactions
  artOverlayClose?.addEventListener('click', closeArtOverlay);
  artOverlayBackdrop?.addEventListener('click', (e) => {
    if (e.target === artOverlayBackdrop) closeArtOverlay();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeArtOverlay();
    }
  });
}

// ── TAB SWITCHING ──
function initTabs() {
  const navLinks = document.querySelectorAll('.nav-link');
  const tabContents = document.querySelectorAll('.tab-content');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = link.dataset.tab;

      // Update active nav link
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Show/hide tab content
      tabContents.forEach(content => {
        content.style.display = 'none';
      });
      document.getElementById('tab-' + targetTab).style.display = 'block';
    });
  });
}

// ── CUSTOM COLOR CLASS FOR MODAL-CARD ──
// Color configuration - modify these values for each project
const CardColors = {
  primary: { bg: '#ffffff', title: '#595D62', text: '#2c2d2e' },
  doro: { bg: '#f0f5f7', title: '#757575', text: '#595D62' },
  dark: { bg: '#2c2d2e', title: '#ffffff', text: '#f0f5f7' },
  threadsp: { bg: '#f0e6ff', title: '#7a6fbe', text: '#595D62' },
  warm: { bg: '#fff5f0', title: '#c17a5f', text: '#595D62' },
  cool: { bg: '#f0f5ff', title: '#5f7ac1', text: '#595D62' },
  green: { bg: '#f0fff5', title: '#5fc17a', text: '#595D62' }
};

// Apply custom colors to a modal-card element
// Usage: applyCardColors(element, 'accent') or applyCardColors(element, customColorObject)
function applyCardColors(cardElement, colorKey) {
  if (!cardElement) return;

  let colors;
  if (typeof colorKey === 'string') {
    colors = CardColors[colorKey] || CardColors.secondary;
  } else {
    colors = colorKey; // Use custom object passed directly
  }

  cardElement.style.setProperty('--card-bg', colors.bg);
  cardElement.style.setProperty('--card-title-color', colors.title);
  cardElement.style.setProperty('--card-text-color', colors.text);
}

// Create a modal-card with custom colors
// Usage: createColoredCard({ title: 'Title', text: 'Description', image: 'url' }, 'accent')
function createColoredCard(data, colorKey = 'secondary') {
  const card = document.createElement('div');
  card.className = 'modal-card';

  // Apply colors
  applyCardColors(card, colorKey);

  // Build card content
  let cardContent = '';
  if (data.image) {
    cardContent += `<img src="${data.image}" alt="${data.title || ''}" loading="lazy" />`;
  }
  cardContent += '<div class="modal-card-content">';
  if (data.title) {
    cardContent += `<h4 class="modal-card-title">${data.title}</h4>`;
  }
  if (data.text) {
    cardContent += `<p class="modal-card-text">${data.text}</p>`;
  }
  if (data.items && Array.isArray(data.items)) {
    cardContent += `<ul class="modal-card-list">${data.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
  }
  cardContent += '</div>';

  card.innerHTML = cardContent;
  return card;
}

// ── THEME TOGGLE ──
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;

  // Check local storage for saved theme, default to dark
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });
}
