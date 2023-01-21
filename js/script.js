$(document).ready(function(){

    const headerMenuToggle = document.getElementById("headerMenuToggle");
    const headerMenu  = document.getElementById("headerMenu");

    headerMenuToggle.addEventListener("click", function() {
        if (headerMenu.classList.contains("active")) {
            headerMenu.classList.remove("active");
            return;
        }
        headerMenu.classList.add("active");
    });

    $('.homepage-slider').owlCarousel({
        loop:false,
        nav:false,
        items: 1
    })

    $('.reference-slider').owlCarousel({
        loop:true,
        nav: true,
        items: 1,
        margin: 20,
        dots: false,
        responsive: {
            1200: {
                items: 5
            },
            991: {
                items: 4
            },
            776: {
                items: 3
            },
            600: {
                items: 2
            }

        }
    })

    removeEventListener("click", headerMenuToggle);
})

