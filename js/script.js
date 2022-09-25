$(document).ready(function(){
    $(".homepage-slider").owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: false,
        dotsContainer: "#homepage-slider-dots"
    })

    const brands_slider = $('.brands-slider');
    brands_slider.owlCarousel({
        loop: true,
        items: 7,
        dots: false,
        nav: false,
        margin: 20,
        responsive: {
            0: {
                items: 3,
            },
            776: {
                items: 4,
            },
            991: {
                items: 5, 
            },
            1200: {
                items: 7,
            }
        }
    })

    $('.brands-left').click(function() {
        brands_slider.trigger('prev.owl.carousel');
    })
    $('.brands-right').click(function() {
        brands_slider.trigger('next.owl.carousel')
    })


    $("#headerMenuToggle").click(function() {
        $("#headerMenu").toggleClass("active");
    })
})
