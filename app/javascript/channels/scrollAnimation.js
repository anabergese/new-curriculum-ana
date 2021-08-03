const scrollAnimation = () => {

  document.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop;
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
            let color = curDiv.getAttribute("data-color");
            document.body.style.background = color;
          }
      }
  };
};


export { scrollAnimation };
