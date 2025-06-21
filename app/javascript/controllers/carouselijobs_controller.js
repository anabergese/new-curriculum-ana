
import { Controller } from "@hotwired/stimulus"
import Swiper from "swiper"
import { Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default class extends Controller {
  connect() {
    new Swiper(".swiper", {
      modules: [Navigation, Pagination],
      direction: "horizontal",
      slidesPerView: 3,
      loop: true,
      simulateTouch: false,
      spaceBetween: 600,
      centeredSlides: true,

      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
          nextEl: '.swiper-button-next-jobs',
          prevEl: '.swiper-button-prev-jobs',
      },
    })
  }
}
