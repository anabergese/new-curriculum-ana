import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "opacity" ]

  connect() {
      let topOfNav = this.opacityTarget.offsetTop;
      var prevScrollpos = window.pageYOffset; // 0 a 3066

      window.addEventListener('scroll', () => {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos < currentScrollPos) {
        this.opacityTarget.classList.remove('navbar-white');
      } else if (currentScrollPos == 0 && topOfNav == 0) {
        this.opacityTarget.classList.remove('navbar-white');
      } else if (prevScrollpos > currentScrollPos) {
        this.opacityTarget.classList.add('navbar-white');
      }

      prevScrollpos = currentScrollPos;
    });
  }
}



// un boton que al hacer click haga un scrool hasta el top de la navbar que es 0:
// document.querySelector(".topnav").offsetTop; == window.pageYOffset; == 0
