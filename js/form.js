document.addEventListener("DOMContentLoaded", function () {
    const selectBox = document.getElementById("selectBox");
    const selectDropdown = document.getElementById("selectDropdown");
    const customSelect = document.getElementById("customSelect");
    const hiddenInput = document.getElementById("selectedValue");
    const options = document.querySelectorAll(".option");

    // Toggle dropdown on click
    selectBox.addEventListener("click", function () {
        customSelect.classList.toggle("open");
        selectBox.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
        if (!customSelect.contains(e.target)) {
            customSelect.classList.remove("open");
            selectBox.classList.remove("active");
        }
    });

    // Handle option selection
    options.forEach(option => {
        option.addEventListener("click", function () {
            const value = this.getAttribute("data-value");
            selectBox.textContent = this.textContent;
            hiddenInput.value = value;

            options.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");

            customSelect.classList.remove("open");
            selectBox.classList.remove("active");
        });
    });
});
