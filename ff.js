function openModal(element) {
var modal = document.getElementById('myModal');
var modalImage = document.getElementById('modalImage');
modal.style.display = "block";
modalImage.src = element.src;
modalImage.style = element.getAttribute('data-modal-style');
document.body.style.overflow = 'hidden';
document.body.style.touchAction = 'none';   // For most modern browsers
document.body.style.msTouchAction = 'none'; // For Internet Explorer
document.body.style.webkitTouchAction = 'none'; // For older versions of Safari (if needed)
}
function closeModal() {
document.getElementById('myModal').style.display = "none";
document.body.style.overflow = 'auto';
document.body.style.touchAction = '';   // Reset for most modern browsers
document.body.style.msTouchAction = ''; // Reset for Internet Explorer
document.body.style.webkitTouchAction = ''; // Reset for older versions of Safari (if needed)
}