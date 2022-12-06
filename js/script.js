var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  mousewheel: true,
  keyboard: true,
});

window.addEventListener('DOMContentLoaded', function() {

  'use strict';

  let tab = document.querySelectorAll('.park__brand'),
      info = document.querySelector('.park__marc'),
      content = document.querySelectorAll('.mySwiper');


  function hideTabContent (a) {
      for (let i = a; i < content.length; i++) {
          content[i].classList.remove('show');
          content[i].classList.add('hide');
      }
  }

  hideTabContent(1);

  function showTabContent (b) {
      if (content[b].classList.contains('hide')) {
          content[b].classList.remove('hide');
          content[b].classList.add('show');
      }
  }

  info.addEventListener('click', function (event) {
      let target = event.target;
      if (target && target.classList.contains('park__brand')) {
          for (let i = 0; i < tab.length; i++) {
              if (target == tab [i]) {
                  hideTabContent(0);
                  showTabContent(i);
                  tab.forEach(function(item) {
                    item.classList.remove('park__brand_active');
                  });
                  target.classList.add('park__brand_active');
                  break;
              }
          }
        
      }
  });

});

