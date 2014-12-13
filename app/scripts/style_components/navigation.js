'use strict';

$(document).ready(function() {
  var menu = $('.navigation-menu');
  var menuToggle = $('.navigation-menu-button');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });
});
