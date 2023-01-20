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

    removeEventListener("click", headerMenuToggle);
})

