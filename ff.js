function openModal(element) {
    const modal = document.getElementById('myModal');
    modal.style.display = "block";
    document.body.classList.add('modal-open'); // Add class to hide scrollbar and fix body
    document.getElementById('modalImage').src = element.src;

    // Optionally, ensure viewport resizing is handled correctly
    handleViewportChange();
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = "none";
    document.body.classList.remove('modal-open'); // Remove class to restore scrollbar and body movement

    // Optionally, handle viewport change restoration
    handleViewportChange();
}

function handleViewportChange() {
    // Force a repaint if needed
    document.body.style.display = 'none';
    document.body.offsetHeight; // Trigger a reflow
    document.body.style.display = '';
}

// Optional: Listen for resize events to adjust if necessary
window.addEventListener('resize', handleViewportChange);