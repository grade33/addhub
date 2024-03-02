import { Navigation, Pagination, A11y } from 'swiper/modules';

export function useSwiper(
  navigationSelectors = {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  paginationSelector = '.swiper-pagination',
) {
  const swiperOptions = {
    modules: [Navigation, Pagination, A11y],
    slidesPerView: 'auto',
    spaceBetween: 0,
    watchSlidesProgress: true,
    preventClicks: true,
    a11y: false,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    navigation: {
      prevEl: navigationSelectors.prevEl,
      nextEl: navigationSelectors.nextEl,
    },
    pagination: {
      el: paginationSelector,
      type: 'bullets',
      clickable: true,
    },
  };

  return { swiperOptions };
}
