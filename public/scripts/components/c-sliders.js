function Sliders() {
  let SlidersArray = [];

  let sliders = document.querySelectorAll('.slider');
  sliders.forEach((slider, index) => {
    slider.setAttribute('data-slider-id', index);

    SlidersArray[index] = new Swiper(
      `.slider[data-slider-id="${index}"] .swiper-container`,
      {
        slidesPerView: 'auto',
        spaceBetween: 0,
        watchSlidesProgress: true,
        preventClicks: true,
        a11y: false,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,

        navigation: {
          nextEl: `.slider[data-slider-id="${index}"] .swiper-button-next`,
          prevEl: `.slider[data-slider-id="${index}"] .swiper-button-prev`,
        },
        pagination: {
          el: `.slider[data-slider-id="${index}"] .swiper-pagination`,
          type: 'bullets',
          clickable: true,
        },
      },
    );
  });
}

function productSliders() {
  let SlidersArray = [];

  let sliders = document.querySelectorAll('.product-slider');
  sliders.forEach((slider, index) => {
    slider.setAttribute('data-slider-id', index);

    SlidersArray[index] = new Swiper(
      `.product-slider[data-slider-id="${index}"] .product-slider__container`,
      {
        wrapperClass: 'product-slider__wrapper',
        slideClass: 'product-slider__slide',
        slidesPerView: 'auto',
        spaceBetween: 0,
        watchSlidesProgress: true,
        preventClicks: true,
        a11y: false,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        navigation: {
          nextEl: `.product-slider[data-slider-id="${index}"] .swiper-product-next`,
          prevEl: `.product-slider[data-slider-id="${index}"] .swiper-product-prev`,
        },
        pagination: {
          el: `.product-slider[data-slider-id="${index}"] .swiper-product-pagination`,
          type: 'bullets',
          clickable: true,
        },
      },
    );
  });
}

function nestedSliders() {
  let SlidersArray = [];

  let sliders = document.querySelectorAll('._nested-slider');
  sliders.forEach((slider, index) => {
    slider.setAttribute('data-slider-id', index);

    SlidersArray[index] = new Swiper(
      `._nested-slider[data-slider-id="${index}"] .swiper-container`,
      {
        slidesPerView: 'auto',
        spaceBetween: 0,
        watchSlidesProgress: true,
        preventClicks: true,
        a11y: false,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        nested: true,
        navigation: {
          nextEl: `._nested-slider[data-slider-id="${index}"] .swiper-button-next`,
          prevEl: `._nested-slider[data-slider-id="${index}"] .swiper-button-prev`,
        },
        pagination: {
          el: `._nested-slider[data-slider-id="${index}"] .swiper-pagination`,
          type: 'bullets',
          clickable: true,
        },
      },
    );
  });
}

function gallery() {
  let SlidersArray = [];

  let sliders = document.querySelectorAll('.gallery');
  sliders.forEach((slider, index) => {
    slider.setAttribute('data-slider-id', index);
    let gallery = {
      mySwiper: {},
      mySwiper2: {},
    };

    gallery.mySwiper = new Swiper(
      `.gallery[data-slider-id="${index}"] .mySwiper`,
      {
        spaceBetween: 0,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
      },
    );
    gallery.mySwiper2 = new Swiper(
      `.gallery[data-slider-id="${index}"] .mySwiper2`,
      {
        spaceBetween: 0,
        loop: true,
        navigation: {
          nextEl: `.gallery[data-slider-id="${index}"] .swiper-button-next`,
          prevEl: `.gallery[data-slider-id="${index}"] .swiper-button-prev`,
        },
        thumbs: {
          swiper: gallery.mySwiper,
        },
      },
    );

    SlidersArray[index] = gallery;
  });
}

Sliders();
gallery();
productSliders();
nestedSliders();
