let favouriteButtons = document.querySelectorAll(
  '.favourite-btn,.favourite-btn2',
);
favouriteButtons.forEach((btn) => {
  btn.onclick = function () {
    this.classList.toggle('_added');
  };
});
