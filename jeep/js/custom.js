$(function () {
   /*  $('header').hover(
        function () {
            $(this).addClass('active')

        },
        function () {
            $(this).removeClass('active')

        })
 */
    $(window).scroll(function () {
        let scT = $(this).scrollTop();
        let heT = $('.vehicles').offset().top - 130;

        if (scT >= heT) {
            $('header').addClass('active')
            $('header').mouseleave(function(){
                $(this).addClass('active')
            });
        }

        else {
            $('header').removeClass('active')
            $('header').mouseleave(function(){
                $(this).removeClass('active')
            });
        }


    })

    //슬라이드


    let swiper1 = new Swiper(".main_visual", {
        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: ".main_visual .swiper-button-next",
            prevEl: ".main_visual .swiper-button-prev",
        },
        /*    pagination: false */
    });






    let swiper2 = new Swiper(".go_slide", {
        autoplay: {
            delay: 2200,
        },
        slidesPerView: 4,
        spaceBetween: 50,
        freeMode: true,
        loop: true,
        pagination: {
            el: ".go_slide .swiper-pagination",
            type: "progressbar",
        },
    })


    let swiper3 = new Swiper(".d_slider", {
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
        },
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: ".d_slider .swiper-pagination",
            clickable: true,
        },
        /*   navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
          }, */
    });



    let swiper4 = new Swiper(".with .img_box", {
        autoplay: {
            delay: 3000,
        },
        slidesPerView: 4,
        spaceBetween: 0,
        freeMode: true,
        loop: true,
        navigation: {
            nextEl: ".with .img_box .swiper-button-next",
            prevEl: ".with .img_box .swiper-button-prev",
        },

    })



    let swiper5 = new Swiper(".jeep_life", {
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,


    })


    let slideI = 0;
    $('.map .left ul.img_box li').eq(slideI).siblings().hide()
    setInterval(function () {
        if (slideI < 2) {
            slideI++
        } else {
            slideI = 0
        }
        $('.map .left ul.img_box li').eq(slideI).fadeIn().siblings().fadeOut()
    }, 5000)


    //퀵메뉴 호버시 백그라운드 변경
    $('#qmenu ul li').hover(function () {
        let i = $(this).index();
        $('#qmenu').addClass('in' + (i + 1));
    }, function () {
        $('#qmenu').removeClass();
    })
    //호버시 배경 천천히 어떻게 바뀌게하는지???
    /* $('.qmenu ul li a').eq(0).hover(
        function () {
            $('.qmenu').css({
                'background-image': 'url(img/menubg1.png)',
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
            }).fadeIn()
        },
        function () {
            $('.qmenu').css({
                'background': 'transparent'
            })

        })
    $('.qmenu ul li a').eq(1).hover(
        function () {
            $('.qmenu').css({
                'background-image': 'url(img/menubg2.png)',
                'background-size': 'cover',
                'background-repeat': 'no-repeat'
            })
        },
        function () {
            $('.qmenu').css({
                'background': 'transparent'
            })

        })
    $('.qmenu ul li a').eq(2).hover(
        function () {
            $('.qmenu').css({
                'background-image': 'url(img/menubg3.png)',
                'background-size': 'cover',
                'background-repeat': 'no-repeat'
            })
        },
        function () {
            $('.qmenu').css({
                'background': 'transparent'
            })

        })
    $('.qmenu ul li a').eq(3).hover(
        function () {
            $('.qmenu').css({
                'background-image': 'url(img/menubg4.png)',
                'background-size': 'cover',
                'background-repeat': 'no-repeat'
            })
        },
        function () {
            $('.qmenu').css({
                'background': 'transparent'
            })

        })
    $('.qmenu ul li a').eq(4).hover(
        function () {
            $('.qmenu').css({
                'background-image': 'url(img/menubg5.png)',
                'background-size': 'cover',
                'background-repeat': 'no-repeat'
            })
        },
        function () {
            $('.qmenu').css({
                'background': 'transparent'
            })

        })
    $('.qmenu ul li a').eq(5).hover(
        function () {
            $('.qmenu').css({
                'background-image': 'url(img/menubg6.png)',
                'background-size': 'cover',
                'background-repeat': 'no-repeat'
            })
        },
        function () {
            $('.qmenu').css({
                'background': 'transparent'
            })

        }) */

    //어사이드 top 스크롤 이벤트
    $('aside ul li.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })
    //어사이드 클릭 이벤트
    $('aside ul li').eq(0).fadeIn('a').click(function () {
        $(this).toggleClass('wide')
    })
    $('aside ul li').eq(1).fadeIn('a').click(function () {
        $(this).toggleClass('wide')
    })

})