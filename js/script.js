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
        item.onclick = function () {
            if (window.innerWidth < 1024) {
                return;
            }
            var growDiv = item.querySelector('.dropdown-content');
            if (growDiv.clientHeight) {
                growDiv.style.height = 0;
            } else {
                var wrapper = item.querySelector('.dropdown-content-inner');
                growDiv.style.height = wrapper.clientHeight + "px";
            }
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
        header.style.height = `${maxHeight}px`;
    });
}
const moreInfoInteractivity = () => {
    document.querySelectorAll('.moreInfo').forEach( item => {
        item.querySelector('.moreInfo-button').onclick = function () {
            var growDiv = item.querySelector('.moreInfo-content');
            item.classList.toggle("active");
            if (growDiv.clientHeight) {
                growDiv.style.height = 0;
            } else {
                var wrapper = item.querySelector('.moreInfo-content-inner');
                growDiv.style.height = wrapper.clientHeight + "px";
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {

    handleHeader();
    heroVideoPlayer();
    dropdownInteractivity();
    faqHeightOptimalization();
    moreInfoInteractivity();

    window.onresize = function(event) {

        dropdownInteractivity();
        faqHeightOptimalization();

    };

});
