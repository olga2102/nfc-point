new Swiper('.shop-swiper', {
  navigation: {
    nextEl: '.shop-button--next',
    prevEl: '.shop-button--prev',
  },
  pagination: {
    el: '.shop-pagination',
    clickable: true,
  },
  breakpoints: {
    360: {
    slidesPerView: 1,
    },
  },
  spaceBetween: 20,
  loop: true,
});

new Swiper('.youtube-swiper', {
  // navigation: {
  //   nextEl: '.shop-button--next',
  //   prevEl: '.shop-button--prev',
  // },
  // pagination: {
  //   el: '.shop-pagination',
  //   clickable: true,
  // },
  breakpoints: {
    360: {
    slidesPerView: 2,
    },
    940: {
      slidesPerView: 3,
    }
  },
  spaceBetween: 20,
  loop: true,
});
