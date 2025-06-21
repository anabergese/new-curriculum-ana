
import { Controller } from "@hotwired/stimulus"
import Swiper from "swiper"
import { Navigation } from "swiper/modules"

export default class extends Controller {
  connect() {
    new Swiper(".swiper", {
      modules: [Navigation],
      direction: "horizontal",
      slidesPerView: 3,
      loop: true,
      simulateTouch: false,
      spaceBetween: 600,
      centeredSlides: true,

      navigation: {
          nextEl: '.swiper-button-next-jobs',
          prevEl: '.swiper-button-prev-jobs',
      },
    })
  }
}
