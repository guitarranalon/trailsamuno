function debounce(fn, delay = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

export function initScrollHeader() {
    const header = document.querySelector('#header');
    if (!header) return;
  
    const onScroll = debounce(() => {
      header.classList.toggle('is-scrolled', window.scrollY > 0);
    }, 100);
  
    window.addEventListener('scroll', onScroll);
  }
