document.addEventListener('DOMContentLoaded', () => {
    // Modal Functionality
    window.openModal = function(imageSrc) {
        const modal = document.getElementById("myModal");
        const modalImage = document.getElementById("modalImage");

        if (modal && modalImage) {
            modalImage.src = imageSrc;
            modal.style.display = "block";
        } else {
            console.error("Modal or modalImage not found");
        }
    }

    window.closeModal = function() {
        const modal = document.getElementById("myModal");
        if (modal) {
            modal.style.display = "none";
        }
    }

    // Close the modal when clicking outside of the image
    const modal = document.getElementById("myModal");
    if (modal) {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // Attach event listeners to images
    const imageElements = document.querySelectorAll('.thumbnail');
    imageElements.forEach(image => {
        image.addEventListener('click', () => {
            openModal(image.src);
        });
    });

    // Contact Modal Functionality
    const contactModal = document.getElementById("contactModal");
    const contactBtn = document.getElementById("contactBtn");
    const contactClose = contactModal?.querySelector(".close");

    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            if (contactModal) {
                contactModal.style.display = "flex";
            }
        });
    }

    if (contactClose) {
        contactClose.addEventListener('click', () => {
            if (contactModal) {
                contactModal.style.display = "none";
            }
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === contactModal) {
            if (contactModal) {
                contactModal.style.display = "none";
            }
        }
    });

    // Lazy Load Google Maps
    const mapContainer = document.getElementById('map-container');
    let mapLoaded = false;

    function loadMap() {
        if (!mapLoaded && mapContainer) {
            const mapIframe = document.createElement('iframe');
            mapIframe.src = "https://www.google.com/maps/embed?pb=!4v1690203570123!6m8!1m7!1sQkKCXyQimV18IECUrqKXcQ!2m2!1d-33.0032101!2d27.901264!3f148.73!4f15.76!5f0.7820865974627469";
            mapIframe.style.width = '100%';
            mapIframe.style.height = '100%';
            mapIframe.style.border = '0';
            mapIframe.allowFullscreen = true;
            mapIframe.loading = 'lazy';
            mapIframe.referrerPolicy = 'no-referrer-when-downgrade';
            mapContainer.appendChild(mapIframe);
            mapLoaded = true;
        }
    }

    function onScroll() {
        if (mapContainer) {
            const rect = mapContainer.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                loadMap();
                window.removeEventListener('scroll', onScroll);
            }
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Check on load in case already in view
});
