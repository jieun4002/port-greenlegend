$(function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay:true,
        speed : 1500,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    // video modal 1
    $('main .video-wrap .video-box .text img').on('click',function(){
        $('main .video-wrap .video-modal').css('display','block');
        $('main .backdrop').css('display','block')
        $('main .video-wrap .video-modal .modal-box').css('transform','none')
        $('body').addClass('modal-open')
    });
    $('main .video-wrap .video-modal').on('click',function(){
        $(this).css('display','none');
        $('main .backdrop').css('display','none')
        $('body').removeClass('modal-open')
    });
    // video modal 2
    $('.recipe-video .video-container .text .video-button-img img').on('click',function(){
        $('.recipe-video .video-modal').css('display','block');
        $('main .backdrop').css('display','block')
        $('.recipe-video .video-modal .modal-box').css('transform','none')
        $('body').addClass('modal-open')
    });
    $('.recipe-video .video-modal').on('click',function(){
        $(this).css('display','none');
        $('main .backdrop').css('display','none')
        $('body').removeClass('modal-open')
    });
    // main product swiper
    var swiper = new Swiper(".fresh", {
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
        },
    });

    var swiper = new Swiper(".sausage", {
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
        },
    });
    var swiper = new Swiper(".frozen", {
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
        },
    });
    $('main .product-categories .categories-wrap .categories-box .categries').hover(function(){
        $(this).children().find('img').css('opacity','0.5')
    },function(){
        $(this).children().find('img').css('opacity','1')
    })

    
    $('.gnb li .dropdown-menu .why').on('click',function(){
        var offset = $('#why').offset()
        $('html,body').animate({scrollTop : offset.top-0}, 800);
    });
        
    $('.gnb li .dropdown-menu .intro').on('click',function(){
        var offset = $('#greenlegendintro').offset()
        $('html,body').animate({scrollTop : offset.top-250}, 800);
    });
    $('.gnb li .dropdown-menu .product').on('click',function(){
        var offset = $('#product').offset()
        $('html,body').animate({scrollTop : offset.top-190}, 800);
    });
    $('.gnb li .dropdown-menu .video').on('click',function(){
        var offset = $('#recipevideo').offset()
        $('html,body').animate({scrollTop : offset.top-190}, 800);
    });
});

