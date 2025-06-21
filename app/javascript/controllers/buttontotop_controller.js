import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  movetop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
    })
  }
}
