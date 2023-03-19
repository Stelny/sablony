$(document).ready(function(){


    const heroSlider = $('.hero-slider')
    heroSlider.owlCarousel({
        loop:true,
        margin: 0,
        nav: false,
        dots: true,
        items: 1,
        singleItem: true,
        stagePadding: 0,
        dotsContainer: "#banner-dots",
        animateOut: 'fadeOut'
        
    })


    const headerMenu = document.getElementById("headerMenu");
    const headerMenuOpen = document.getElementById("headerMenuOpen"); 
    const headerMenuClose = document.getElementById("headerMenuClose");

    headerMenuOpen.addEventListener("click", function() {
        headerMenu.classList.add('active');
    })

    headerMenuClose.addEventListener("click", function() { 
        headerMenu.classList.remove('active');
    });

    $(".prevHero").click(function(){
        heroSlider.trigger("prev.owl.carousel");
    })
    $(".nextHero").click(function(){
        heroSlider.trigger("next.owl.carousel");
    })

    $("#configurator li").mouseenter(function() {
        const id = $(this).attr("data-id");
        const elem = $(`.configurator-number[data-id="${id}"]`);
        elem.addClass("active");
    })
    .mouseleave(function() {
        const id = $(this).attr("data-id");
        const elem = $(`.configurator-number[data-id="${id}"]`);
        elem.removeClass("active");
    });

    $(".configurator-number").mouseenter(function() {
        const id = $(this).attr("data-id");
        const elem = $(`#configurator li[data-id="${id}"]`);
        elem.addClass("active");
    })
    .mouseleave(function() {
        const id = $(this).attr("data-id");
        const elem = $(`#configurator li[data-id="${id}"]`);
        elem.removeClass("active");
    });


    removeEventListener("click", headerMenuClose);
    removeEventListener("click", headerMenuOpen)
})
