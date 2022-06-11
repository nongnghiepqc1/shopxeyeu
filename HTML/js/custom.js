var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      750: {
        slidesPerView: 4,
        spaceBetween: 10,
      }
    },
  });
var swiper = new Swiper("#product-category", {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      750: {
        slidesPerView: 5,
        spaceBetween: 10,
      }
    },
  });

var myCollapsible = document.getElementById('category-child')

myCollapsible.addEventListener('shown.bs.collapse',function(){
  $(".categories button i").addClass('fa-angle-up').removeClass('fa-angle-down');
});
myCollapsible.addEventListener('hidden.bs.collapse',function(){
  $(".categories button i").addClass('fa-angle-down').removeClass('fa-angle-up');
});
