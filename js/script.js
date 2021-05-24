$(function(){
  $('html').addClass('page-active');
});

$(window).scroll(function() {
  jsMainBottom = $('.js-main-bottom');
  jsMainBottomExpr = $('.js-main-bottom')[0];

  jsMainBottomTopPosition = jsMainBottomExpr.getBoundingClientRect().top;
  scrollPoint = window.pageYOffset;
  jsMainBottomScrollTopPoint = scrollPoint + jsMainBottomTopPosition;
  mainTxtHeight = $('.js-main-txt')[0].clientHeight;

  scrollEventPoint = jsMainBottomScrollTopPoint - mainTxtHeight;

  if (scrollPoint >= scrollEventPoint) {
    jsMainBottom.addClass('active');
  } else {
    jsMainBottom.removeClass('active');
  }
});
