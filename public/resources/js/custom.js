
$(window).scroll(function(){
  if ($(window).scrollTop() >= 500) {
    $('.sub-top').addClass('fixed-sub');
  }
  else {
    $('.sub-top').removeClass('fixed-sub');
  }
});


$(function(){
  $('.nav-item , .gnb-submenu').on('mouseenter' ,function() {
      $(".navbar-brand").find("img").attr("src", $(".navbar-brand").find("img").attr("src").replace("_on", "_off"));
    });
  $('.nav-item, .gnb-submenu').on('mouseleave' ,function() {
      $(".navbar-brand").find("img").attr("src", $(".navbar-brand").find("img").attr("src").replace("_off", "_on"));
    });
});

$(document).ready(function () {
  if ($('.slider-for').length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = $('.slider_counter');
    var updateSliderCounter = function (slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $(sliderCounter).text(currentSlide + '/' + slidesCount);
    };

    $('.slider-for').on('init', function (event, slick) {
      $('.slider-for').append(sliderCounter);
      updateSliderCounter(slick);
    });
    $('.slider-for').on('afterChange', function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      prevArrow: $('.m-slick-prev'),
      nextArrow: $('.m-slick-next'),
      asNavFor: '.slider-nav'
    });
  }
  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    centerMode: false,
    focusOnSelect: true
  });
  $(".dropdown-toggle").on("mouseenter", function () {
    // make sure it is not shown:
    if (!$(this).parent().hasClass("show")) {
      $(this).click();
    }
  });

  // sub page nav
  $('.m-sub-top .sub-nav-anchor').on({
    click:function(e){
      e.preventDefault();
      $(e.currentTarget).attr('aria-expanded', function(index, attr){
          return attr == 'true' ? 'false' : 'true';
      });
      $(document.getElementById(e.currentTarget.getAttribute('aria-controls'))).stop().slideToggle();
    }
  });

});


///////////////////////////////////////////
// mobile side bar //
$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $('#dismiss, .overlay').on('click', function () {
    $('#sidebar').removeClass('active');
    $('.overlay').removeClass('active');
  });

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').addClass('active');
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});
/////////////////////////////////////////////////////////////////////////////////////
menu_height_setting();

function menu_height_setting() {

  var $sub_menu = $('.gnb-submenu');

  gnb_sub_menu_height = 200;
  $sub_menu.height('auto');

  $sub_menu.each(function () {
    if ($(this).height() > gnb_sub_menu_height) {
      gnb_sub_menu_height = $(this).height();
    }
  });
  $sub_menu.height(gnb_sub_menu_height);
}



(function($) {

  'use strict';
  // bootstrap dropdown hover
  $('nav .dropdown , .gnb-submenu').hover(function(){
    var $this = $('.gnb-submenu');
    $this.addClass('show');
    $this.find('> a').attr('aria-expanded', true);
    $this.addClass('show');

    $('.gnb_nav').addClass('gnb_nav_over');
  }, function(){
    var $this = $('.gnb-submenu');
    $this.removeClass('show');
    $this.find('> a').attr('aria-expanded', false);
    $this.find('.dropdown-menu').removeClass('show');
    $('.gnb_nav').removeClass('gnb_nav_over');
  });

  $('#appointment_date').datepicker({
    'format': 'm/d/yyyy',
    'autoclose': true
  });
  $('#appointment_time').timepicker();



  var contentWayPoint = function() {
    var i = 0;
    $('.element-animate').waypoint( function( direction ) {

      if( direction === 'down' && !$(this.element).hasClass('element-animated') ) {

        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function(){

          $('body .element-animate.item-animate').each(function(k){
            var el = $(this);
            setTimeout( function () {
              var effect = el.data('animate-effect');
              if ( effect === 'fadeIn') {
                el.addClass('fadeIn element-animated');
              } else if ( effect === 'fadeInLeft') {
                el.addClass('fadeInLeft element-animated');
              } else if ( effect === 'fadeInRight') {
                el.addClass('fadeInRight element-animated');
              } else {
                el.addClass('fadeInUp element-animated');
              }
              el.removeClass('item-animate');
            },  k * 100);
          });

        }, 100);

      }

    } , { offset: '95%' } );
  };
  contentWayPoint();

})(jQuery);


var fullHeight = function() {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function(){
        $('.js-fullheight').css('height', $(window).height());
    });
};
fullHeight();
