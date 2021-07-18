import { Controller } from "stimulus"

export default class extends Controller {

  static targets = [ "btn" ]

  connect() {

    this.btnTarget.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    })
    // Ex.: to replace the contect of the selected HTML element:
    // this.outputTarget.textContent = 'Hello, Stimulus!'
    // Remember to create this file with the name of the data-controller
  }
}
