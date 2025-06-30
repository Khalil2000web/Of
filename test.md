---
layout: default
title: Khalil
author: "Khalil"
published: true
---

<style>#scroll-container{overflow-y:scroll;-webkit-overflow-scrolling:touch;position:relative;transform:translateZ(0);overscroll-behavior:contain}.gallery{display:flex;flex-direction:column;gap:0;}.gallery-item{border:none;background:none;padding:0;cursor:pointer;display:block;width:100%;text-align:left}.gallery-item img{width:100%;display:block;pointer-events:none;user-select:none}.modal{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#000;display:none;flex-direction:column;align-items:center;justify-content:flex-start;z-index:9999;overflow:hidden;-webkit-overflow-scrolling:touch}.modal-content::-webkit-scrollbar{display:none}.modal.open{display:flex}.modal-content{position:relative;width:100%;height:100vh;overflow-y:auto;-webkit-overflow-scrolling:touch;text-align:center;overscroll-behavior:none;scrollbar-width:none;-ms-overflow-style:none;touch-action:pan-x pan-y}.modal-content img{width:100%;height:auto;max-width:100%;pointer-events:none;padding-bottom:140px}.controls{position:absolute;top:15px;left:50%;transform:translateX(-50%);z-index:10000;display:flex;align-items:center;justify-content:space-between;width:90%;flex-wrap: wrap;}#closeBtn,#prevBtn,#nextBtn{background:none;border:none;color:var(--text-color);font-size:15px;cursor:pointer;font-family:var(--font-main);text-transform:uppercase;touch-action:manipulation;padding:5px 10px}.modal button:focus{outline:2px solid #719ecec5;outline-offset:4px}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0} </style>

<div class="modal" id="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" aria-describedby="modalImg" hidden><div class="modal-content"><h2 id="modalTitle" class="sr-only">Image preview</h2><div class="controls"><button id="prevBtn" aria-label="Previous image">Previous</button><button id="nextBtn" aria-label="Next image">Next</button><button id="closeBtn" aria-label="Close modal">Close</button></div><img id="modalImg" src="" alt="" /></div></div>

<div id="scroll-container" tabindex="0">
<div class="gallery" role="list">

<button class="gallery-item" role="listitem" aria-label="Open image 1"><img src="https://picsum.photos/id/1011/600/900" alt="A scenic mountain with a lake" /></button>
<button class="gallery-item" role="listitem" aria-label="Open image 2"><img src="https://picsum.photos/id/1012/600/1200" alt="Forest with tall trees" /></button>
<button class="gallery-item" role="listitem" aria-label="Open image 3"><img src="https://picsum.photos/id/1013/600/2000" alt="City skyline at sunset" /></button>
<button class="gallery-item" role="listitem" aria-label="Open image 4"><img src="https://beyon.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffvrrd1kn%2Fproduction%2F5b2b7a6945418c3421f640cdcd50205d86dde730-3000x2023.jpg%3Fw%3D2000%26format%3Dauto%26q%3D90&w=3840&q=75" alt="Beyoncé performing on stage" /></button>
<button class="gallery-item" role="listitem" aria-label="Open image 5"><img src="https://beyon.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffvrrd1kn%2Fproduction%2F561b9391273ef3abdb4cc24d5b3f4ba042b53fe6-9520x6336.jpg&w=1200&q=85" alt="Beyoncé close-up portrait" /></button>

</div>
</div>


<script>
  const scrollContainer = document.getElementById('scroll-container');
  const galleryButtons = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.getElementById('closeBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;
  let scrollPosition = 0;

  let focusableElements = [];
  let firstFocusableElement = null;
  let lastFocusableElement = null;

  function updateModal(index) {
    currentIndex = index;
    const img = galleryButtons[currentIndex].querySelector('img');
    modalImg.src = img.src;
    modalImg.alt = img.alt || 'Modal image preview';

    prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : '';
    nextBtn.style.pointerEvents = currentIndex === galleryButtons.length - 1 ? 'none' : '';
  }

  function trapFocus() {
    focusableElements = modal.querySelectorAll('button');
    firstFocusableElement = focusableElements[0];
    lastFocusableElement = focusableElements[focusableElements.length - 1];

    modal.addEventListener('keydown', handleKeyDown);
  }

  function releaseFocus() {
    modal.removeEventListener('keydown', handleKeyDown);
  }

  function handleKeyDown(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      }
    } else if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      if (currentIndex > 0) updateModal(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      if (currentIndex < galleryButtons.length - 1) updateModal(currentIndex + 1);
    }
  }

  function lockScrollContainer() {
    scrollPosition = window.scrollY;
    scrollContainer.style.position = 'fixed';
    scrollContainer.style.top = `-${scrollPosition}px`;
    scrollContainer.style.left = '0';
    scrollContainer.style.right = '0';
    scrollContainer.style.overflow = 'hidden';
    scrollContainer.style.width = '100%';
  }

  function unlockScrollContainer() {
    scrollContainer.style.position = '';
    scrollContainer.style.top = '';
    scrollContainer.style.left = '';
    scrollContainer.style.right = '';
    scrollContainer.style.overflow = '';
    scrollContainer.style.width = '';
    window.scrollTo(0, scrollPosition);
  }

  function openModal(index) {
    updateModal(index);
    modal.hidden = false;
    modal.classList.add('open');
    document.body.setAttribute('aria-hidden', 'true');
    trapFocus();
    lockScrollContainer();
    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.hidden = true;
    document.body.setAttribute('aria-hidden', 'false');
    releaseFocus();
    unlockScrollContainer();
    galleryButtons[currentIndex].focus();
  }

  galleryButtons.forEach((btn, i) => {
    btn.addEventListener('click', () => openModal(i));
  });

  closeBtn.addEventListener('click', closeModal);
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) updateModal(currentIndex - 1);
  });
  nextBtn.addEventListener('click', () => {
    if (currentIndex < galleryButtons.length - 1) updateModal(currentIndex + 1);
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
</script>