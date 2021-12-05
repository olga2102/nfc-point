new Swiper(".shop-swiper", {
  navigation: {
    nextEl: '.swiper--next',
    prevEl: '.swiper--prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    360: {
    slidesPerView: 1,
    },
    // 940: {
    //   slidesPerView: 3,
    //   }
  },
  spaceBetween: 20,
  loop: true,
});
