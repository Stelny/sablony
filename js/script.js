function handleHeader() {
    const header = document.querySelector(".header");
    const fastDown = document.querySelector(".fast-down");

    const toggleHeader = document.getElementById("toggle-header");
    const menuHeader = document.getElementById("menu-header");

    const toggleHeaderSmall = document.getElementById("toggle-header-small");
    const menuHeaderSmall = document.getElementById("menu-header-small");


    const headerToggleBrand = document.getElementById("header-toggle-brand");

    // Handle scroll behavior for the header
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("scrolling");
        } else {
            header.classList.remove("scrolling");
        }

        if (window.scrollY > 150) {
            fastDown.classList.add("opacity-0")
        } else {
            fastDown.classList.remove("opacity-0")
        }
    });

    // Handle toggle header menu
    toggleHeader.addEventListener("click", () => {
        const isActive = menuHeader.classList.toggle("active");
        toggleHeader.classList.toggle("active");

        if (isActive) {
            // Disable body scroll and enable scrolling in the header menu
            document.body.style.overflow = "hidden";
            menuHeader.style.overflowY = "auto";
        } else {
            // Re-enable body scroll
            document.body.style.overflow = "";
            menuHeader.style.overflowY = "";
        }
    });

    toggleHeaderSmall.addEventListener("click", () => {
        const isActive = menuHeaderSmall.classList.toggle("active");
        toggleHeaderSmall.classList.toggle("active");

        if (isActive) {
            // Disable body scroll and enable scrolling in the header menu
            document.body.style.overflow = "hidden";
            menuHeaderSmall.style.overflowY = "auto";
        } else {
            // Re-enable body scroll
            document.body.style.overflow = "";
            menuHeaderSmall.style.overflowY = "";
        }
    });


    headerToggleBrand.addEventListener("click", () => {
        headerToggleBrand.classList.toggle("active");
    })






}

document.addEventListener('DOMContentLoaded', () => {
    handleHeader();
});