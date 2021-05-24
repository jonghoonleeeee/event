$(function(){
  $('body').addClass('page-active');
});

$(window).scroll(function() {
  jsMainBottom = $('.js-main-bottom');

  //スクロール量の取得
  scrollPoint = $(window).scrollTop();
  //画像エリアの位置を取得
  jsMainBottomScrollTopPoint = jsMainBottom.offset().top;
  //windowの高さの取得
  mainTxtHeight = $(window).height();
  //画像エリアのが表示されるスクロール量の計算
  scrollEventPoint = jsMainBottomScrollTopPoint - mainTxtHeight;

  if (scrollPoint >= scrollEventPoint) {
    jsMainBottom.addClass('active');
  }
});
