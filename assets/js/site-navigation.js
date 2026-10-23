/* Accessible menu interactions for Dr. Yasir Javed's portfolio */
(() => {
  const header = document.querySelector('header.site-header');
  if (!header) return;
  const toggle = header.querySelector('.nav-toggle');
  const nav = header.querySelector('#primary-nav');
  const groups = [...header.querySelectorAll('.nav-group')];
  if (!toggle || !nav) return;
  const mobile = () => window.matchMedia('(max-width: 980px)').matches;
  const closeGroups = (except) => groups.forEach(group => {
    if (group !== except) group.open = false;
  });
  const setMenu = (open) => {
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    toggle.querySelector('.nav-toggle-label').textContent = open ? 'Close' : 'Menu';
    if (!open) closeGroups();
  };
  toggle.addEventListener('click', () => setMenu(!header.classList.contains('menu-open')));
  groups.forEach(group => group.addEventListener('toggle', () => {
    if (group.open) closeGroups(group);
  }));
  document.addEventListener('pointerdown', event => {
    if (!header.contains(event.target)) {
      closeGroups();
      if (mobile()) setMenu(false);
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const wasOpen = header.classList.contains('menu-open') || groups.some(group => group.open);
    closeGroups();
    if (mobile()) setMenu(false);
    if (wasOpen) {
      event.preventDefault();
      if (mobile()) toggle.focus();
    }
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    if (mobile()) setMenu(false);
    else closeGroups();
  }));
  window.addEventListener('resize', () => {
    if (!mobile() && header.classList.contains('menu-open')) setMenu(false);
  });
  // The logo serves as the Home link; show visitors which page is selected.
  const pathname = location.pathname.split('/').pop() || 'index.html';
  const groupForPage = {
    'research.html': 'research',
    'publications.html': 'research',
    'research-achievements.html': 'research',
    'services.html': 'expertise',
    'java.html': 'teaching',
    'java-ksa.html': 'teaching',
    'achievements.html': 'leadership'
  };
  nav.querySelectorAll('a[data-page]').forEach(link => {
    if (link.dataset.page === pathname) link.setAttribute('aria-current', 'page');
  });
  const matchingGroup = groupForPage[pathname];
  if (matchingGroup) nav.querySelector('.nav-group[data-group="' + matchingGroup + '"]')?.classList.add('is-current');
})();
