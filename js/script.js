$(document).ready(function(){
    const video = document.getElementById('startVideo');
    video && video.addEventListener('ended',handleEndVideo,true);
    function handleEndVideo() {
        video.classList.add('end');
    }

    $(".question-pick-left").click(function() {
        const items = document.getElementsByClassName('question-pick-item');
        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains('active')) {
                items[i].classList.remove('active');
                if (i == 0) {
                    i = items.length-1;
                } else {
                    i = i-1;
                }
                console.log(i);
                items[i].classList.add('active');
            }
        }
    });
    
    $(".question-pick-right").click(function() {
        const items = document.getElementsByClassName('question-pick-item');
        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains('active')) {
                items[i].classList.remove('active');
                if (i == items.length-1) {
                    i = 0;
                } else {
                    i += 1;
                }

                console.log(i);
                items[i].classList.add('active');
            }
        }
    });
})
