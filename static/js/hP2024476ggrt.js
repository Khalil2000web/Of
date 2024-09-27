document.addEventListener("DOMContentLoaded", function () {
  const mediaElements = document.querySelectorAll(".media");
  const overlay = document.querySelector(".overlay");
  const overlayContent = document.querySelector(".overlay-content");
  const closeButton = document.querySelector(".close-btn");
  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");
  const mediaGrid = document.querySelector(".media-grid");

  document.querySelectorAll(".image-container").forEach((media, index) => {
  media.addEventListener('click', () => {
    openOverlay(index);
  });
});

    let currentIndex = 0;
    let currentOverlayVideo = null;


let scrollPosition = 0;

function disableScroll() {
    scrollPosition = window.pageYOffset;
    
    document.body.classList.add('no-scroll');
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
}

function enableScroll() {
    document.body.classList.remove('no-scroll');
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
    document.body.style.position = '';
    document.body.style.top = '';

    window.scrollTo(0, scrollPosition);
}


    function muteAllVideos() {
      mediaElements.forEach(media => {
        if (media.querySelector('video')) {
          const video = media.querySelector('video');
          video.muted = true;
          const soundOffIcon = media.querySelector('.sound-off-icon');
          const soundOnIcon = media.querySelector('.sound-on-icon');
          soundOffIcon.style.display = 'block';
          soundOnIcon.style.display = 'none';
          video.play();
        }
      });
    }

    function playAllVideos() {
      mediaElements.forEach(media => {
        if (media.querySelector('video')) {
          const video = media.querySelector('video');
          video.play();
        }
      });
    }

    function checkButtons() {
      prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
      nextButton.style.display = currentIndex === mediaElements.length - 1 ? 'none' : 'block';
    }
    

function openOverlay(index) {
    disableScroll();
    currentIndex = index;
    
    // Create a cloned element for the overlay
    const clonedMedia = mediaElements[currentIndex].cloneNode(true);
    
    // Clear previous content and add the new content
    overlayContent.innerHTML = '';
    overlayContent.appendChild(clonedMedia);
    
    // Set up the overlay styles and display
    overlay.style.display = 'flex';
    overlay.classList.add('overlay-show');
    overlay.classList.add('opening');
    mediaGrid.style.flexDirection = 'row';
    
    // Use a timeout for the transition effect
    setTimeout(() => {
        overlay.classList.remove('opening');
        overlay.classList.add('fullscreen');
    }, 140);

    // Mute all videos before handling the current video
    muteAllVideos();
    checkButtons();

    // Handle video in the cloned media
    if (clonedMedia.querySelector('video')) {
        const video = clonedMedia.querySelector('video');
        const soundOffIcon = clonedMedia.querySelector('.sound-off-icon');
        const soundOnIcon = clonedMedia.querySelector('.sound-on-icon');

        // Initialize the video state
        video.muted = true;
        soundOffIcon.style.display = 'block';
        soundOnIcon.style.display = 'none';

        // Event listeners for sound controls
        soundOffIcon.addEventListener('click', () => {
            video.muted = false;
            soundOffIcon.style.display = 'none';
            soundOnIcon.style.display = 'block';
        });

        soundOnIcon.addEventListener('click', () => {
            video.muted = true;
            soundOffIcon.style.display = 'block';
            soundOnIcon.style.display = 'none';
        });

        currentOverlayVideo = video;
        video.play();
    }
}
    function closeOverlay() {
      overlay.style.display = 'none';
      overlay.classList.remove('fullscreen');
      overlay.classList.add('closing');
    mediaGrid.style.flexDirection = '';

      setTimeout(() => {
        overlay.classList.remove('closing');
        overlay.style.display = 'none';
      }, 90);

      enableScroll();
      if (currentOverlayVideo) {
        currentOverlayVideo.muted = true;
        currentOverlayVideo = null;
      }
      playAllVideos();
    }

    mediaElements.forEach((media, index) => {
      if (media.querySelector('video')) {
        const video = media.querySelector('video');
        const soundOffIcon = media.querySelector('.sound-off-icon');
        const soundOnIcon = media.querySelector('.sound-on-icon');

        video.removeAttribute('controls');

        video.play();

        soundOffIcon.addEventListener('click', () => {
          muteAllVideos();
          video.muted = false;
          soundOffIcon.style.display = 'none';
          soundOnIcon.style.display = 'block';
        });

        soundOnIcon.addEventListener('click', () => {
          video.muted = true;
          soundOffIcon.style.display = 'block';
          soundOnIcon.style.display = 'none';
        });
      }

      media.addEventListener('click', (event) => {
        if (event.target !== media.querySelector('.sound-off-icon') && event.target !== media.querySelector('.sound-on-icon')) {
          openOverlay(index);
        }
      });
    });

    closeButton.addEventListener('click', closeOverlay);

    prevButton.addEventListener('click', () => {
      if (currentIndex === 0) {
        currentIndex = mediaElements.length - 1;
      } else {
        currentIndex -= 1;
      }
      openOverlay(currentIndex);
      checkButtons();
    });

    nextButton.addEventListener('click', () => {
      if (currentIndex === mediaElements.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex += 1;
      }
      openOverlay(currentIndex);
      checkButtons();
    });
  });