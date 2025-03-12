function handleHeader() {
    const header = document.querySelector(".header");
    const headerToggle = document.getElementById("header-toggle");

    headerToggle.addEventListener("click", () => {
        header.classList.toggle("active");
    })
}

const heroVideoPlayer = () => {
    document.querySelectorAll(".heroVideo-button, .heroVideo-video").forEach(element => {
        element.addEventListener("click", function (event) {
            const videoEl = document.querySelector(".heroVideo-video");
            const buttonEl = document.querySelector(".heroVideo-button");
    
            const isVideoPlaying = (videoEl) => !!(videoEl.currentTime > 0 && !videoEl.paused && !videoEl.ended && videoEl.readyState > 2);
    
            if (event.target.id === "heroVideo") {
                event.preventDefault();
            }
    
            if (isVideoPlaying(videoEl)) {
                videoEl.pause();
                buttonEl.style.display = "block";
            } else {
                videoEl.play();
                buttonEl.style.display = "none";
            }
        });
    });
}

const dropdownInteractivity = () => {
    document.querySelectorAll('.dropdown').forEach( item => {
        let growDiv = item.querySelector('.dropdown-content');
        item.onclick = function () {
            item.classList.toggle("active");
            if (growDiv.clientHeight) {
                growDiv.style.height = 0;
            } else {
                let wrapper = item.querySelector('.dropdown-content-inner');
                growDiv.style.height = wrapper.clientHeight + "px";
            }
        }
        if (window.innerWidth < 1024) {
            growDiv.style.height = '';
            item.classList.remove("active");
        }
    });
}

const faqHeightOptimalization = () => {
    
    const dropdownHeaders = document.querySelectorAll(".dropdown-header");
    let maxHeight = 0;

    dropdownHeaders.forEach(header => {
        header.style.height = '';
        const currentHeight = header.offsetHeight;
        
        if (currentHeight > maxHeight) {
            maxHeight = currentHeight;
        }
    });

    dropdownHeaders.forEach(header => {
        if (window.innerWidth < 1024) {
            header.style.height = '';
        } else {
            header.style.height = `${maxHeight}px`;
        }
    });
    
}

const moreInfoInteractivity = () => {
    document.querySelectorAll('.moreInfo').forEach( item => {
        item.querySelector('.moreInfo-button').onclick = function () {
            let growDiv = item.querySelector('.moreInfo-content');
            item.classList.toggle("active");
            if (growDiv.clientHeight) {
                growDiv.style.height = 0;
            } else {
                let wrapper = item.querySelector('.moreInfo-content-inner');
                growDiv.style.height = wrapper.clientHeight + "px";
            }
        }
    });
}

const handlePopups = () => {
    document.querySelectorAll('.popup').forEach( item => {
        item.querySelectorAll('.popup-button').forEach( btn => {
            btn.onclick = function () {
                let content = item.querySelector('.popup-content');
                content.classList.toggle("active");
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {

    handleHeader();
    heroVideoPlayer();
    dropdownInteractivity();
    faqHeightOptimalization();
    moreInfoInteractivity();
    handlePopups();

    window.onresize = function(event) {

        dropdownInteractivity();
        faqHeightOptimalization();

    };

});
