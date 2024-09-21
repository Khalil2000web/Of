  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");

  function checkButtons() {
    prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
    nextButton.style.display = currentIndex === mediaElements.length - 1 ? 'none' : 'block';
  }

  mediaElements.forEach((media, index) => {
    media.addEventListener('click', () => openOverlay(index));
  });
