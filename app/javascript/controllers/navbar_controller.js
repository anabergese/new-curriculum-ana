import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "opacity" ]

  connect() {
      // const topOfNav = document.querySelector(".cover-main").offsetParent;
      var prevScrollpos = window.pageYOffset; // 0 a 3066

      window.addEventListener('scroll', () => {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos < currentScrollPos) {
        this.opacityTarget.style.animationName = "hidenav";

      } else if (currentScrollPos == 0 ) {
        this.opacityTarget.classList.remove('navbar-white');

      } else if (prevScrollpos > currentScrollPos) {
        this.opacityTarget.classList.add('navbar-white');
        this.opacityTarget.style.animationName = "shownav";
      }

      prevScrollpos = currentScrollPos;

    });
  }
}


