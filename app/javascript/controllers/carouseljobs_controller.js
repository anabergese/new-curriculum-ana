import { Controller } from "stimulus"
import Swiper from 'swiper';
// core version + navigation, pagination modules:
import SwiperCore, { Pagination, Navigation, Virtual } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);

export default class extends Controller {

  connect() {
    new Swiper('.swiper-container', {
      // Optional parameters:
      direction: 'horizontal',
      slidesPerView: 3,
      loop:true,
      simulateTouch: false,
      spaceBetween: 600,
      centeredSlides: true,


      navigation: {
          nextEl: '.swiper-button-next-jobs',
          prevEl: '.swiper-button-prev-jobs',
      },

      // virtual: {
      //     slides: (function () {
      //       const slides = [];
      //       for (var i = 0; i < 600; i += 1) {
      //         slides.push('Slide ' + (i + 1));
      //       }
      //       return slides;
      //     })(),
      //   },
    });
  }
}

