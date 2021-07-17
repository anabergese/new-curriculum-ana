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

      const projects = this.colorTarget;
      const jobs = document.querySelector(".jobs").offsetTop;
      const topEducation = document.querySelector(".education").offsetTop;
      let topOfProjects = projects.offsetTop;
      var prevScrollpos = window.pageYOffset;

      function changeColor() {
        var currentScrollPos = window.pageYOffset;
        if (topOfProjects <= currentScrollPos ) {
          document.body.style.backgroundColor = "";
          document.body.classList.add('background-color');
        } else if (topEducation < currentScrollPos) {
          // document.body.style.backgroundColor = "";
          // document.body.style.backgroundColor = "white";
          console.log("pasé el top of jobs");
          console.log(topEducation);
          console.log(`Top of jobs: ${jobs}. currentScrollPos: ${currentScrollPos}`);
        } else {
          console.log("nose donde estoy");
        }
      }

    window.addEventListener('scroll', changeColor);

    };
}

// cuando el scroll alcance el top de projects section cambiar el backgrpond body color to blue;

  // const projects = this.colorTarget;
  // let topOfProjects = projects.offsetTop;
  // var prevScrollpos = window.pageYOffset;
  //   function changeColor() {
  //       var currentScrollPos = window.pageYOffset;
    //     if (topOfProjects <= currentScrollPos ) {
    //       document.body.style.backgroundColor = "blue";
    //     } else {
    //       document.body.style.backgroundColor = "white";
    //     }
  //   }

  //   window.addEventListener('scroll', changeColor);

// window.scrollY + window.innerHeight = nos da el margen botton de dónde estamos en la página.
// colortarget.height / 2 = vamos a estar a la mitad de la altura del elemento para que se aplique la funcion en este momento.

