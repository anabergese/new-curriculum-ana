import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "move" ]

  connect() {



      const img = this.moveTarget;
      let currentpos = 0;

      function movething() {

        currentpos += 2;
        img.style.left = currentpos + "px";

        if ( Math.abs(currentpos >= 500)) {
          currentpos = -900;
        }

        window.requestAnimationFrame(movething);
      }

      movething();




    }

  }


 // o === L ? (e.x >= e.max && (e.x = e.min),
 //                t.style.transform = "translateX(".concat(e.x, "%)"),
 //                e.x += a) : (e.x <= e.min && (e.x = e.max),
 //                t.style.transform = "translateX(".concat(e.x, "%)"),
 //                e.x -= a)
