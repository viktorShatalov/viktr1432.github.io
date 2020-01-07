// slick-slider
$('.info-slider').slick({
    autoplay: false,
});
$('.product-slider_items').slick({
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }
    ]
});
// menu -mobile
$(document).ready(function () {
    $('.burger-menu').click(function () {
        $('.burger-menu,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})