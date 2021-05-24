$(function(){
  $('body').addClass('page-active');
});

$(window).scroll(function() {
  jsMainBottom = $('.js-main-bottom');
  jsMainBottomExpr = $('.js-main-bottom')[0];

  scrollPoint = $(window).scrollTop();
  jsMainBottomScrollTopPoint = jsMainBottom.offset().top;
  mainTxtHeight = $('.js-main-txt')[0].clientHeight;
  scrollEventPoint = jsMainBottomScrollTopPoint - mainTxtHeight;

  if (scrollPoint >= scrollEventPoint) {
    jsMainBottom.addClass('active');
  }
});
