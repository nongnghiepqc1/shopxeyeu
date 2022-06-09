$(document).ready(function(){
    $('li span').click(function(){
      $('li span').removeClass("active-comment-rating");
      $(this).addClass("active-comment-rating");
  });
  });