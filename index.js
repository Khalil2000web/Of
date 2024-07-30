
function openModal(element) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImage.src = element.src;
    modalImage.style = element.getAttribute('data-modal-style');
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    document.querySelector('.gallery').style.overflowY = 'hidden';
    document.querySelector('.gallery').style.touchAction = 'none';
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
    document.body.style.overflow = 'auto';
    document.body.style.touchAction = '';
    document.querySelector('.gallery').style.overflowY = 'auto';
    document.querySelector('.gallery').style.touchAction = '';
}