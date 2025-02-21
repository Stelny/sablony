function handleHeader() {
    const header = document.querySelector(".header");
    const headerToggle = document.getElementById("header-toggle");

    headerToggle.addEventListener("click", () => {
        header.classList.toggle("active");
    })
}

document.addEventListener('DOMContentLoaded', () => {
    handleHeader();
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-tarif-mobile");
    const paragraph = document.querySelector(".tarif-mobile");
    const icon = toggleButton.querySelector("svg");


    if (toggleButton && paragraph) {
        toggleButton.addEventListener("click", function () {
            paragraph.classList.toggle("hidden");
            if (icon) {
                icon.classList.toggle("rotate-180");
            }
        });
    }
});