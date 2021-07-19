import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "move" ]

  connect() {



      const img = this.moveTarget;
      let currentpos = 0;

      function movething() {

        currentpos += 3;
        img.style.left = currentpos + "px";

        if ( Math.abs(currentpos >= 900)) {
          currentpos = -1000;
        }

        window.requestAnimationFrame(movething);
      }

      movething();




    }

    // Ex.: to replace the contect of the selected HTML element:
    // this.outputTarget.textContent = 'Hello, Stimulus!'
    // Remember to create this file with the name of the data-controller
  }


 // o === L ? (e.x >= e.max && (e.x = e.min),
 //                t.style.transform = "translateX(".concat(e.x, "%)"),
 //                e.x += a) : (e.x <= e.min && (e.x = e.max),
 //                t.style.transform = "translateX(".concat(e.x, "%)"),
 //                e.x -= a)
