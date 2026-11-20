// Mobile menu toggle + publications list (filter by year / text search).
(function () {
  var IT = document.documentElement.lang === 'it';
  var BASE = IT ? '../' : '';   // Italian pages live in it/, shared files one level up
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  // News: full list on News tab, latest three on Home.
  var MONTHS = IT ? ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic']
                  : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  function newsHtml(items) {
    return items.map(function (n) {
      var d = n.date.split('-');
      var label = MONTHS[Number(d[1]) - 1] + ' ' + d[0];
      var title = (IT && n.title_it) ? n.title_it : n.title;
      var text = (IT && n.text_it !== undefined) ? n.text_it : n.text;
      var alt = (IT && n.alt_it) ? n.alt_it : n.alt;
      var body = '<h3>' + esc(title) + '</h3>' + (text ? '<p>' + text + '</p>' : '');
      if (n.image) {
        body = '<div class="news-body has-thumb"><img class="news-thumb" src="' + esc(BASE + n.image) + '" alt="' +
          esc(alt || '') + '"' + (n.width ? ' width="' + n.width + '"' : '') +
          (n.height ? ' height="' + n.height + '"' : '') + '><div>' + body + '</div></div>';
      } else {
        body = '<div>' + body + '</div>';
      }
      return '<div class="news-item"><time datetime="' + esc(n.date) + '">' + label + '</time>' + body + '</div>';
    }).join('');
  }
  if (window.NEWS) {
    var allNews = window.NEWS.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
    var newsList = document.getElementById('news-list');
    if (newsList) newsList.innerHTML = newsHtml(allNews);
    var homeNews = document.getElementById('home-news');
    if (homeNews) homeNews.innerHTML = newsHtml(allNews.slice(0, 3));
  }

  var list = document.getElementById('pub-list');
  if (!list || !window.PUBLICATIONS) return;

  var pubs = window.PUBLICATIONS.slice().sort(function (a, b) { return b.year - a.year; });
  var search = document.getElementById('pub-search');
  var yearBar = document.getElementById('pub-years');
  var counter = document.getElementById('pub-count');
  var activeYear = 'all';

  var years = [];
  pubs.forEach(function (p) { if (years.indexOf(p.year) < 0) years.push(p.year); });

  var sel = document.createElement('select');
  sel.setAttribute('aria-label', IT ? 'Filtra per anno' : 'Filter by year');
  var optAll = document.createElement('option');
  optAll.value = 'all';
  optAll.textContent = IT ? 'Tutti gli anni' : 'All years';
  sel.appendChild(optAll);
  years.forEach(function (y) {
    var o = document.createElement('option');
    o.value = String(y);
    o.textContent = String(y);
    sel.appendChild(o);
  });
  sel.addEventListener('change', function () {
    activeYear = sel.value === 'all' ? 'all' : Number(sel.value);
    render();
  });
  yearBar.appendChild(sel);

  function render() {
    var q = (search.value || '').toLowerCase().trim();
    var shown = pubs.filter(function (p) {
      if (activeYear !== 'all' && p.year !== activeYear) return false;
      if (!q) return true;
      return (p.title + ' ' + p.authors + ' ' + p.journal + ' ' + (p.tags || []).join(' '))
        .toLowerCase().indexOf(q) >= 0;
    });

    var html = '', lastYear = null;
    shown.forEach(function (p) {
      if (p.year !== lastYear) { html += '<h3 class="year">' + p.year + '</h3>'; lastYear = p.year; }
      html += '<div class="pub"><div class="t">' + esc(p.title) + '</div>' +
        '<div class="a">' + esc(p.authors) + '</div>' +
        '<div class="j">' + esc(p.journal) + '</div>' +
        '<div class="l">' +
        (p.doi ? '<a href="https://doi.org/' + esc(p.doi) + '">DOI</a>' : '') +
        (p.arxiv ? '<a href="https://arxiv.org/abs/' + esc(p.arxiv) + '">arXiv</a>' : '') +
        '</div></div>';
    });
    list.innerHTML = html || '<p>' + (IT ? 'Nessuna pubblicazione corrisponde.' : 'No publications match.') + '</p>';
    counter.textContent = shown.length + (IT ? ' di ' : ' of ') + pubs.length + (IT ? ' pubblicazioni' : ' publications');
  }

  search.addEventListener('input', render);
  render();
})();
