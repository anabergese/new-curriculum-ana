const scrollAnimation = () => {

  document.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop; // From 0 to 4000;
      const allDivs = document.getElementsByClassName('colored-divs');

      for (let i = 0; i < allDivs.length; i++ ) {

        let curDiv = allDivs[i];

        // The code below makes the background color change when the
        // scroll top passes the 2/3 of the previous div.

        let heightBefore = 0;
        if (i > 0) {
          heightBefore = allDivs[i-1].offsetHeight / 3;
        }

        if (scrollTop > curDiv.offsetTop - heightBefore) {
          const color = curDiv.getAttribute("data-color");
          document.body.style.background = color;

          // Select from project section h2, p and b to change text color
          const projectsH2 = document.querySelector(".projects h2");
          const projectsP = document.querySelectorAll(".color-gray-400");
          const projectsA = document.querySelectorAll(".project-links");

          projectsH2.style.transitionTimingFunction = "ease";
          projectsH2.style.transitionDelay = "2s";
          projectsH2.style.transitionProperty = "color";
          projectsH2.style.color = "#ffffff";

          projectsP.forEach ( p =>
            p.setAttribute( "style",
              "transition-property: color; transition-delay: 2s; color:#ffffff;")
          );
        }
      }
  };
};

export { scrollAnimation };
