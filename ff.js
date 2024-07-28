
    function openModal(element) {
        document.getElementById('myModal').style.display = "block";
        document.body.classList.add('modal-open'); // Add class to hide scrollbar and fix body
        document.getElementById('modalImage').src = element.src;
    }

    function closeModal() {
        document.getElementById('myModal').style.display = "none";
        document.body.classList.remove('modal-open'); // Remove class to restore scrollbar and body movement
    }