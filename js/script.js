document.addEventListener("DOMContentLoaded", function () {
    const headerMenu = document.getElementById("headerMenu");
    const headerMenuToggle = document.getElementById("headerMenuToggle");

    headerMenuToggle.addEventListener("click", function () {
        headerMenu.classList.toggle("active");
    });
});