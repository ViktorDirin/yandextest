$(document).ready(function () {
    $(".users__slider").slick({
        // dots: true,

        arrows: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    // $let('ttt') = $('.users__slider').slick('slickCurrentSlide');
    // // $('.your-element').slick('setPosition');
    // console.log($ttt);
});