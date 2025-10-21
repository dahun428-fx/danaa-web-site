/* main header Fixed sticky header */
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('.gnb_nav').addClass('fixed-header gnb_nav_over');
        $(".navbar-brand").find("img").attr("src", $(".navbar-brand").find("img").attr("src").replace("_on", "_off"));
    }
    else {
        $('.gnb_nav').removeClass('fixed-header gnb_nav_over');
        $(".navbar-brand").find("img").attr("src", $(".navbar-brand").find("img").attr("src").replace("_off", "_on"));
    }
});

$(document).ready(function () {
    /*If browser resized, check width again */
    $('.pf-item-image').css('height', $('.pf-item-image').width());
    $(window).resize(function () {
        $('.pf-item-image').css('height', $('.pf-item-image').width());
    });

    // home slider
    $('.home-slider').owlCarousel({
        onTranslated: function (me) {
            $(me.target).find(".owl-item.active [data-src]:not(.loaded)").each(function (i, v) {
                $(v).addClass("loaded").css("background-image", "url(" + $(v).attr("data-src") + ")");
            });
        },
        lazyLoad: true,
        loop: true,
        autoplay: true,
        margin: 10,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: true,
        autoplayHoverPause: true,
        items: 1,
        navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true
            }
        }
    });
        
        
    // main interior slider
    $('#interior-slider').carousel({
        loop:true,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dots:false,
        nav: true,
        autoplayHoverPause: true,
        items: 1
    });


    /* main pf-item img replace */
    $('.pf-item').bind('mouseenter', function (e) {
        e.preventDefault();
        $(this).addClass('pf-item-on');
        $(this).find("img").attr("src", $(this).find("img").attr("src").replace("_off", "_on"));
    });
    $('.pf-item').bind('mouseleave', function (e) {
        e.preventDefault();
        $(this).removeClass('pf-item-on');
        $(this).find("img").attr("src", $(this).find("img").attr("src").replace("_on", "_off"));
    });

    /* 768 */
    if ($('body').width() < 769) {
        /*If browser resized, check width again */
        $('#section01 .card').css('height', $('#section01 .card').width());
        $(window).resize(function(){
            $('#section01 .card').css('height', $('#section01 .card').width());
        });

        $('.pf-item-image').css('height', $('.pf-item-image').width());
        $(window).resize(function () {
            $('.pf-item-image').css('height', $('.pf-item-image').width());
        });

        $('#interior-wr, #ico-wr-id').removeClass('container');
        $('#interior-wr, #ico-wr-id').addClass('container-fluid');
    }
    else {
        $('#interior-wr, #ico-wr-id').addClass('container');
        $('#interior-wr, #ico-wr-id').removeClass('container-fluid');
    }

    // mainCenterslide
    //var mq = window.matchMedia("(max-width: 768px)"),
      slickVar = {
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        swipeToSlide: true,
        autoplay: false,
        arrows: false,
        infinite: true,
        dots: false,
        responsive: [ // 반응형 웹 구현 옵션
            {  
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:1 
                } 
            },
            { 
                breakpoint: 768, //화면 사이즈 768px
                settings: {	
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:1 
                } 
            },
            { 
                breakpoint: 414, //화면 사이즈 768px
                settings: {	
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:1 
                } 
            }
        ]
      },
      runSlick = function() {
        $('#main_center_list_slider').slick(slickVar);
      };

      // slick initialization while document ready
      runSlick();

      // listen to jQuery's window resize
      //var setMediaQuery = function(e) {
        //if(e.matches) {
         // runSlick();
        //}
       //  else {
        //   $('#main_center_list_slider').slick("unslick");
        //}
      //};

     //mq.addListener(setMediaQuery);
     //setMediaQuery(mq);



});
