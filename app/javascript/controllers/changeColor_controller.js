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

// cuando el scroll alcance el top de projects section cambiar el backgrpond body color to blue;
  // const nav = this.colorTarget;
  // let topOfNav = nav.offsetTop;

  //   function fixNav() {
  //     if (window.scrollY >= topOfNav) {
  //       document.body.style.paddingTop = nav.offsetHeight + 'px';
  //       document.body.classList.add('fixed-nav');
  //     } else {
  //       document.body.classList.remove('fixed-nav');
  //       document.body.style.paddingTop = 0;
  //     }
  //   }

  //   window.addEventListener('scroll', fixNav);

// can we haver remove attribute or set attribute depending of the scroolll? ??

// when mouse is in the div, change color

// window.scrollY + window.innerHeight = nos da el margen botton de dónde estamos en la página.
// colortarget.height / 2 = vamos a estar a la mitad de la altura del elemento para que se aplique la funcion en este momento.

// si yo hago los background de las sections transparents y luego,
// cambio el background del body con el scroll
