import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "move" ]

  connect() {
    console.log('Hello hobbies controller!');
    // Ex.: to replace the contect of the selected HTML element:
    // this.outputTarget.textContent = 'Hello, Stimulus!'
    // Remember to create this file with the name of the data-controller
  }
}
