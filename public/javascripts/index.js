
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

$(document).ready(function () {
  $("body").addClass("loaded");

  var parallaxItem = $('.parallax')[0];

  $('.section__inner').mousemove(function (e) {
    parallax(e, parallaxItem);
  });

  function parallax(e, target) {

    var x = ($(".section__inner").width() - target.offsetWidth) / 2 - (e.pageX - ($(".section__inner").width() / 2)) / 20;
    var y = ($(".section__inner").height() - target.offsetHeight) / 2 - (e.pageY - ($(".section__inner").height() / 2)) / 20;
  
    $(target).offset({
      top: y,
      left: x+50,
    });
  };
});
