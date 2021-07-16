// This example controller works with specially annotated HTML like:
//
// <div data-controller="changeColor">
//   <h1 data-changeColor-target="color"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "color" ]

  connect() {
      // var prevScrollpos = window.pageYOffset; // 0 a 3066
      // window.addEventListener('scroll', () => {
      //   var currentScrollPos = window.pageYOffset;
      //   if (prevScrollpos > currentScrollPos) {
      //     this.colorTarget.style.backgroundColor = "pink";
      //   } else {
      //     this.colorTarget.style.backgroundColor = "red";
      //   }
      //   prevScrollpos = currentScrollPos;
      // });

    };
}


// can we haver remove attribute or set attribute depending of the scroolll? ??

// when mouse is in the div, change color
