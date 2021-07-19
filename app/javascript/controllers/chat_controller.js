import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "dialog", "dialog1" ]

  connect() {



      const dialog = this.dialogTarget;
      const dialog1 = this.dialog1Target;
      let currentpos = -172;
      let currentpos1 = -172;

      function movething() {

        currentpos += 1;
        currentpos1 += 1;
        dialog.style.top = currentpos + "px";
        dialog1.style.top = currentpos1 + "px";

        if ( Math.abs(currentpos >= 200) ) {
          currentpos = -344;
        }

        if ( Math.abs(currentpos1 >= 200) ) {
              currentpos1 = -516;
            }

        window.requestAnimationFrame(movething);
      }

      movething();




    }


  }
