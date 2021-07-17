import { Controller } from "stimulus"
import Swiper from 'swiper';
// core version + navigation, pagination modules:
import SwiperCore, { Pagination, Navigation, Virtual } from 'swiper/core';

// configure Swiper to use modules
// SwiperCore.use([Navigation, Pagination]);

export default class extends Controller {

  connect() {
    new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,


      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      virtual: {
          slides: (function () {
            const slides = [];
            for (var i = 0; i < 600; i += 1) {
              slides.push('Slide ' + (i + 1));
            }
            return slides;
          })(),
        },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });



  }
}



      // const swiper = new Swiper('.swiper-container', {
      //   slidesPerView: 3,
      //   centeredSlides: true,
      //   spaceBetween: 30,

      //   pagination: {
      //     el: '.swiper-pagination',
      //     type: 'fraction',
      //   },

      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },
      //   virtual: {
      //     slides: (function () {
      //       const slides = [];
      //       for (var i = 0; i < 600; i += 1) {
      //         slides.push('Slide ' + (i + 1));
      //       }
      //       return slides;
      //     })(),
      //   },
      // });

