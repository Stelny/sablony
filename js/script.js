document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");

    menuToggle.addEventListener("click", function(e) {
        e.preventDefault();
        const menu = document.getElementById("menu");
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            return;
        }
        menu.classList.add('active');

    })

})
