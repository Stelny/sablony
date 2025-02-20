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