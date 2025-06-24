
import { Controller } from "@hotwired/stimulus"
import Swiper from "swiper"
import { Navigation } from "swiper/modules"

export default class extends Controller {
  static targets = ["prev", "next"]

  connect() {
    new Swiper(this.element, {
      modules: [Navigation],
      direction: "horizontal",
      runCallbacksOnInit: true,
      slidesPerView: "auto",
      centerInsufficientSlides: true,
      centeredSlides: true,
      centeredSlidesBounds: true,
      initialSlide: 0,
      loop: true,
      simulateTouch: true,

      navigation: {
        nextEl: this.nextTarget,
        prevEl: this.prevTarget
      },
    })
  }
}
