const headerMenu = document.getElementById("header-menu");
const headerToggle = document.getElementById("header-toggle");  

headerToggle.addEventListener("click", function(){
    const is_active = headerMenu.classList.contains('active');
    if (is_active) {
        headerMenu.classList.remove('active');
        return;
    }
    
    headerMenu.classList.add('active');

})

const companiesSlider = $('.companies-slider');

companiesSlider.owlCarousel({
    loop:true,
    margin: 10,
    responsiveClass:true,
    nav: false,
    dots: false,
    responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:5
        },
        1500: {
            items: 6
        }
    }
})

$('.companiesNext').click(function() {
    companiesSlider.trigger('next.owl.carousel');
})
$('.companiesPrev').click(function() {
    companiesSlider.trigger('prev.owl.carousel');
})

headerToggle.removeEventListener("click");