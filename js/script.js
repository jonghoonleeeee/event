//ページ読み込み時にbodyにpageactiveというクラスをつける
$(function(){
  $('body').addClass('page-active');
});

$(window).scroll(function() {

  //スクロール量の取得
  scrollPoint = $(window).scrollTop();

  //中央エリアの表示
  if(scrollPoint >= 300) {
    $(".middle").addClass('active')
  }
  //画像エリアの位置を取得
  bottomTop = $('.bottom').offset().top;
  //windowの高さの取得
  mainTxtHeight = $(window).height();
  //画像エリアのが表示されるスクロール量の計算
  scrollEventPoint = bottomTop - mainTxtHeight + 200;

  if (scrollPoint >= scrollEventPoint) {
    $('.bottom_wrapper').addClass('active');
  }
});
