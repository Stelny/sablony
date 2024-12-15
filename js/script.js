function handleHeader() {
    const header = document.querySelector(".header");
    const toggleHeader = document.getElementById("toggle-header");
    const menuHeader = document.getElementById("menu-header");

    // Handle scroll behavior for the header
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("scrolling");
        } else {
            header.classList.remove("scrolling");
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
}

document.addEventListener('DOMContentLoaded', () => {
    handleHeader();
});