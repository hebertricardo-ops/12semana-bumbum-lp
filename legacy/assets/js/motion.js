/* Motion — 12 Planilhas Bumbum 30+
   Um momento autoral: a rolagem é o programa de 12 semanas.
   Progressive enhancement — sem JS a página já está legível e completa. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var gsap = window.gsap;
  var ST = window.ScrollTrigger;

  var PHASE_NAME = { 1: 'Fundação', 2: 'Estímulo', 3: 'Intensificação', 4: 'Progressão' };

  var railM = document.getElementById('railM');
  var railMPhase = document.getElementById('railMPhase');
  var railMWeek = document.getElementById('railMWeek');
  var railItems = document.querySelectorAll('[data-rail-phase]');
  var railDesk = document.getElementById('rail');
  var weekEl = document.getElementById('railWeek');

  var dock = document.getElementById('dock');
  var firstPrice = document.getElementById('preco');
  var pricings = document.querySelectorAll('.pricing');
  var lastPrice = pricings[pricings.length - 1];

  function setInert(el, on) {
    if (!el) return;
    if ('inert' in el) el.inert = on;
    el.setAttribute('aria-hidden', on ? 'true' : 'false');
  }

  function paintPhase(p) {
    var v = 'var(--color-fase-' + p + ')';
    railItems.forEach(function (li) {
      li.classList.toggle('is-live', li.dataset.railPhase === String(p));
    });
    if (railDesk) railDesk.style.setProperty('--phase', v);
    if (railM) {
      railM.style.setProperty('--phase', v);
      if (railMPhase) railMPhase.textContent = PHASE_NAME[p];
    }
  }

  function paintWeek(n) {
    var t = n < 10 ? '0' + n : String(n);
    if (weekEl) weekEl.textContent = t;
    if (railMWeek) railMWeek.textContent = t;
  }

  /* ---------------------------------------------------------------
     Sem animação, a orientação e a ação continuam existindo.
     prefers-reduced-motion pede menos movimento, não menos função.
     --------------------------------------------------------------- */
  function staticFallback() {
    document.querySelectorAll('[data-reveal]').forEach(function (n) { n.classList.add('is-in'); });
    setInert(dock, true);

    var secs = [].slice.call(document.querySelectorAll('[data-phase]'));

    function sync() {
      var doc = document.documentElement;
      var max = Math.max(1, doc.scrollHeight - doc.clientHeight);
      var prog = Math.min(1, Math.max(0, doc.scrollTop / max));
      var mid = doc.scrollTop + doc.clientHeight * 0.5;

      var ph = 1;
      secs.forEach(function (s) { if (s.offsetTop <= mid) ph = s.dataset.phase; });
      paintPhase(ph);
      paintWeek(Math.max(1, Math.min(12, Math.round(1 + prog * 11))));
      if (railM) railM.style.setProperty('--prog', Math.max(0.02, prog).toFixed(4));

      if (dock && firstPrice) {
        var seen = doc.scrollTop + doc.clientHeight > firstPrice.offsetTop + firstPrice.offsetHeight;
        /* Só some enquanto a seção final está REALMENTE na tela — ela já tem
           os próprios botões. Depois de passar por ela, a barra volta. */
        var atEnd = false;
        if (lastPrice && lastPrice !== firstPrice) {
          var r = lastPrice.getBoundingClientRect();
          atEnd = r.top < doc.clientHeight * 0.92 && r.bottom > 0;
        }
        var up = seen && !atEnd;
        dock.classList.toggle('is-up', up);
        setInert(dock, !up);
      }
    }
    addEventListener('scroll', sync, { passive: true });
    addEventListener('resize', sync);
    sync();
  }

  if (reduced.matches || !gsap || !ST) { staticFallback(); return; }
  gsap.registerPlugin(ST);

  var EASE = 'expo.out';

  /* ---------------------------------------------------------------
     1 · HERO — a headline sobe por dentro da máscara, linha a linha
     --------------------------------------------------------------- */
  var lines = document.querySelectorAll('.hero-title .line > span');
  if (lines.length) {
    gsap.set(lines, { yPercent: 108 });
    gsap.to(lines, { yPercent: 0, duration: 1.15, ease: EASE, stagger: 0.085, delay: 0.12 });
  }

  var heroBits = document.querySelectorAll('.hero-copy [data-reveal], .hero-diff-wrap [data-reveal]');
  if (heroBits.length) {
    gsap.set(heroBits, { opacity: 0, y: 18 });
    gsap.to(heroBits, { opacity: 1, y: 0, duration: 0.9, ease: EASE, stagger: 0.09, delay: 0.5 });
  }

  var mock = document.querySelector('.hero-mockup');
  if (mock) {
    gsap.fromTo(mock,
      { opacity: 0, y: 40, rotateX: 12, scale: 0.94 },
      { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 1.5, ease: EASE, delay: 0.3 });
  }

  /* ---------------------------------------------------------------
     2 · MÁSCARAS — a foto revela por wipe, com parallax por dentro
     --------------------------------------------------------------- */
  document.querySelectorAll('[data-mask]').forEach(function (plate) {
    var img = plate.querySelector('img');
    if (!img) return;

    gsap.set(plate, { clipPath: 'inset(0% 0% 100% 0%)' });
    /* A escala precisa cobrir todo o curso do parallax, senão o fundo da
       moldura aparece nas bordas. Curso de 10% exige folga maior que 10%. */
    gsap.set(img, { scale: 1.16, yPercent: -5 });

    gsap.to(plate, {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.25, ease: EASE,
      scrollTrigger: { trigger: plate, start: 'top 86%' }
    });

    gsap.to(img, {
      yPercent: 5, ease: 'none',
      scrollTrigger: { trigger: plate, start: 'top bottom', end: 'bottom top', scrub: 0.8 }
    });
  });

  /* ---------------------------------------------------------------
     3 · CONTEÚDO — entrada discreta
     --------------------------------------------------------------- */
  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    if (el.closest('.hero-copy') || el.closest('.hero-diff-wrap')) return;
    gsap.fromTo(el,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.85, ease: EASE,
        scrollTrigger: { trigger: el, start: 'top 90%' } });
  });

  /* As falas da dobra 3 chegam em cascata, como uma lista sendo lida */
  if (document.querySelector('.thoughts')) {
    gsap.from('.thoughts li', {
      opacity: 0, x: -14, duration: 0.7, ease: EASE, stagger: 0.07,
      scrollTrigger: { trigger: '.thoughts', start: 'top 82%' }
    });
  }

  /* ---------------------------------------------------------------
     4 · TERMÔMETRO DE FASE — a barra cresce e a cor esquenta
     --------------------------------------------------------------- */
  document.querySelectorAll('.phase').forEach(function (ph, i) {
    var bar = ph.querySelector('.phase-bar');
    if (!bar) return;
    gsap.fromTo(bar, { scaleX: 0 },
      { scaleX: 1, duration: 1.1, ease: EASE, delay: i * 0.08,
        scrollTrigger: { trigger: '.phases', start: 'top 78%' } });
  });

  /* ---------------------------------------------------------------
     5 · TRILHA — fase e semana acompanham a rolagem
     --------------------------------------------------------------- */
  document.querySelectorAll('[data-phase]').forEach(function (sec) {
    ST.create({
      trigger: sec, start: 'top 55%', end: 'bottom 55%',
      onToggle: function (self) { if (self.isActive) paintPhase(sec.dataset.phase); }
    });
  });
  paintPhase(1);

  var counter = { v: 1 };
  gsap.to(counter, {
    v: 12, ease: 'none',
    scrollTrigger: {
      trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.5,
      onUpdate: function (self) {
        if (railM) railM.style.setProperty('--prog', Math.max(0.02, self.progress).toFixed(4));
      }
    },
    onUpdate: function () { paintWeek(Math.max(1, Math.min(12, Math.round(counter.v)))); }
  });

  /* ---------------------------------------------------------------
     6 · TILT 3D — o mockup responde ao ponteiro, com contenção
     --------------------------------------------------------------- */
  var tiltHost = document.querySelector('[data-tilt]');
  var tiltInner = tiltHost && tiltHost.querySelector('.tilt-inner');

  if (tiltInner && window.matchMedia('(pointer: fine)').matches) {
    var rx = gsap.quickTo(tiltInner, 'rotateX', { duration: 0.7, ease: 'power3.out' });
    var ry = gsap.quickTo(tiltInner, 'rotateY', { duration: 0.7, ease: 'power3.out' });
    tiltHost.addEventListener('pointermove', function (e) {
      var b = tiltHost.getBoundingClientRect();
      rx(-((e.clientY - b.top) / b.height - 0.5) * 7);
      ry(((e.clientX - b.left) / b.width - 0.5) * 9);
    });
    tiltHost.addEventListener('pointerleave', function () { rx(0); ry(0); });
  }

  if (tiltInner) {
    gsap.fromTo(tiltInner, { rotateX: 4 },
      { rotateX: -4, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
  }

  /* ---------------------------------------------------------------
     7 · ANCORAGEM — o total sobe até R$494
     --------------------------------------------------------------- */
  var totalEl = document.getElementById('anchorTotal');
  if (totalEl) {
    var t = { v: 0 };
    gsap.to(t, {
      v: 494, duration: 1.4, ease: EASE,
      scrollTrigger: { trigger: totalEl, start: 'top 92%' },
      onUpdate: function () { totalEl.textContent = 'R$' + Math.round(t.v); }
    });
  }

  /* ---------------------------------------------------------------
     8 · BARRA DE AÇÃO — nunca antes de o preço ter sido mostrado,
         e escondida dentro da seção final, que já tem os botões.
     --------------------------------------------------------------- */
  if (dock && firstPrice) {
    setInert(dock, true);
    var seenPrice = false;
    var atFinalPrice = false;

    var applyDock = function () {
      var up = seenPrice && !atFinalPrice;
      dock.classList.toggle('is-up', up);
      setInert(dock, !up);
    };

    ST.create({
      trigger: firstPrice, start: 'bottom 85%',
      onEnter: function () { seenPrice = true; applyDock(); },
      onLeaveBack: function () { seenPrice = false; applyDock(); }
    });

    if (lastPrice && lastPrice !== firstPrice) {
      ST.create({
        trigger: lastPrice, start: 'top 92%', end: 'bottom top',
        onToggle: function (self) { atFinalPrice = self.isActive; applyDock(); }
      });
    }
    applyDock();
  }

  /* Se as fontes chegarem depois, as medidas mudam: recalcular uma vez. */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { ST.refresh(); });
  }
})();
