(() => {
  'use strict';
  const head = document.head;
  const ensureStylesheet = (href) => {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    head.appendChild(link);
  };
  ensureStylesheet('brand-tokens.css');
  ensureStylesheet('brand-fidelity.css');
  document.body.classList.add('kpmg-brand');

  const logoPath = 'assets/brand/kpmg-logo.svg';
  const role = 'Associate Director, Technology Innovation';
  const logo = (className = '') => {
    const img = document.createElement('img');
    img.src = logoPath;
    img.alt = 'KPMG';
    if (className) img.className = className;
    return img;
  };

  const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.href = logoPath;
  if (!favicon.parentNode) head.appendChild(favicon);

  const navBrand = document.querySelector('.site-nav .brand');
  if (navBrand) {
    navBrand.replaceChildren();
    navBrand.setAttribute('aria-label', 'KPMG Technology Innovation candidate vision by Russell Dudek');
    navBrand.appendChild(logo('kpmg-nav-logo'));
    const text = document.createElement('span');
    const strong = document.createElement('strong');
    strong.textContent = 'Candidate vision';
    const small = document.createElement('small');
    small.textContent = 'Technology Innovation · Russell Dudek';
    text.append(strong, small);
    navBrand.appendChild(text);
  }

  const lockupContent = (compact = false) => {
    const box = document.createElement('div');
    box.className = compact ? 'compact-company-lockup' : 'company-lockup';
    box.appendChild(logo());
    const text = document.createElement('div');
    const label = document.createElement('span');
    label.textContent = 'Candidate vision for';
    const title = document.createElement('strong');
    title.textContent = role;
    const byline = document.createElement('small');
    byline.textContent = 'Independent campaign by Russell Dudek';
    text.append(label, title, byline);
    box.appendChild(text);
    return box;
  };

  const heroCopy = document.querySelector('.hero-copy');
  if (heroCopy && !heroCopy.querySelector('.company-lockup')) {
    heroCopy.prepend(lockupContent(false));
  } else if (!heroCopy) {
    const main = document.querySelector('main');
    if (main && !main.querySelector('.compact-company-lockup') && !document.body.classList.contains('doc-body') && !document.body.classList.contains('report-body')) {
      main.prepend(lockupContent(true));
    }
  }

  const documentTargets = [
    ...document.querySelectorAll('.print-page'),
    ...document.querySelectorAll('.letter-page')
  ];
  if (!documentTargets.length) {
    const reportShell = document.querySelector('.report-body .brief-page > .shell');
    if (reportShell) documentTargets.push(reportShell);
  }
  documentTargets.forEach((target) => {
    if (target.querySelector(':scope > .document-brand-lockup')) return;
    const bar = document.createElement('div');
    bar.className = 'document-brand-lockup';
    bar.appendChild(logo());
    const text = document.createElement('div');
    const title = document.createElement('strong');
    title.textContent = `KPMG candidate campaign · ${role}`;
    const note = document.createElement('small');
    note.textContent = 'Independent work by Russell Dudek · Not an official KPMG publication';
    text.append(title, note);
    bar.appendChild(text);
    target.prepend(bar);
  });

  const footer = document.querySelector('.site-footer .shell');
  if (footer && !footer.querySelector('.independent-note')) {
    const note = document.createElement('span');
    note.className = 'independent-note';
    note.textContent = 'Independent candidate work · Not an official KPMG publication';
    footer.prepend(note);
  }
})();
