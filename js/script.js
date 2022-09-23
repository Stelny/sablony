$(document).ready(function(){
    $(".homepage-slider").owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: false,
        dotsContainer: "#homepage-slider-dots"
    })


    $("#headerMenuToggle").click(function() {
        $("#headerMenu").toggleClass("active");
    })
})
