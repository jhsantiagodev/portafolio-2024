let btnActive = document.querySelector(".layout__menu-togle");
let aside = document.querySelector(".layout__aside");
let btnBars = document.querySelector(".layout__menu-togle .fa-bars");
let btnXmark = document.querySelector(".layout__menu-togle .fa-xmark");

   btnActive.addEventListener("click", (e) => {

      let active = document.querySelector(".layout__aside--active");

      if (!active) {
         aside.classList.add("layout__aside--active");
         btnBars.style.opacity = 0;
         btnXmark.style.opacity = 1;
      }else {
         aside.classList.remove("layout__aside--active");
         btnBars.style.opacity = 1;
         btnXmark.style.opacity = 0;
      }
   });

   window.addEventListener("resize", () => {
      let size = parseInt(document.body.clientWidth);
      
      if (size <= 1060) {
         aside.classList.remove("layout__aside--active");
         btnBars.style.opacity = 1;
         btnXmark.style.opacity = 0;
      }
   });