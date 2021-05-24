$(function(){
  //なにかしらの処理
  $('html').addClass('page-active');
});

$(window).scroll(function() {
  var targetElement = $('.js-main-bottom')[0];

  var jsMainBottomTop = targetElement.getBoundingClientRect().top;
  var scrollPoint = window.pageYOffset;
  var jsMainBottomScrollTopPoint = scrollPoint + jsMainBottomTop;
  var mainTxtHeight = $('.js-main-txt')[0].clientHeight;

  var scrollEventPoint = jsMainBottomScrollTopPoint - mainTxtHeight;

  if (scrollPoint >= scrollEventPoint) {
    $('.js-main-bottom').addClass('active');
  } else {
    $('.js-main-bottom').removeClass('active');
  }
});
