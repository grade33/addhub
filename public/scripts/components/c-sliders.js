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

gallery();
