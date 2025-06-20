import { Controller } from "stimulus"
import Swiper from 'swiper';
// core version + navigation, pagination modules:
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Pagination]);

export default class extends Controller {

  connect() {
    new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
    });
  }
}

