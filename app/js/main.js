document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(document).ready(function () {
    $(".users__slider").slick({
        // dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        // autoplay: true,
        // autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    $(".stages__steps").slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: "unslick"
            }
        ]

    });

    $('.btn-modal').on('click', function () {
        console.log('click');
        $('.modal').css("display", "block");
    });
    $('.closeModal, .modal').on('click', function () {
        $('.modal').css("display", "none");
    });

});

