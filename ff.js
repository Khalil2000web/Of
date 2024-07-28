        function openModal(element) {
            document.getElementById('myModal').style.display = "block";
            document.body.style.overflow = "hidden"; // Prevent scrolling
            document.getElementById('modalImage').src = element.src;
        }

        function closeModal() {
            document.getElementById('myModal').style.display = "none";
            document.body.style.overflow = "auto"; // Allow scrolling again
        }