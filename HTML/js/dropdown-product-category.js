
$(document).ready(function(){
    $('li a').click(function(){
      $('li a').removeClass("active");
      $(this).addClass("active");
  });
});
function hamDropdown() {
        document.querySelector(".icon-angle-down").classList.add(".icon-angle-up::before");
        document.querySelector(".icon-angle-down").classList.remove(".icon-angle-down::before");
}
    