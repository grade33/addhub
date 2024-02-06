let tabGroups = document.querySelectorAll('._tabs-parent');

tabGroups.forEach((tabGroup) => {
  let tabs = tabGroup.querySelectorAll('._tab');
  let contents = tabGroup.querySelectorAll('.tab-content');
  let mobSelect = tabGroup.classList.contains('_mob-select');

  console.log(mobSelect);

  tabs.forEach((tab) => {
    tab.onclick = function () {
      let tabId = tab.getAttribute('data-tab');
      tabs.forEach((tab) => {
        tab.classList.remove('_active');
      });
      contents.forEach((content) => {
        content.classList.remove('_active');
      });
      tab.classList.add('_active');
      tabGroup.querySelector(`.${tabId}`).classList.add('_active');

      if (mobSelect) {
        setActiveTab();
        tabGroup.classList.remove('_open');
      }
    };
  });

  if (mobSelect) {
    let current = tabGroup.querySelector('.tabs-select__current');
    let toggle = tabGroup.querySelector('.tabs-select__show');
    let select = tabGroup.querySelector('.tabs-select');

    setActiveTab();
    function setActiveTab() {
      current.innerHTML = tabGroup.querySelector('._tab._active').innerHTML;
    }

    toggle.onclick = function () {
      tabGroup.classList.toggle('_open');
    };

    document.addEventListener('click', (e) => {
      const withinBoundaries = e.composedPath().includes(select);

      if (!withinBoundaries) {
        tabGroup.classList.remove('_open');
      }
    });
  }
});

let scrollTop = document.querySelector('.scroll-top');

if (scrollTop) {
  scrollTop.onclick = function () {
    window.scrollTo(0, 0);
  };
}

let ratingInputs = document.querySelectorAll('.rating-input');
ratingInputs.forEach((field) => {
  let fieldBtn = field.querySelectorAll('.rating-input__item');
  let input = field.querySelectorAll('.rating-input__field');

  fieldBtn.forEach((btn) => {
    btn.onclick = function () {
      let val = this.getAttribute('data-rating-value');
      field.setAttribute('data-total-rating', val);
      input.value = val;
    };
  });
});
