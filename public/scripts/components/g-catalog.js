let checksGroups = document.querySelectorAll('.filter-group__checks');

if (checksGroups.length > 0) {
  checksGroups.forEach((group) => {
    let toggle = group.querySelector('.more-checks');
    if (toggle) {
      toggle.onclick = function () {
        group.classList.toggle('_show-all');
        setToggleBlocksHeight();
      };
    }
  });
}

let filterSliders = document.querySelectorAll('.filter-slider');

filterSliders.forEach((slider) => {
  const rangeSlider = slider.querySelector(`.range-slider`);
  const rangeInput0 = slider.querySelector(`.range-slider__input1`);
  const rangeInput1 = slider.querySelector(`.range-slider__input2`);
  const rangeOutput1 = slider.querySelector(`._output1`);
  const rangeOutput2 = slider.querySelector(`._output2`);
  const rangeInputs = [rangeInput0, rangeInput1];
  const rangeOutputs = [rangeOutput1, rangeOutput2];

  let startValue1 = +slider.getAttribute('data-start');
  let startValue2 = +slider.getAttribute('data-start2');
  let min = +slider.getAttribute('data-min');
  let max = +slider.getAttribute('data-max');

  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [startValue1, startValue2],
      connect: true,
      step: 1,
      range: {
        min: min,
        max: max,
      },
    });
  }
  if (rangeSlider) {
    rangeSlider.noUiSlider.on('update', function (values, handle) {
      rangeInputs[handle].value = Math.round(values[handle]);
      rangeOutputs[handle].innerHTML = Math.round(values[handle]);
    });
    rangeInputs.forEach((el, index) => {
      el.addEventListener('change', (e) => {
        setRangeSlider(index, e.currentTarget.value);
      });
    });
  }
  const setRangeSlider = (i, value) => {
    let array = [null, null];
    array[i] = value;

    rangeSlider.noUiSlider.set(array);
  };
});

let toggleFilter = document.querySelectorAll('._toggle-filter');
toggleFilter.forEach((btn) => {
  btn.onclick = function () {
    body.classList.toggle('open-filter');
    body.classList.toggle('fixed-body');
  };
});
