window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var html = document.getElementsByTagName('html');
    html[0].classList.add('page-active');
  }, 1000);
});

const scFunc = function() {
  var targetElement = document.getElementsByClassName('js-main-bottom')[0];
  var jsMainBottomTop = targetElement.getBoundingClientRect().top;
  var scrollPoint = window.pageYOffset;
  var jsMainBottomScrollTopPoint = scrollPoint + jsMainBottomTop;
  var mainTxtHeight = document.getElementsByClassName('js-main-txt')[0].clientHeight;

  var scrollEventPoint = jsMainBottomScrollTopPoint - mainTxtHeight;

  if (scrollPoint >= scrollEventPoint) {
    targetElement.classList.add('active');
  } else {
    targetElement.classList.remove('active');
  }
}

window.addEventListener('scroll', scFunc);
