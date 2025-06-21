import { Controller } from "@hotwired/stimulus"
import Swiper from "swiper"
import { Navigation } from "swiper/modules"

export default class extends Controller {
  connect() {
    new Swiper(".swiper", {
      modules: [Navigation],
      direction: "horizontal",
      loop: true,
      slidesPerView: 3,
      centeredSlides: true
    })
  }
}
