function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

$(document).ready(function(){
    $(".fancybox").fancybox({
        'hideOnContentClick': false
    });

    $('#headerMenuToggle').click(function() {
        $("#headerMenu").toggleClass("active");
    })


    $("#show-more").click(function() {
        const openCount = $(this).attr("data-id");
        const add = 12;
        const items = $(".products-gallery-item")
        if (items.length <= openCount) return;
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('inactive');
            if (i === parseInt(openCount)+add) {
                break;
            }
        }
        $(this).attr("data-id", parseInt(openCount) + parseInt(add));
        if (items.length <= parseInt(openCount) + parseInt(add)) {
            $(this).css("display", "none");
        }

        
    })

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-50
        }, 500);
    });
    
    const ids = ["home", "our-story", "products", "contact"]

    document.addEventListener('scroll', function () {
        for (let i = 0; i < ids.length; i++) {
            const element = document.getElementById(ids[i]);
            if (isInViewport(element)) {
                $("#headerMenu ul li a").removeClass("active");
                $(`#${ids[i]}-it`).addClass("active");
                break;
            }
             
        }
    })

    $('.products-item').click(function(e) {
        e.preventDefault();
        const id = $(this).attr("id");
        $(".products-grid").removeClass('active');
        $(`#${id}-it`).addClass('active');
    })
    $('.products-section-link').click(function(e) {
        e.preventDefault();
        $(".products-grid").addClass('active');
        $('.products-section').removeClass("active");
    })
})
