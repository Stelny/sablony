const headerMenu = document.getElementById("header-menu");
const headerToggle = document.getElementById("header-toggle");  

headerToggle.addEventListener("click", function(){
    const is_active = headerMenu.classList.contains('active');
    if (is_active) {
        headerMenu.classList.remove('active');
        return;
    }
    
    headerMenu.classList.add('active');

})


headerToggle.removeEventListener("click");