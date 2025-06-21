import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["colored", "projectstitle", "projectnames"]

  connect() {

    document.onscroll = () => {
          const scrollTop = document.documentElement.scrollTop;
          const allDivs = this.coloredTargets;

          for (let i = 0; i < allDivs.length; i++ ) {

            let curDiv = allDivs[i];

            // The code below makes the background color change when the
            // scroll top passes the 2/3 of the previous div.
            let heightBefore = 0;
            if (i > 0) {
              heightBefore = allDivs[i-1].offsetHeight / 4;
            }

            if (scrollTop > curDiv.offsetTop - heightBefore) {
              const color = curDiv.getAttribute("data-color");
              // object.style.transition = "property duration timing-function delay|initial|inherit"
              document.body.style.transition = "background-color 10ms cubic-bezier() initial";
              document.body.style.background = color;

              // Select from project and education section h2
              this.projectstitleTarget.style.transition = "color 400ms cubic-bezier()";
              this.projectstitleTarget.style.transitionDelay = "900ms";
              this.projectstitleTarget.style.color = "#ffffff";

              // Select from education p and b to change text color
              this.projectnamesTargets.forEach ( p =>
                p.setAttribute( "style",
                  "transition-property: color; transition-delay: 900ms; transition-timing-function: cubic-bezier(); color:#ffffff;")
              );
            }
          }
      };
  }
}
