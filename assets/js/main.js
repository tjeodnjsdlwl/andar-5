$(function(){


    
    // const 
    // let 
    // var
    
    let lastSroll=0;

    $(window).scroll(function(){
        curr = $(this).scrollTop();
        if(curr > 0){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }


        if(curr > 100){
            if (curr > lastSroll) { //내릴때
                $('.fix-btn').removeClass('show')
            }else{ // 올릴때 라스트가더클때
                $('.fix-btn').addClass('show')
            }
            lastSroll = curr;
        }else{
            $('.fix-btn').removeClass('show')
        }


    })
    $(window).trigger('scroll'); //

    
    // header gnb 
    $('.gnb .group-nav .view-more').click(function(){
        $('.gnb .group-nav').toggleClass('on');
        $('.gnb .group-all').stop().slideToggle();
    })


    $('.menu').click(function(){
        $('.side-nav').addClass('on');
        $('body').addClass('hidden');
    })
    $('.side-nav .close,.dimmed').click(function(){
        $('.side-nav').removeClass('on');
        $('body').removeClass('hidden');
    })


    $('.side-nav .nav').click(function(e){
        e.preventDefault();
        $(this).toggleClass('on').siblings().slideToggle();
    })


    $('.search').click(function(e){
        e.preventDefault();
        $('.search-page').addClass('on');
    })
    $('.search-page .close').click(function(){
        $('.search-page').removeClass('on');
    })


    const bannerSlide = new Swiper('.banner-slide',{
        autoplay:{
            delay: 4000,
        },
        effect : 'fade', 
        fadeEffect: { 
        crossFade: true 
        },
        loop: true
    });
    const mainSlide = new Swiper('.main-slide',{

        autoplay:{
            delay:3000,

        },
        effect : 'fade', 
        fadeEffect: { 
        crossFade: true 
        },
        loop: true,
        pagination:{
            el:".pagination"
        }
    })






    // tab

    $('.sc-best .group-tab a').click(function(e){
        e.preventDefault();
        tab=$(this).data('tab');
        $('.sc-best .group-tab a').removeClass('active');
        $(this).addClass('active');

        $(tab).addClass('active').siblings().removeClass('active')
    })





    const subSlide = new Swiper('.sub-slide',{
        pagination:{
            el:".pagination"
        }

    })

    const itemSlide = new Swiper('.cate-slide',{
        slidesPerView : '2.2',
        spaceBetween : 10, 
        freeMode:true,
    })

});