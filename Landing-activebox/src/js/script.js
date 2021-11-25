$(document).ready(function () {
    $(".slider").slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: "ease",
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
        draggable: true,
        swape: true,
        touchTheshold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        responsive:[
            { 
                breakpoint: 650,
                settings: {
                    arrows: false,
            }
        }]
    });
    $('.slider').slick('setPosition');
});