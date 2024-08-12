document.addEventListener('DOMContentLoaded', (event) => {
    // Existing contact modal functionality
    const contactModal = document.getElementById("contactModal");
    const contactBtn = document.getElementById("contactBtn");
    const contactClose = contactModal.querySelector(".close");

    contactBtn.onclick = function() {
        contactModal.style.display = "flex";
    }

    contactClose.onclick = function() {
        contactModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == contactModal) {
            contactModal.style.display = "none";
        }
    }

    // Lazy load Google Maps
    const mapContainer = document.getElementById('map-container');
    let mapLoaded = false;

    function loadMap() {
        if (!mapLoaded) {
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
        const rect = mapContainer.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            loadMap();
            window.removeEventListener('scroll', onScroll);
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Check on load in case already in view
});

// Existing image modal functionality
function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    
    // Ensure no duplicate images are added
    if (modalImage.src !== imageSrc) {
        modal.style.display = "block";
        modalImage.src = imageSrc;

        // Add event listener to close modal when clicking outside the image
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function closeContactModal() {
    var contactModal = document.getElementById("contactModal");
    contactModal.style.display = "none";
}
