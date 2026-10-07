/* Measure the contact strip so it never covers the navigation. */
(function(){
 var bar=document.querySelector('.labcco-contact-bar');
 if(!bar)return;
 var nav=document.querySelector('header.navbar');
 function measure(){
  var root=document.documentElement;
  root.style.setProperty('--labcco-contact-height',Math.ceil(bar.getBoundingClientRect().height)+'px');
  if(nav)root.style.setProperty('--labcco-nav-height',Math.ceil(nav.getBoundingClientRect().height)+'px');
 }
 measure();
 if(window.ResizeObserver){var ro=new ResizeObserver(measure);ro.observe(bar);if(nav)ro.observe(nav);}
 window.addEventListener('resize',measure);
 if(document.fonts&&document.fonts.ready)document.fonts.ready.then(measure);
})();