//jQuery 즉시 실행함수 써야함


$(function () {
    AOS.init();
    var swiper = new Swiper(".fresh-box", {
        observer: true,
        observeParents: true,
        centerInsufficientSlides: true,
        updateOnWindowResize: true,
        slidesPerView: 1,
        spaceBetween: 20,
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        effect: 'fade',
        speed: 3000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });

    var swiper = new Swiper(".sausage-box", {
        observer: true,
        observeParents: true,
        centerInsufficientSlides: true,
        updateOnWindowResize: true,
        slidesPerView: 1,
        spaceBetween: 20,
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        effect: 'fade',
        speed: 3000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });

    var swiper = new Swiper(".frozen-box", {
        observer: true,
        observeParents: true,
        centerInsufficientSlides: true,
        updateOnWindowResize: true,
        slidesPerView: 1,
        spaceBetween: 20,
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        effect: 'fade',
        speed: 3000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });
    //  제품 1
    $('.fresh-box').click(function () {
        $('.product-gallery1').addClass('active');
        $('.product-gallery1').siblings().removeClass('active');
        $('.product .categories .categorie-box .fresh-box .ractang').css('display', 'block')
        var offset = $('#product-box-fresh').offset();
        $('html,body').animate({
            scrollTop: offset.top - 300
        }, 1000);
    });

    // 제품 2
    $('.sausage-box').on('click', function () {
        $('.product-gallery2').addClass('active');
        $('.product-gallery2').siblings().removeClass('active');
        $('.product .categories .categorie-box .sausage-box .ractang').css('display', 'block');
        var offset = $('#product-box-sausage').offset();
        $('html,body').animate({
            scrollTop: offset.top - 300
        }, 1000);
    });


    // 제품 3
    $('.frozen-box').on('click', function () {
        $('.product-gallery3').addClass('active');
        $('.product-gallery3').siblings().removeClass('active');
        $('.product .categories .categorie-box .frozen-box .ractang').css('display', 'block')
        var offset = $('#product-box-frozen').offset();
        $('html,body').animate({
            scrollTop: offset.top - 300
        }, 1000);
    });

    // 해더 드롭다운 메뉴 클릭했을 때 product display block으로 클래스 값 추가 
    window.onload = scrollToAnchor();

    function scrollToAnchor() {
        var hash = window.location.hash;
        if (hash) {
            var el = document.querySelector(hash);
            if (!el.classList.contains('active')) {
                el.classList.add('active');
            }
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 300
            }, 1000);
        }
    }

    $('.gnb li .link1').on('click', function () {
        var hash = $(this).data('hash');
        var el = document.querySelector(hash);
        $('.product-gallery1').addClass('active');
        $('.product-gallery1').siblings().removeClass('active')
        el.classList.add('active');
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 450
        }, 1000);
    });

    $('.gnb li .link2').on('click', function () {
        var hash = $(this).data('hash');
        var el = document.querySelector(hash);
        $('.product-gallery2').addClass('active');
        $('.product-gallery2').siblings().removeClass('active')
        el.classList.add('active');
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 450
        }, 1000);
    });

    $('.gnb li .link3').on('click', function () {
        var hash = $(this).data('hash');
        var el = document.querySelector(hash);
        $('.product-gallery3').addClass('active');
        $('.product-gallery3').siblings().removeClass('active')
        el.classList.add('active');
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 450
        }, 1000);
    });


    // product
    var swiper = new Swiper(".product-gallery1 .swiper-container", {
        observer: true,
        observeParents: true,
        slidesPerView: 6,
        spaceBetween: 20,
        // autoplay: {
        //     delay: 2500,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 1440px
            375: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            // when window width is >= 1440px
            1024: {
                slidesPerView: 3,
            },
            // when window width is >= 1440px
            1280: {
                slidesPerView: 4,
            },
            // when window width is >= 1280px
            1440: {
                slidesPerView: 5,
            }
        }
    });

    var swiper = new Swiper(".product-gallery2 .swiper-container", {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: true,
        // autoplay: {
        //     delay: 2500,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 1440px
            375: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            // when window width is >= 1440px
            1024: {
                slidesPerView: 3,
            },
            // when window width is >= 1440px
            1280: {
                slidesPerView: 4,
            },
            // when window width is >= 1280px
            1440: {
                slidesPerView: 5,
            }
        }
    });

    var swiper = new Swiper(".product-gallery3 .swiper-container", {
        observer: true,
        observeParents: true,
        slidesPerView: 6,
        spaceBetween: 20,
        // autoplay: {
        //     delay: 2500,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            375: {
                slidesPerView: 1,
            },
            // when window width is >= 1440px
            576: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            // when window width is >= 1440px
            1024: {
                slidesPerView: 3,
            },
            // when window width is >= 1440px
            1280: {
                slidesPerView: 4,
            },
            // when window width is >= 1280px
            1440: {
                slidesPerView: 5,
            }
        }
    });





    // recipe page
    var swiper = new Swiper(".recipe-box .swiper-container", {
        // observer : true,
        // observeParents: true,
        slidesPerView: 3,
        spaceBetween: 30,
        // autoplay: {
        //     delay: 2500,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        breakpoints: {
            375: {
                slidesPerView: 1,
            },
            // when window width is >= 1440px
            575: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            }
        }
    });
    // 문의하기 버튼 클릭하면 고객별 항목 보여지게

    //고객 문의 눌렀을때
    $('.contact-tab .customer a').click(function () {
        $('.custom-form').addClass('active');
        $('.company-form').removeClass('active');
        $(this).parent().addClass('select');
        $(this).parent().siblings().removeClass('select');
    });


    //사업 제휴문의 눌렀을때
    $('.contact-tab .company a').click(function () {
        $('.company-form').addClass('active');
        $('.custom-form').removeClass('active');
        $(this).parent().addClass('select');
        $(this).parent().siblings().removeClass('select');
    });


    $('.news-wrap .list-item a').click(function () {
        $(this).siblings('.modal').addClass('popup');

    });


    $('.close').click(function () {
        $(this).parent('.modal').removeClass('popup');
    });

})