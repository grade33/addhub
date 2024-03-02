<template>
  <div class="service-card">
    <button class="favourite-btn">
      <svg
        width="26"
        height="23"
        viewBox="0 0 26 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.0775 12.2216L13.4334 21.5L3.78929 12.2216C3.15317 11.6203 2.65211 10.8976 2.31765 10.0989C1.9832 9.30027 1.82261 8.443 1.84598 7.58109C1.86935 6.71918 2.07619 5.87131 2.45346 5.09087C2.83073 4.31043 3.37026 3.61432 4.03809 3.04638C4.70591 2.47844 5.48756 2.05098 6.33381 1.7909C7.18006 1.53083 8.07257 1.44378 8.95515 1.53524C9.83774 1.62669 10.6913 1.89467 11.462 2.32231C12.2327 2.74994 12.9039 3.32796 13.4334 4.01996C13.9652 3.33298 14.6372 2.76001 15.4074 2.33692C16.1776 1.91382 17.0294 1.64971 17.9095 1.56112C18.7896 1.47252 19.6791 1.56134 20.5222 1.82202C21.3653 2.0827 22.144 2.50963 22.8095 3.07609C23.475 3.64255 24.0129 4.33634 24.3897 5.11405C24.7664 5.89175 24.9739 6.73663 24.999 7.5958C25.0242 8.45497 24.8665 9.30993 24.5359 10.1072C24.2053 10.9044 23.7088 11.6268 23.0775 12.2291"
          stroke="#222222"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </button>
    <div class="service-card__slider _nested-slider" :data-slider-id="sliderId">
      <Swiper v-bind="swiperOptions">
        <SwiperSlide v-for="i in 2">
          <div class="service-card__img">
            <img :src="img" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="swiper-nav">
        <div class="swiper-button swiper-button-prev">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.97495 15.0583L2.91661 10L7.97495 4.94168"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.0833 10L3.05834 10"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button swiper-button-next">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0251 4.94165L17.0834 9.99998L12.0251 15.0583"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.91666 10H16.9417"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="service-card__content">
      <div class="service-card__type">
        <span class="text14">{{ type }}</span>
      </div>
      <a href="" class="service-card__title text17 medium-text">
        {{ title }}
      </a>

      <div class="service-card__reviews _flex">
        <img src="~/assets/img/star.svg" alt="" />
        <div class="service-card__reviews-text">
          <span class="text15 medium-text">4.82 </span>
          <span class="text14 gray-text"> 94 отзыва</span>
        </div>
      </div>

      <div class="service-card__bottom _flex">
        <a href="" class="service-card__user _flex">
          <div class="avatar">
            <img :src="avatar" alt="" />

            <span class="service-card__user-online"></span>
          </div>
          <div class="service-card__user-name text14">{{ name }}</div>
        </a>

        <div class="service-card__price">
          <span class="text14 gray-text">от </span>
          <span class="text17 medium-text"> 983 ₽</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useSwiper } from '~/composables/useSwiper.js';

export default {
  props: {
    sliderId: {
      type: [String, Number],
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { swiperOptions } = useSwiper(
      {
        prevEl: `._nested-slider[data-slider-id="${props.sliderId}"] .swiper-button-prev`,
        nextEl: `._nested-slider[data-slider-id="${props.sliderId}"] .swiper-button-next`,
      },
      `._nested-slider[data-slider-id="${props.sliderId}"] .swiper-pagination`,
    );

    return {
      swiperOptions,
    };
  },
};
</script>
