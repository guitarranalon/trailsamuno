export function initScrollHeader() {
  const header = document.querySelector('#header');
  if (!header) return;

  let ticking = false;

  function updateHeader() {
    if (window.scrollY > 100) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll);

  updateHeader();

  addScrollUpEndListener();
}

export function addScrollUpEndListener() {
  window.addEventListener('scrollUpEnd', () => {
    const header = document.querySelector('#header');
    if (header) {
      if (window.scrollY > 100) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }
  });
}
