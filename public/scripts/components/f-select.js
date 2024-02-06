let selects = document.querySelectorAll('.m-select');

selects.forEach((select) => {
  let toggle = select.querySelector('.m-select__toggle');
  let current = select.querySelector('.m-select__current');

  toggle.onclick = function () {
    select.classList.toggle('_open');
  };

  document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(select);

    if (!withinBoundaries) {
      if (select.classList.contains('_open')) {
        closeDropdown();
      }
    }
  });

  function closeDropdown() {
    select.classList.remove('_open');
  }

  if (select.classList.contains('_multi-select')) {
    let checks = select.querySelectorAll('.m-check input');

    checks.forEach((check) => {
      check.onchange = function () {
        setCheckedValues();
      };
    });
    setCheckedValues();

    function setCheckedValues() {
      current.innerHTML = '';
      checks.forEach((check) => {
        let value = check.getAttribute('data-value');
        let id = check.getAttribute('data-id');
        if (check.checked) {
          let tag = `
                        <div class="m-select__tag">
                            <span>${value}</span>
                            <button data-id="${id}" class="m-select__tag-remove">
                                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.0544632 0.531312L0.594967 0L6 5.31312L5.4595 5.84443L0.0544632 0.531312Z" fill="#222222"/>
                                    <path d="M5.40503 0.155566L5.94554 0.686878L0.540503 6L0 5.46869L5.40503 0.155566Z" fill="#222222"/>
                                </svg>
                            </button>
                        </div>
                        `;

          current.innerHTML += tag;

          let tags = select.querySelectorAll('.m-select__tag');
          tags.forEach((tag) => {
            tag.onclick = function (e) {
              e.stopPropagation();
            };

            let btn = tag.querySelector('.m-select__tag-remove');
            btn.onclick = function () {
              let tagId = btn.getAttribute('data-id');
              let tagCheck = select.querySelector(
                `.m-check [data-id="${tagId}"]`,
              );
              tagCheck.checked = false;
              setCheckedValues();
            };
          });
        }
      });
    }

    return;
  }

  let input = select.querySelector('.m-select__field');
  let options = select.querySelectorAll('.m-select__option');

  options.forEach((option) => {
    setActiveVal(option);

    option.onclick = function () {
      options.forEach((option) => {
        option.classList.remove('_active');
      });
      this.classList.add('_active');
      setActiveVal(this);
      closeDropdown();
    };
  });

  function setActiveVal(option) {
    let activeOption = select.querySelector('.m-select__option._active');

    if (!activeOption) {
      let placeholder = select.getAttribute('data-placeholder');
      select.classList.add('_not-select');
      current.innerHTML = placeholder;
    }

    if (option.classList.contains('_active')) {
      let val = option.getAttribute('data-value');
      current.innerHTML = val;
      input.value = val;

      select.classList.remove('_not-select');
      let event = new Event('change', {
        bubbles: true,
        cancelable: true,
      });

      input.dispatchEvent(event);
    }
  }
});
