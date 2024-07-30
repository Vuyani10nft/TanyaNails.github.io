document.addEventListener('DOMContentLoaded', (event) => {
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
});

function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = imageSrc;

    // Add event listener to close modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function closeContactModal() {
    var contactModal = document.getElementById("contactModal");
    contactModal.style.display = "none";
}
