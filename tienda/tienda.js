/* =====================================================================
   Tienda "Material Extra" + botón "Tutorial de instalación"
   Se carga en todas las pantallas de la app con:
     <link rel="stylesheet" href="/tienda/tienda.css">
     <div id="de-tienda"></div>            (sitio donde va; si falta, al final)
     <script src="/tienda/tienda.js" defer></script>
   Para cambiar productos, edita las listas de abajo.
   ===================================================================== */
(function () {
  'use strict';
  if (window.__deTiendaCargada) return;
  window.__deTiendaCargada = true;

  var BASE = '/tienda/';
  var IMG = BASE + 'img/';
  var STORE_BG = IMG + 'fondo-tienda.webp';
  var AMAZON_ICON = IMG + 'amazon.webp';
  var INSTALL_PDF_URL = BASE + 'instalacion/Tutorial-instalacion-Dharma-Eterno.pdf';

  /* --- Productos (mismos que en Japa-Móvil) --- */
  var musicItems = [
    { name: 'Cd Krishna Prema', img: IMG + 'CD-Krishna-Prema.webp', square: true, noFrame: true, player: 'krishna-prema' },
    { name: 'Rumi "Todo Amor"', img: IMG + 'IMG_3906.jpeg', square: true, noFrame: true, player: 'rumi-todo-amor' },
    { name: 'Rumi 2 "Versos de Luz"', img: IMG + 'IMG_3907.jpeg', square: true, noFrame: true, player: 'versos-de-luz' },
    { name: 'Rumi 3 "Sol de Tabriz"', img: IMG + 'CD-Sol-de-Tabriz.webp', link: 'https://cd-rumi-3.dharmaeterno.com/', square: true, noFrame: true },
    { name: 'Selección de Mantras', img: IMG + 'Seleccion-Mantras.webp', link: 'https://seleccion-mantras.dharmaeterno.com/', square: true, noFrame: true }
  ];

  var audiobooksItems = [
    { name: 'Dhammapada', img: IMG + 'IMG_3925.jpeg', square: true, noFrame: true, player: 'dhammapada' },
    { name: 'Cuentos espirituales', img: IMG + 'Audio-Cuentos-Espirituales.webp', link: 'https://cuentos-espirituales.dharmaeterno.com/', square: true, noFrame: true },
    { name: 'Tao te Ching', img: IMG + 'IMG_3904.png', square: true, noFrame: true, player: 'tao-te-ching' },
    { name: 'Mitos de la India', img: IMG + 'Audio-Mitos-India.webp', link: 'https://mitos-india.dharmaeterno.com/', square: true, noFrame: true },
    { name: 'Mitos de Egipto', img: IMG + 'Audio-Mitos-Egipto.webp', link: 'https://mitos-egipto.dharmaeterno.com/', square: true, noFrame: true },
    { name: 'Cuentos del mundo', img: IMG + 'Audio-Cuentos-Mundo.webp', link: 'https://cuentos-mundo.dharmaeterno.com/', square: true, noFrame: true },
    { name: 'El Principito', img: IMG + 'Audio-El-Principito.webp', link: 'https://el-principito.dharmaeterno.com/', square: true, noFrame: true },
    { name: 'Mitos Nórdicos', img: IMG + 'Audio-Mitos-Nordicos.webp', link: 'https://mitos-nordicos.dharmaeterno.com/', square: true, noFrame: true }
  ];

  var booksItems = [
    { name: 'Mantra Yoga', img: IMG + 'Mantras.webp', link: 'https://www.amazon.com/-/es/MANTRA-YOGA-Poder-Palabra-Spanish/dp/B09X4XDT96', amazon: true },
    { name: 'El yoga del corazón', img: IMG + 'IMG_3901.jpeg', link: 'https://www.amazon.es/dp/B0BYRKHQG6', amazon: true },
    { name: 'Mitos de India', img: IMG + 'IMG_3898-1.jpeg', link: 'https://www.amazon.es/dp/B0BNTZ2ZNR', amazon: true },
    { name: 'Ramayana', img: IMG + 'IMG_3899.jpeg', link: 'https://www.amazon.es/dp/B0BYRPWFJ3', amazon: true }
  ];

  var packsItems = [
    { name: 'Ganesha', img: IMG + 'Ganesha.webp', link: 'https://dharmaeterno-wbaa7e.subscribepage.io/' },
    { name: 'Lakshmi', img: IMG + 'Lakshmi.webp', link: 'https://dharmaeterno-osga2e.subscribepage.io/' },
    { name: 'Shiva', img: IMG + 'Shiva.webp', link: 'https://dharmaeterno-vjioxg.subscribepage.io/' },
    { name: 'Krishna', img: IMG + 'Krishna.webp', link: 'https://dharmaeterno-iu1jpe.subscribepage.io/' },
    { name: 'Durga', img: IMG + 'Durga.webp', link: 'https://dharmaeterno-n2t1up.subscribepage.io/' },
    { name: 'Hanuman', img: IMG + 'Hanuman.webp', link: 'https://dharmaeterno-bey52m.subscribepage.io/' },
    { name: 'Kali', img: IMG + 'Kali.webp', link: 'https://dharmaeterno-ec8pog.subscribepage.io/' },
    { name: 'Mantras sanadores', img: IMG + 'Mantras-Sanadores.webp', link: 'https://payhip.com/b/KqaUi' },
    { name: 'Anandamayi Ma', img: IMG + 'Anandamayi.jpeg', link: 'https://dharmaeterno-bsjf8o.subscribepage.io/' }
  ];

  /* --- Tutorial de instalación (páginas del PDF) --- */
  var I = BASE + 'instalacion/';
  var INSTALL_GUIDE = {
    ios: {
      note: 'En iPhone y iPad la instalación hay que hacerla desde Safari.',
      pages: [
        { img: I + 'ios-1.webp', alt: 'Paso 1: con la app abierta en Safari, pulsa el icono Compartir' },
        { img: I + 'ios-2.webp', alt: 'Paso 2: en el desplegable, pulsa Añadir a pantalla de inicio' },
        { img: I + 'ios-3.webp', alt: 'Paso 3: la app ya está instalada en tu pantalla' }
      ]
    },
    android: {
      note: '',
      pages: [
        { img: I + 'android-1.webp', alt: 'Paso 1: con la app abierta, pulsa los tres puntos del navegador' },
        { img: I + 'android-2.webp', alt: 'Paso 2: pulsa Agregar a pantalla principal' },
        { img: I + 'android-3.webp', alt: 'Paso 3: pulsa Instalar' },
        { img: I + 'android-4.webp', alt: 'Paso 4: por último, vuelve a pulsar Instalar' },
        { img: I + 'android-5.webp', alt: 'Paso 5: la app ya está instalada en tu pantalla' }
      ]
    }
  };

  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }

  function buildStoreGroupHTML(title, items, note) {
    var itemsHtml = items.map(function (it) {
      var imgClass = 'jp-store-img' + (it.square ? ' jp-store-img-square' : '') + (it.noFrame ? ' jp-store-img-noframe' : '');
      var amazonBadge = it.amazon ? '<img class="jp-store-amazon-icon" src="' + AMAZON_ICON + '" alt="Amazon" />' : '';
      var open = it.player
        ? '<button type="button" class="jp-store-item" data-player="' + it.player + '">'
        : '<a class="jp-store-item" href="' + it.link + '" target="_blank" rel="noopener">';
      var close = it.player ? '</button>' : '</a>';
      return open +
          '<div class="jp-store-img-wrap' + (it.square ? ' jp-store-img-wrap-square' : '') + '">' +
            '<img class="' + imgClass + '" src="' + it.img + '" alt="' + esc(it.name) + '" loading="lazy" />' +
          '</div>' +
          '<span class="jp-store-label">' + it.name + '</span>' + amazonBadge +
        close;
    }).join('');
    return (
      '<div class="jp-store-group">' +
        '<h3 class="jp-store-title">' + title + (note ? '<span class="jp-store-title-note">' + note + '</span>' : '') + '</h3>' +
        '<div class="jp-store-carousel">' + itemsHtml + '</div>' +
      '</div>'
    );
  }

  function buildHTML() {
    return (
      '<div class="de-tutorial-bar">' +
        '<button type="button" class="jp-btn-tutorial" id="jp-btn-tutorial"><span class="jp-btn-label">? TUTORIAL DE<br>INSTALACIÓN</span></button>' +
      '</div>' +
      '<section class="jp-store-section" aria-label="Material Extra" style="background-image:url(\'' + STORE_BG + '\');">' +
        '<div class="jp-store-overlay"></div>' +
        '<div class="jp-store-inner">' +
          '<h2 class="jp-store-main-title">Material Extra</h2>' +
          buildStoreGroupHTML('Música', musicItems, 'Escucha las muestras') +
          buildStoreGroupHTML('Audiolibros', audiobooksItems, 'Escucha las muestras') +
          buildStoreGroupHTML('Libros', booksItems) +
          buildStoreGroupHTML('Packs', packsItems) +
        '</div>' +
      '</section>'
    );
  }

  /* La tienda ocupa todo el ancho de la pantalla aunque la página tenga márgenes */
  function fitToEdges(mount) {
    var parent = mount.parentElement;
    if (!parent) return;
    var cs = getComputedStyle(parent);
    var pl = parseFloat(cs.paddingLeft) || 0;
    var pr = parseFloat(cs.paddingRight) || 0;
    var pb = parseFloat(cs.paddingBottom) || 0;
    if (cs.display.indexOf('flex') !== -1) {
      if (cs.flexDirection.indexOf('row') === 0) {
        parent.style.flexWrap = 'wrap';
        parent.style.alignContent = 'flex-start';
        mount.style.flex = '0 0 auto';
      }
      mount.style.alignSelf = 'stretch';
      mount.style.flexShrink = '0';
    }
    mount.style.width = 'calc(100% + ' + (pl + pr) + 'px)';
    mount.style.maxWidth = 'none';
    mount.style.marginLeft = (-pl) + 'px';
    mount.style.marginRight = (-pr) + 'px';
    mount.style.marginBottom = (-pb) + 'px';
    mount.style.marginTop = 'auto';
  }

  function slideCarousel(car, delta) {
    var start = car.scrollLeft;
    var target = Math.max(0, Math.min(car.scrollWidth - car.clientWidth, start + delta));
    var t0 = null, dur = 420;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var k = Math.min(1, (ts - t0) / dur);
      car.scrollLeft = start + (target - start) * (1 - Math.pow(1 - k, 3));
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function setupArrows(root) {
    root.querySelectorAll('.jp-store-carousel').forEach(function (car) {
      var wrap = document.createElement('div');
      wrap.className = 'jp-store-scroller';
      car.parentNode.insertBefore(wrap, car);
      wrap.appendChild(car);
      var prev = document.createElement('button');
      prev.type = 'button'; prev.className = 'jp-store-arrow jp-store-arrow-prev'; prev.setAttribute('aria-label', 'Anterior'); prev.innerHTML = '&#8249;';
      var next = document.createElement('button');
      next.type = 'button'; next.className = 'jp-store-arrow jp-store-arrow-next'; next.setAttribute('aria-label', 'Siguiente'); next.innerHTML = '&#8250;';
      wrap.appendChild(prev); wrap.appendChild(next);
      function upd() {
        prev.hidden = car.scrollLeft < 8;
        next.hidden = car.scrollLeft + car.clientWidth >= car.scrollWidth - 8;
      }
      prev.addEventListener('click', function () { slideCarousel(car, -Math.round(car.clientWidth * 0.8)); });
      next.addEventListener('click', function () { slideCarousel(car, Math.round(car.clientWidth * 0.8)); });
      car.addEventListener('scroll', upd, { passive: true });
      window.addEventListener('resize', upd);
      upd();
      setTimeout(upd, 600);
    });
  }

  /* --- Reproductor de muestras de los discos --- */
  function openDisc(key) {
    var overlay = document.createElement('div');
    overlay.className = 'jp-disc-modal';
    overlay.innerHTML =
      '<div class="jp-disc-modal-content">' +
        '<button type="button" class="jp-modal-close" aria-label="Cerrar"><span class="jp-modal-close-x">&times;</span> Cerrar</button>' +
        '<iframe title="Reproductor de muestras" src="' + BASE + 'discos/' + key + '.html"></iframe>' +
      '</div>';
    document.body.appendChild(overlay);
    pauseAppAudio();
    var prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    function close() {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
      overlay.remove();
    }
    function onKey(e) { if (e.key === 'Escape') close(); }
    overlay.addEventListener('click', function (ev) { if (ev.target === overlay) close(); });
    overlay.querySelector('.jp-modal-close').addEventListener('click', close);
    document.addEventListener('keydown', onKey);
  }

  /* Al abrir una muestra se pausa lo que esté sonando en la app, para que no se mezclen */
  function pauseAppAudio() {
    document.querySelectorAll('audio, video').forEach(function (m) { try { m.pause(); } catch (e) {} });
  }

  /* --- Ventana del tutorial de instalación --- */
  function detectOS() {
    var ua = navigator.userAgent || '';
    var iPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
    return (/iPhone|iPad|iPod/i.test(ua) || iPadOS) ? 'ios' : 'android';
  }

  function openTutorial() {
    var overlay = document.createElement('div');
    overlay.className = 'jp-help-modal';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Tutorial de instalación');
    overlay.innerHTML =
      '<div class="jp-help-panel">' +
        '<div class="jp-help-bar">' +
          '<button type="button" class="jp-help-btn jp-help-close"><span aria-hidden="true">&times;</span> Cerrar</button>' +
        '</div>' +
        '<div class="jp-help-scroll"></div>' +
      '</div>';
    document.body.appendChild(overlay);

    var prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    var body = overlay.querySelector('.jp-help-scroll');
    var closeBtn = overlay.querySelector('.jp-help-close');

    function show(os) {
      var data = INSTALL_GUIDE[os];
      var stepsHtml = data.pages.map(function (pg) {
        return '<figure class="jp-help-step"><img src="' + pg.img + '" alt="' + esc(pg.alt) + '" loading="lazy" decoding="async" /></figure>';
      }).join('');
      body.innerHTML =
        '<h2 class="jp-help-title">Tutorial de instalación</h2>' +
        '<p class="jp-help-sub">Pon la app en la pantalla de inicio de tu móvil o tablet. Elige tu dispositivo y sigue los pasos.</p>' +
        '<div class="jp-help-seg">' +
          '<button type="button" data-os="ios" aria-pressed="' + (os === 'ios') + '">iPhone / iPad</button>' +
          '<button type="button" data-os="android" aria-pressed="' + (os === 'android') + '">Android</button>' +
        '</div>' +
        (data.note ? '<p class="jp-help-note">' + data.note + '</p>' : '') +
        '<div class="jp-help-steps">' + stepsHtml + '</div>' +
        '<a class="jp-help-pdf" href="' + INSTALL_PDF_URL + '" target="_blank" rel="noopener">Descargar el PDF completo</a>';
      body.scrollTop = 0;
    }

    function close() {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      overlay.remove();
    }
    function onKey(e) { if (e.key === 'Escape') close(); }

    body.addEventListener('click', function (e) {
      var osBtn = e.target.closest('[data-os]');
      if (osBtn) show(osBtn.getAttribute('data-os'));
    });
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    document.addEventListener('keydown', onKey);

    show(detectOS());
    closeBtn.focus();
  }

  function init() {
    if (!document.querySelector('link[href*="family=Karla"]')) {
      var f = document.createElement('link');
      f.rel = 'stylesheet';
      f.href = 'https://fonts.googleapis.com/css2?family=Karla:wght@400;600;700;800&display=swap';
      document.head.appendChild(f);
    }
    var mount = document.getElementById('de-tienda');
    if (!mount) {
      mount = document.createElement('div');
      mount.id = 'de-tienda';
      document.body.appendChild(mount);
    }
    mount.className = (mount.className ? mount.className + ' ' : '') + 'de-tienda';
    mount.innerHTML = buildHTML();
    fitToEdges(mount);
    setupArrows(mount);

    mount.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-player]');
      if (btn) { e.preventDefault(); openDisc(btn.getAttribute('data-player')); return; }
      if (e.target.closest('#jp-btn-tutorial')) openTutorial();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
