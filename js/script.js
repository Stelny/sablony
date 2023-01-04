

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
})();


const removeAllClass = (elems, className) => {
    for (let i = 0; i < elems.length; i++) {
        elems[i].parentElement.classList.remove(className);
    }
}
