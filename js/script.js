window.addEventListener("DOMContentLoaded", function () {
   'use strict'
   //tabs
   function tabShablon(a, b, c) {
      let tabsParent = document.querySelector("." + a),
         tabs = document.querySelectorAll("." + b),
         tabContent = document.querySelectorAll("." + c);


      function hideTabContent(a) {

         for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
         }

      }
      hideTabContent(1);

      function showTabContent(b) {
         if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
         }
      }


      tabsParent.addEventListener("click", function (event) {
         if (event.target && event.target.classList.contains('remonts__text')) {
            for (let i = 0; i < tabs.length; i++) {
               if (event.target == tabs[i]) {
                  hideTabContent(0);
                  showTabContent(i);

                  break;
               }
            }
         }
      });
   }

   tabShablon("remonts__list", "remonts__text", "remonts__tabsdescr");

});