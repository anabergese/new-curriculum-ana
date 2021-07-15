import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "opacity" ]

  connect() {
      var prevScrollpos = window.pageYOffset; // 0 a 3066
      window.addEventListener('scroll', () => {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
        this.opacityTarget.classList.add('navbar-white');
      } else if (prevScrollpos > currentScrollPos){
        this.opacityTarget.classList.remove('navbar-white');
      }
      prevScrollpos = currentScrollPos;
    });
  }
}
// prevScrollpos >= currentScrollPos = show navbar with new class;
//  5...4...3...2...1....0

