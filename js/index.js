var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        1: {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
          centeredSlides: false,
        },
      }
  });