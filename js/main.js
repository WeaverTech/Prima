// Salon Kosmetyczny Wioletta Wódkowska-Tkacz — main.js

(function () {
  'use strict';

  var SALON_PHONE = '+48606725444';

  /* ---------- Menu mobilne ---------- */
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', function () {
    var open = mainNav.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  mainNav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      mainNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---------- Zakładki cennika ---------- */
  var tabs = document.querySelectorAll('.price-tab');
  var panels = document.querySelectorAll('.price-panel');

  function activateTab(name) {
    tabs.forEach(function (t) {
      var active = t.dataset.tab === name;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    panels.forEach(function (p) {
      p.classList.toggle('active', p.id === 'panel-' + name);
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      activateTab(tab.dataset.tab);
    });
  });

  // Linki "Zobacz cennik" z kart usług otwierają właściwą zakładkę
  document.querySelectorAll('.service-link[data-tab]').forEach(function (link) {
    link.addEventListener('click', function () {
      activateTab(link.dataset.tab);
    });
  });

  /* ---------- Lightbox galerii ---------- */
  var items = Array.prototype.slice.call(document.querySelectorAll('.gallery-item'));
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var current = 0;

  function showImage(index) {
    current = (index + items.length) % items.length;
    var item = items[current];
    lightboxImg.src = item.getAttribute('href');
    lightboxImg.alt = item.querySelector('img').alt;
    lightboxCaption.textContent = item.dataset.caption || '';
  }

  function openLightbox(index) {
    showImage(index);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  items.forEach(function (item, i) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      openLightbox(i);
    });
  });

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', function () { showImage(current - 1); });
  document.getElementById('lightboxNext').addEventListener('click', function () { showImage(current + 1); });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(current - 1);
    if (e.key === 'ArrowRight') showImage(current + 1);
  });

  /* ---------- Formularz "Umów wizytę SMS-em" ----------
     Buduje gotową wiadomość i otwiera aplikację SMS na telefonie
     klientki (sms:), więc wiadomość trafia prosto na telefon salonu
     bez żadnego backendu ani kosztów bramki SMS. */
  var form = document.getElementById('smsForm');
  var status = document.getElementById('formStatus');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = form.name.value.trim();
    var service = form.service.value;
    var date = form.date.value.trim();
    var message = form.message.value.trim();

    if (!name || !service) {
      status.textContent = 'Uzupełnij proszę imię i wybierz usługę.';
      return;
    }

    var body = 'Dzień dobry, chciałabym umówić wizytę.\n'
      + 'Imię: ' + name + '\n'
      + 'Usługa: ' + service
      + (date ? '\nPreferowany termin: ' + date : '')
      + (message ? '\nInformacje: ' + message : '');

    var smsHref = 'sms:' + SALON_PHONE + '?&body=' + encodeURIComponent(body);

    status.textContent = 'Otwieramy aplikację SMS z gotową wiadomością — kliknij „wyślij”.';
    window.location.href = smsHref;
  });

  /* ---------- Rok w stopce ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
