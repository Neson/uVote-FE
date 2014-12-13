if ($('.main.index').length > 0) {
  $('body').addClass('index');
}

$(window).scroll(function() {
  var st = $(window).scrollTop();
  if (st < 1000) {
    console.log('aeiii');
    $('body > section.banner.index > img').css('transform', 'translateY(' + st/2 + 'px)');
  }

});
