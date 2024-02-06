let toggleBlocks = document.querySelectorAll('.spoiler');
toggleBlocks.forEach((el, i) => {
  el.setAttribute('data-id', i + 1);
  let toggleElement = el.querySelector('.spoiler__toggle');
  let animatedBlock = el.querySelector('.spoiler__hidden');
  let contentBlock = el.querySelector('.spoiler__wrap');
  let contentBlockHeight = contentBlock.getBoundingClientRect().height;
  toggleElement.onclick = function () {
    if (el.classList.contains('_active')) {
      el.classList.remove('_active');
      animatedBlock.style.height = `0px`;
    } else {
      el.classList.add('_active');
      animatedBlock.style.height = `${contentBlockHeight}px`;
      setToggleBlocksHeight();
    }
  };
});

setToggleBlocksHeight();
window.onresize = function () {
  setToggleBlocksHeight();
};

function setToggleBlocksHeight() {
  let activeToggleBlocks = document.querySelectorAll('.spoiler._active');

  activeToggleBlocks.forEach((el) => {
    let animatedBlock = el.querySelector('.spoiler__hidden');
    let contentBlock = el.querySelector('.spoiler__wrap');
    let contentBlockHeight = contentBlock.getBoundingClientRect().height;
    animatedBlock.style.height = `${contentBlockHeight}px`;
  });
}
