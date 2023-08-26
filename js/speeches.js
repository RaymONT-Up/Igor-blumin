const swiper = new Swiper(".speeches__slider", {
  slidesPerView: 2,
  spaceBetween: 112,

  // Navigation arrows
  navigation: {
    nextEl: ".speeches__arrow-next",
    prevEl: ".speeches__arrow-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    800: {
      spaceBetween: 50,
    },
    1000: {
      slidesPerView: 2,
    },
  },
});
