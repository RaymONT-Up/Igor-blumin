Fancybox.bind('[data-fancybox="gallery"]', {
  backFocus: false,
});

const gallerySlider = new Swiper(".gallery__slider", {
  grid: {
    rows: 2,
    fill: "row",
  },
  slidesPerView: 4,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: ".gallery__arrow-next",
    prevEl: ".gallery__arrow-prev",
  },

  breakpoints: {
    0: {
      grid: {
        rows: 1,
        fill: "row",
      },
      slidesPerView: 1,
    },

    600: {
      grid: {
        rows: 2,
        fill: "row",
      },
      slidesPerView: 2,
    },
    800: {
      grid: {
        rows: 2,
        fill: "row",
      },
      slidesPerView: 3,
    },
    1000: {
      grid: {
        rows: 2,
        fill: "row",
      },
      slidesPerView: 4,
    },
  },
});
