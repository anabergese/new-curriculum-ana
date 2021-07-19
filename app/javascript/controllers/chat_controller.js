import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "dialog" ]

  connect() {



      const img = this.dialogTarget;
      let currentpos = -172;

      function movething() {

        currentpos += 3;
        img.style.top = currentpos + "px";

        if ( Math.abs(currentpos >= 900)) {
          currentpos = -1000;
        }

        window.requestAnimationFrame(movething);
      }

      movething();




    }


  }
