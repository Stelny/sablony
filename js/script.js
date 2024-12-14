
function handleHeader() {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("scrolling");
        } else {
            header.classList.remove("scrolling");
        }
    });


    const toggleHeader = document.getElementById("toggle-header");
    const menuHeader = document.getElementById("menu-header");
    toggleHeader.addEventListener("click", () => {
        menuHeader.classList.toggle('active');
        toggleHeader.classList.toggle("active");
    })
}


document.addEventListener('DOMContentLoaded', () => {
    handleHeader();
});