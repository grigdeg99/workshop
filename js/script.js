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

   //slider
   let slideIndex = 1,
      slides = document.querySelectorAll('.slider_item'),
      prev = document.querySelector('.slider_prev'),
      next = document.querySelector('.slider_next');

   showSlides(slideIndex);


   function showSlides(n) {
      if (n > slides.length) {
         slideIndex = 1;
      }
      if (n < 1) {
         slideIndex = slides.length;
      }
      slides.forEach((item) => item.style.display = 'none');
      slides[slideIndex - 1].style.display = 'block';

   }

   function plusSlides(n) {
      showSlides(slideIndex += n);

   }

   function currentSlide(n) {
      showSlides(slideIndex = n);
   }



   prev.addEventListener('click', function () {
      plusSlides(-1);
   });

   next.addEventListener('click', function () {
      plusSlides(1);
   });


   //slider firstscreen
   function sliderfirstscreen() {
      let slideIndex = 1,
         slides = document.querySelectorAll('.firstScreen__slider_item'),
         prev = document.querySelector('.firstScreen__slider_prev'),
         next = document.querySelector('.firstScreen__slider_next');

      showSlides(slideIndex);


      function showSlides(n) {
         if (n > slides.length) {
            slideIndex = 1;
         }
         if (n < 1) {
            slideIndex = slides.length;
         }
         slides.forEach((item) => item.style.display = 'none');
         slides[slideIndex - 1].style.display = 'block';

      }

      function plusSlides(n) {
         showSlides(slideIndex += n);

      }

      function currentSlide(n) {
         showSlides(slideIndex = n);
      }



      prev.addEventListener('click', function () {
         plusSlides(-1);
      });

      next.addEventListener('click', function () {
         plusSlides(1);
      });

   }

   sliderfirstscreen();

   //slider tabs
   function slidertabs1() {
      let slideIndex = 1,
         slides = document.querySelectorAll('.tabs__slider1_item'),
         prev = document.querySelector('.tabs__slider1_prev'),
         next = document.querySelector('.tabs__slider1_next');

      showSlides(slideIndex);


      function showSlides(n) {
         if (n > slides.length) {
            slideIndex = 1;
         }
         if (n < 1) {
            slideIndex = slides.length;
         }
         slides.forEach((item) => item.style.display = 'none');
         slides[slideIndex - 1].style.display = 'block';

      }

      function plusSlides(n) {
         showSlides(slideIndex += n);

      }

      function currentSlide(n) {
         showSlides(slideIndex = n);
      }



      prev.addEventListener('click', function () {
         plusSlides(-1);
      });

      next.addEventListener('click', function () {
         plusSlides(1);
      });

   }
   slidertabs1();

   function slidertabs2() {
      let slideIndex = 1,
         slides = document.querySelectorAll('.tabs__slider2_item'),
         prev = document.querySelector('.tabs__slider2_prev'),
         next = document.querySelector('.tabs__slider2_next');

      showSlides(slideIndex);


      function showSlides(n) {
         if (n > slides.length) {
            slideIndex = 1;
         }
         if (n < 1) {
            slideIndex = slides.length;
         }
         slides.forEach((item) => item.style.display = 'none');
         slides[slideIndex - 1].style.display = 'block';

      }

      function plusSlides(n) {
         showSlides(slideIndex += n);

      }

      function currentSlide(n) {
         showSlides(slideIndex = n);
      }



      prev.addEventListener('click', function () {
         plusSlides(-1);
      });

      next.addEventListener('click', function () {
         plusSlides(1);
      });

   }
   slidertabs2();

   function slidertabs3() {
      let slideIndex = 1,
         slides = document.querySelectorAll('.tabs__slider3_item'),
         prev = document.querySelector('.tabs__slider3_prev'),
         next = document.querySelector('.tabs__slider3_next');

      showSlides(slideIndex);


      function showSlides(n) {
         if (n > slides.length) {
            slideIndex = 1;
         }
         if (n < 1) {
            slideIndex = slides.length;
         }
         slides.forEach((item) => item.style.display = 'none');
         slides[slideIndex - 1].style.display = 'block';

      }

      function plusSlides(n) {
         showSlides(slideIndex += n);

      }

      function currentSlide(n) {
         showSlides(slideIndex = n);
      }



      prev.addEventListener('click', function () {
         plusSlides(-1);
      });

      next.addEventListener('click', function () {
         plusSlides(1);
      });

   }
   slidertabs3();

   //плавный скролл

   const anchors = document.querySelectorAll('a[href*="#"]')

   for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
         e.preventDefault()

         const blockID = anchor.getAttribute('href').substr(1)

         document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         })
      })
   }



});