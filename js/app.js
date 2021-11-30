$(document).ready(function () {

    /* scroll */
    let header = $('.header');
    let scrollOffset = 0;

    $(window).on('scroll', function () {
        scrollOffset = $(this).scrollTop();

        if (scrollOffset >= 20) {
            header.addClass('active');
        } else {
            header.removeClass('active');
        }
    });

    /* burger */

    $('.burger').on('click', function () {
        $('.menu').addClass('active');
        $('.menu-box').addClass('active');
    });

    $('.menu__btn').on('click', function () {
        $('.menu').removeClass('active');
        $('.menu-box').removeClass('active');
    });

    $('.menu-box').on('click', function () {
        $('.menu').removeClass('active');
        $('.menu-box').removeClass('active');

    });

    $('.menu__link').on('click', function () {
        $('.menu').removeClass('active');
        $('.menu-box').removeClass('active');
    });

    $('.menu').on('click', function (event) {
        event.stopPropagation();
    });

    /* modal */


    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');

    modalCall.on('click', function (event) {
        event.preventDefault();

        let $this = $(this),
            modalId = $this.data('modal');

        $(modalId).addClass('show');
        $('body').addClass('no-scroll');
    });

    modalClose.on('click', function (event) {
        event.preventDefault();

        let $this = $(this),
            modalParent = $this.parents('.modal');

        modalParent.removeClass('show');
        $('body').removeClass('no-scroll');
        $('.modal__slider').slick({
            prevArrow: ' <button class="click__arrow prev"><img src="images/icons/arrow-slide.svg" alt=""></button>',
            nextArrow: '<button class="click__arrow next"><img src="images/icons/arrow-slide.svg" alt=""></button>',
        });
    });

    $('.modal').on('click', function (event) {
        $(this).removeClass('show');
        $('body').removeClass('no-scroll');
    });

    $('.modal__content').on('click', function (event) {
        event.stopPropagation();
    });

    $('.modal__content').on('input', '.input-words', function () {
        this.value = this.value.replace(/[^a-zа-яё\s]/gi, '');
    });
    $('.consultation__form').on('input', '.input-words', function () {
        this.value = this.value.replace(/[^a-zа-яё\s]/gi, '');
    });


    /* slider */
    $('.gallery__slider').slick({
        prevArrow: ' <button class="click__arrow prev"><img src="images/icons/arrow-slide.svg" alt=""></button>',
        nextArrow: '<button class="click__arrow next"><img src="images/icons/arrow-slide.svg" alt=""></button>',
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.modal__gallery-slider').slick({
        prevArrow: ' <button class="click__arrow prev"><img src="images/icons/arrow-slide.svg" alt=""></button>',
        nextArrow: '<button class="click__arrow next"><img src="images/icons/arrow-slide.svg" alt=""></button>',
    });


    $(".reviews__item-text").elimore({
        maxLength: 228,
        moreText: "Читать полностью",
        lessText: "Свернуть",
        showOnly: true,
    });

    $('[data-fancybox]').fancybox();

});
