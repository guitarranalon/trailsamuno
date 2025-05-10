function throttle(fn, limit = 100) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

export function initScrollHeader() {
  const header = document.querySelector('#header');
  if (!header) return;

  const onScroll = throttle(() => {
    header.classList.toggle('is-scrolled', window.scrollY > 100);
  }, 100);

  window.addEventListener('scroll', onScroll);

  onScroll();
  addScrollUpEndListener();
}

export function addScrollUpEndListener() {
window.addEventListener('scrollUpEnd', () => {
    const header = document.querySelector('#header');
    if (header) {
        header.classList.toggle('is-scrolled', window.scrollY > 100);
    }
});  
}