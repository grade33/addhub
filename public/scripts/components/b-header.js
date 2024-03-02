let burger = document.querySelector('.burger');
let body = document.querySelector('body');
let header = document.querySelector('.header');
let toggleSearchButtons = document.querySelectorAll('._toggle-search');

if (header) {
  burger.onclick = function () {
    console.log(3)
    body.classList.toggle('_open-menu');
    body.classList.toggle('fixed-body');
  };

  document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(header);

    if (!withinBoundaries) {
      header.classList.remove('_open');
      body.classList.remove('fixed-body');
    }
  });
}

toggleSearchButtons.forEach((el) => {
  if (el) {
    el.onclick = () => {
      body.classList.toggle('_open-search');
      body.classList.toggle('fixed-body');
    };
  }
});
