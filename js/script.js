

(function() {
    const elems = document.getElementsByClassName("faq-item-question");
    for (let i = 0; i < elems.length; i++) {
        const element = elems[i];
        element.addEventListener("click", function(e) {
           const faq = e.target.parentElement;
           let exists = false;
           if (faq.classList.contains("show")) {
                exists = true;
            }
           removeAllClass(elems, "show")
           if (exists) return;
           faq.classList.add('show');
        })     
    }

    const removeAllClass = (elems, className) => {
        for (let i = 0; i < elems.length; i++) {
            elems[i].parentElement.classList.remove(className);
        }
    }
    
    const changeClassById = (className, className2, elem) => {
        if (elem.classList.contains(className)) {
            elem.classList.add(className2);
            elem.classList.remove(className);
            return;
        }
        elem.classList.add(className);
        elem.classList.remove(className2);
    }
    
    const changeHeaderColor = () => {
        setInterval(() => {
            const logo = document.getElementById("changeLogo");
            const logoGold = document.getElementById("changeLogoGold");
            const logoMobile = document.getElementById("changeLogoMobile");
            const logoGoldMobile = document.getElementById("changeLogoMobileGold");
            const btn = document.getElementById("changeBtn");
            changeClassById("btn-pink", "btn-gold", btn);
            idChange(logo, logoGold);
            idChange(logoMobile, logoGoldMobile);
        }, [10000])        
    }
    

    changeHeaderColor();

    const openHeader = document.getElementById("openHeader");
    const headerMenu = document.getElementById("headerMenu");

    openHeader.addEventListener("click", function() {
        if (headerMenu.classList.contains("active")) {
            headerMenu.classList.remove('active');
            return;
        }
        headerMenu.classList.add('active');
    });

})();

const idChange = (logo, logoGold) => {
    if (logo.classList.contains("active")) {
        logo.classList.remove('active');
        logoGold.classList.add('active');
    } else {
        logoGold.classList.remove('active');
        logo.classList.add('active');
    }
}
