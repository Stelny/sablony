document.addEventListener('DOMContentLoaded', () => {
    // Open Lightbox Function
    const openLightbox = (group, position) => {
        const images = document.querySelectorAll(`[data-group="${group}"] img`);
        const lightbox = document.querySelector('.lightbox');
        const imgElement = lightbox.querySelector('img');

        let currentIndex = parseInt(position) - 1;

        const updateLightboxImage = () => {
            const image = images[currentIndex];
            if (image) {
                imgElement.src = image.src;
                imgElement.alt = image.alt || `Image ${currentIndex + 1}`;
            }
        };

        const showNextImage = () => {
            if (currentIndex < images.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Loop back to the first image
            }
            updateLightboxImage();
        };

        const showPreviousImage = () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = images.length - 1; // Loop back to the last image
            }
            updateLightboxImage();
        };

        // Attach event listeners to navigation buttons
        const nextButton = lightbox.querySelector('.lightbox-next');
        const prevButton = lightbox.querySelector('.lightbox-prev');
        const closeButton = lightbox.querySelector('.lightbox-close');

        nextButton.onclick = (e) => {
            e.stopPropagation();
            showNextImage();
        };

        prevButton.onclick = (e) => {
            e.stopPropagation();
            showPreviousImage();
        };

        closeButton.onclick = () => {
            lightbox.style.display = 'none';
        };

        // Close lightbox on click outside the image or arrows
        lightbox.onclick = (e) => {
            if (!e.target.closest('img') && !e.target.closest('.lightbox-next') && !e.target.closest('.lightbox-prev')) {
                lightbox.style.display = 'none';
            }
        };

        // Display the lightbox and show the initial image
        lightbox.style.display = 'flex';
        updateLightboxImage();
    };

    // Add click event listener to parent <a> elements
    document.querySelectorAll('[data-group]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const group = anchor.getAttribute('data-group');
            const position = anchor.getAttribute('data-position');
            openLightbox(group, position);
        });
    });
});
