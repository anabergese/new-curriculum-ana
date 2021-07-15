import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "opacity" ]

  connect() {
    // this.opacityTarget.textContent = 'Hello, Stimulus!';
    const navbar = document.querySelector('.topnav');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= window.innerHeight) {
          navbar.classList.add('navbar-lewagon-white');
        } else {
          navbar.classList.remove('navbar-lewagon-white');
        }
      });
    }
  }
}

