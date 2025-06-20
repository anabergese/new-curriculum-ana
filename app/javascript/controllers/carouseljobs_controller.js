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
    });
  }
}

