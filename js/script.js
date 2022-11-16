
$(document).ready(function(){
    $(".fancybox").fancybox({
        'hideOnContentClick': false
    });

    $('#headerMenuToggle').click(function() {
        $("#headerMenu").toggleClass("active");
    })

})
