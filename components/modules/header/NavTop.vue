<template>
  <ul class="master-nav">
    <li v-for="item in list">
      <a href="" class="master-nav__item">
        <span class="master-nav__title"> {{ item.title }} </span>
        <svg
          v-if="item.isHaveSubmenu"
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.71054 1.3562H0.289397C0.0328609 1.3562 -0.0978274 1.66598 0.0861043 1.84991L2.79668 4.56049C2.90801 4.67181 3.09194 4.67181 3.20331 4.56049L5.91389 1.84991C6.09777 1.66598 5.96708 1.3562 5.71054 1.3562Z"
            fill="#222222"
          />
        </svg>
      </a>
      <ul v-if="item.isHaveSubmenu" class="master-nav__submenu">
        <li><a href="">Разработка и ИТ</a></li>
        <li><a href="">Дизайн и творчество</a></li>
        <li><a href="">Цифровой маркетинг</a></li>
        <li><a href="">Копирайтинг и перевод</a></li>
        <li><a href="">Музыка и аудио</a></li>
        <li><a href="">Видео и анимация</a></li>
        <li><a href="">Копирайтинг и перевод</a></li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: 'Главная', isHaveSubmenu: true },
        { title: 'Услуги', isHaveSubmenu: true },
        { title: 'Проекты', isHaveSubmenu: true },
        { title: 'О нас', isHaveSubmenu: true },
        { title: 'Контакты', isHaveSubmenu: false },
      ],
    };
  },
};
</script>
