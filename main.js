
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement, hdr = document.getElementById('hdr');
  var intro = document.getElementById('top'), zoom = document.getElementById('zoom'), rig = document.getElementById('rig');
  var dive = document.getElementById('dive'), introName = document.getElementById('introName'), hint = document.getElementById('hint');
  // The supplied mascot already has an open mouth in its artwork.
  // Zoom toward the center of that mouth, not the middle of the image.
  function clamp(v,a,b){ return Math.max(a, Math.min(b, v)); }
  function ss(a,b,v){ var t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); }
  var p = 0;
  function render(){
    var z = ss(.12, .86, p);
    if (z > 0){
      var rw = rig.offsetWidth, rh = rig.offsetHeight;
      // Mouth center in the tightly cropped supplied PNG.
      var fx = rw * .53, fy = rh * .57;
      var scale = 1 + Math.pow(z, 2.1) * 85;
      zoom.style.transformOrigin = fx.toFixed(1) + 'px ' + fy.toFixed(1) + 'px';
      zoom.style.transform = 'translate(' + ((rw/2-fx)*z).toFixed(1) + 'px,' + ((rh/2-fy)*z).toFixed(1) + 'px) scale(' + scale.toFixed(3) + ')';
    } else { zoom.style.transform = ''; }
    dive.style.opacity = ss(.83, .96, p).toFixed(3);
    var f = 1 - ss(0, .14, p);
    introName.style.opacity = f.toFixed(3); introName.style.transform = 'translateY(' + ((1 - f) * 40).toFixed(1) + 'px)';
    hint.style.opacity = (f * .8).toFixed(3);
    hdr.classList.toggle('solid', p > .62 || intro.getBoundingClientRect().bottom <= hdr.offsetHeight + 2);
  }

  function onScroll(){
    var r = intro.getBoundingClientRect(), total = intro.offsetHeight - window.innerHeight;
    p = reduce ? 0 : clamp(-r.top / Math.max(total, 1), 0, 1);

  }

  function loop(){ render(); requestAnimationFrame(loop); }

  /* menu */
  var menu = document.getElementById('menu'), openB = document.getElementById('menuOpen'), closeB = document.getElementById('menuClose');
  function setMenu(on){ menu.hidden = !on; openB.setAttribute('aria-expanded', on); document.body.style.overflow = on ? 'hidden' : ''; (on ? closeB : openB).focus(); }
  openB.addEventListener('click', function(){ setMenu(true); });
  closeB.addEventListener('click', function(){ setMenu(false); });
  menu.querySelectorAll('nav a').forEach(function(a){ a.addEventListener('click', function(){ setMenu(false); }); });

  /* face follows the pointer a little */
  if (!reduce && window.matchMedia('(pointer: fine)').matches){
    intro.addEventListener('pointermove', function(e){
      var x = e.clientX / window.innerWidth - .5, y = e.clientY / window.innerHeight - .5;
      rig.style.transform = 'rotate(' + (x * 5).toFixed(2) + 'deg) translate(' + (x * 14).toFixed(1) + 'px,' + (y * 10).toFixed(1) + 'px)';
    });
    intro.addEventListener('pointerleave', function(){ rig.style.transform = ''; });
  }

  /* works: filter, show more, lightbox */
  var fbtns = Array.prototype.slice.call(document.querySelectorAll('.filters button'));
  var items = Array.prototype.slice.call(document.querySelectorAll('#grid .work'));
  var moreRow = document.getElementById('moreRow'), LIMIT = 12, expanded = false, cur = 'all';
  function apply(anim){
    var shown = 0;
    items.forEach(function(it){
      var on = cur === 'all' || it.dataset.cat === cur || it.dataset.group === cur;
      if (on && cur === 'all' && !expanded && shown >= LIMIT) on = false;
      if (on) shown++;
      it.hidden = !on; it.classList.remove('pre');
      if (on && anim && !reduce){ it.classList.remove('show'); void it.offsetWidth; it.classList.add('show'); }
    });
    moreRow.hidden = !(cur === 'all' && !expanded);
    layout();
    fbtns.forEach(function(b){ b.setAttribute('aria-pressed', b.dataset.f === cur); });
  }
  var grid = document.getElementById('grid'), ncols = 0;
  function layout(){
    var n = window.innerWidth < 560 ? 1 : (window.innerWidth < 900 ? 2 : 3);
    var cols = [], hs = [], i;
    grid.textContent = '';
    for (i = 0; i < n; i++){ var c = document.createElement('div'); c.className = 'mcol'; grid.appendChild(c); cols.push(c); hs.push(0); }
    var list = items.slice();
    if (cur !== 'all') list.sort(function(x, y){ return (+x.dataset.i) - (+y.dataset.i); });
    list.forEach(function(it){
      if (it.hidden){ cols[n - 1].appendChild(it); return; }
      var im = it.querySelector('img'), r = (+im.getAttribute('height') || 1) / (+im.getAttribute('width') || 1);
      var k = 0; for (i = 1; i < n; i++){ if (hs[i] < hs[k] - .05) k = i; }
      cols[k].appendChild(it); hs[k] += r + .28;
    });
    ncols = n;
  }
  window.addEventListener('resize', function(){
    var n = window.innerWidth < 560 ? 1 : (window.innerWidth < 900 ? 2 : 3);
    if (n !== ncols) layout();
  });
  fbtns.forEach(function(b){ b.addEventListener('click', function(){ cur = b.dataset.f; apply(true); }); });
  document.getElementById('moreBtn').addEventListener('click', function(){ expanded = true; apply(true); });
  document.querySelectorAll('[data-go]').forEach(function(b){ b.addEventListener('click', function(){ cur = b.dataset.go; apply(true); document.getElementById('works').scrollIntoView({behavior: reduce ? 'auto' : 'smooth'}); }); });
  apply(false);

  var lb = document.getElementById('lb'), lbImg = document.getElementById('lbImg'), lbT = document.getElementById('lbTitle'), lbS = document.getElementById('lbSub'), lbD = document.getElementById('lbDesc'), lbN = document.getElementById('lbN'), slides = [], li = 0, lastFocus = null;
  function build(){
    slides = [];
    items.filter(function(it){ return !it.hidden; }).forEach(function(it){
      var imgs = it.querySelectorAll('img');
      imgs.forEach(function(im, k){ slides.push({it: it, im: im, k: k, n: imgs.length}); });
    });
  }
  function openLb(it){
    build(); li = 0;
    for (var x = 0; x < slides.length; x++){ if (slides[x].it === it){ li = x; break; } }
    show(); lastFocus = it; lb.hidden = false; document.body.style.overflow = 'hidden'; document.getElementById('lbClose').focus();
  }
  function show(){
    var sl = slides[li], it = sl.it;
    lbImg.src = sl.im.src; lbImg.alt = sl.im.alt;
    lbT.textContent = it.dataset.title; lbS.textContent = it.dataset.sub; lbD.textContent = it.dataset.desc || '';
    lbN.textContent = sl.n > 1 ? 'PHOTO ' + (sl.k + 1) + ' OF ' + sl.n : '';
  }
  function step(d){ li = (li + d + slides.length) % slides.length; show(); }
  function closeLb(){ lb.hidden = true; document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
  items.forEach(function(it){ it.addEventListener('click', function(){ openLb(it); }); });
  document.getElementById('lbClose').addEventListener('click', closeLb);
  document.getElementById('lbPrev').addEventListener('click', function(){ step(-1); });
  document.getElementById('lbNext').addEventListener('click', function(){ step(1); });
  lb.addEventListener('click', function(e){ if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', function(e){
    if (!lb.hidden){ if (e.key === 'Escape') closeLb(); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1); }
    else if (!menu.hidden && e.key === 'Escape') setMenu(false);
  });

  /* reveal + counters */
  function countUp(el){
    var end = +el.dataset.count, suf = el.dataset.suffix || '', s0 = null;
    function st(t){ if (!s0) s0 = t; var k = Math.min((t - s0) / 1300, 1); k = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(end * k) + suf; if (k < 1) requestAnimationFrame(st); }
    requestAnimationFrame(st);
  }
  var peek = document.getElementById('peek');
  if (!reduce && 'IntersectionObserver' in window){
    var vh = window.innerHeight;
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){
        if (!e.isIntersecting) return;
        var el = e.target;
        if (el.classList.contains('pre')){ el.classList.add('rin'); el.classList.remove('pre'); }
        el.querySelectorAll('[data-count]').forEach(countUp);
        io.unobserve(el);
      });
    }, {threshold: .12});
    document.querySelectorAll('[data-reveal]').forEach(function(el){
      if (el.getBoundingClientRect().top > vh * .92){
        el.classList.add('pre');
        el.querySelectorAll('[data-count]').forEach(function(c){ c.textContent = '0'; });
        io.observe(el);
      }
    });
    new IntersectionObserver(function(es){ es.forEach(function(e){ peek.classList.toggle('up', e.isIntersecting); }); }, {threshold: .3}).observe(document.getElementById('sign'));
  } else { peek.classList.add('up'); }

  /* stacking cards */
  var cards = Array.prototype.slice.call(document.querySelectorAll('.scard'));
  var stackOn = window.matchMedia('(min-width: 781px)');
  function stack(){
    if (reduce) return;
    cards.forEach(function(c, i){
      var next = cards[i + 1];
      if (!next || !stackOn.matches){ c.style.setProperty('--s', 1); return; }
      var a = c.getBoundingClientRect(), b = next.getBoundingClientRect();
      c.style.setProperty('--s', (1 - clamp((a.bottom - b.top) / a.height, 0, 1) * .06).toFixed(4));
    });
  }
  window.addEventListener('scroll', function(){ onScroll(); stack(); }, {passive:true});
  window.addEventListener('resize', function(){ onScroll(); stack(); });
  onScroll(); stack(); render(); requestAnimationFrame(loop);

  /* copy email */
  var copyBtn = document.getElementById('copy'), msg = document.getElementById('copied'), mail = document.getElementById('email');
  copyBtn.addEventListener('click', function(){
    var done = function(){ msg.textContent = 'Copied!'; setTimeout(function(){ msg.textContent = ''; }, 2000); };
    var fallback = function(){ var s = window.getSelection(), r = document.createRange(); r.selectNodeContents(mail); s.removeAllRanges(); s.addRange(r); msg.textContent = 'Selected. Press Ctrl+C to copy'; };
    try { navigator.clipboard.writeText(mail.textContent.trim()).then(done, fallback); } catch(e){ fallback(); }
  });
})();
