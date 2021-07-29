// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-hello-target="output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "output" ]

  connect() {


    // Ex.: to replace the contect of the selected HTML element:
    // this.outputTarget.textContent = 'Hello, Stimulus!'
    // Remember to create this file with the name of the data-controller
  }
}



