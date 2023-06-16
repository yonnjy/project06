$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._ani_').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        });
    });

    $('.main_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_br .arrows .left').on('click', function () {
        $('.brand_slide').slick('slickPrev');
    });
    $('.main_br .arrows .right').on('click', function () {
        $('.brand_slide').slick('slickNext');
    });

    $('.brand_slide').slick({
        arrows: false,
        dots: true,
    });

    $('.tab_list li').on('click', function (event) {
        event.preventDefault();

        let idx = $(this).index();
        $(this).addClass('on')
            .siblings().removeClass('on');

        $('.pro_con .con').eq(idx).addClass('on')
            .siblings().removeClass('on');
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.to_top').fadeIn(50);
        } else {
            $('.to_top').fadeOut(50);
        }
    });

    $('.compani_site span').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })
});