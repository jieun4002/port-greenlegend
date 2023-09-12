//jQuery 즉시 실행함수 써야함

$(function () {
    AOS.init();
    //메뉴 click
    $('.header-wrap .menu-wrap li > a').on('click', function () {
        $(this).css('color', '#1d9e18;')
    });

    //메뉴 hover

    // $('.header-wrap .menu-wrap li').hover(function(){
    //     $(this).children('div').show()


    // 
    $(document).ready(function () {
        if (window.innerWidth > 992) {
            $('.header-wrap .menu-wrap li').hover(function () {
                $(this).children('div').show();
            }, function () {
                $(this).children('div').hide()
            });
        }
    });


    $('.gnb li .link1').on('click', function () {
        $('.product-gallery1').addClass('active');
        $('.product-gallery1').siblings().removeClass('active')
        var offset = $('#product-box-fresh').offset()
        $('html,body').animate({
            scrollTop: offset.top - 250
        }, 1000);
    });

    $('.gnb li .link2').on('click', function () {
        $('.product-gallery2').addClass('active');
        $('.product-gallery2').siblings().removeClass('active')
        var offset = $('#product-box-sausage').offset()
        $('html,body').animate({
            scrollTop: offset.top - 250
        }, 1000);
    });

    $('.nav-btn').on('click', function () {
        $('.header-wrap .menu-wrap').slideToggle();
    });





})