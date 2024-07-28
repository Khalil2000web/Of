    function openModal(element) {
        document.getElementById('myModal').style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling
        document.body.style.paddingRight = "15px"; // Adjust for scrollbar width if necessary
        document.getElementById('modalImage').src = element.src;
    }

    function closeModal() {
        document.getElementById('myModal').style.display = "none";
        document.body.style.overflow = "auto"; // Allow scrolling again
        document.body.style.paddingRight = "0"; // Reset padding
    }
