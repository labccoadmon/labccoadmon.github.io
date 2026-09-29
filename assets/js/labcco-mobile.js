/* Extend existing menu handlers without replacing links or analytics. */
(function () {
  var nav = document.getElementById('navLinks') || document.querySelector('header.navbar .nav-links');
  if (!nav) return;
  var button = document.getElementById('menuToggle');
  if (!button) {
    nav.id = 'navLinks';
    button = document.createElement('button');
    button.id = 'menuToggle';
    button.type = 'button';
    button.className = 'mobile-menu-button';
    button.textContent = 'Menú';
    nav.before(button);
    button.addEventListener('click', function () {
      nav.classList.toggle('active');
      button.classList.toggle('active', nav.classList.contains('active'));
      document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
  }
  var mobile = window.matchMedia('(max-width:900px)');
  button.setAttribute('aria-controls', nav.id);
  function sync() {
    var open = nav.classList.contains('active');
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    nav.inert = mobile.matches && !open;
  }
  function close(restoreFocus) {
    nav.classList.remove('active');
    button.classList.remove('active');
    document.body.style.overflow = '';
    sync();
    if (restoreFocus) button.focus();
  }
  new MutationObserver(sync).observe(nav, {attributes:true, attributeFilter:['class']});
  document.addEventListener('keydown', function (event) {
    if (!mobile.matches || !nav.classList.contains('active')) return;
    if (event.key === 'Escape') { close(true); return; }
    if (event.key === 'Tab') {
      var items = [button].concat(Array.from(nav.querySelectorAll('a[href],button:not([disabled])')));
      var first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  nav.addEventListener('click', function (event) { if (event.target.closest('a')) close(false); });
  document.addEventListener('click', function (event) {
    if (mobile.matches && nav.classList.contains('active') && !nav.contains(event.target) && !button.contains(event.target)) close(false);
  });
  mobile.addEventListener('change', function () { close(false); });
  sync();
})();
