document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("myVideo");
    const loaderWrapper = document.getElementById("loader-wrapper");

    function showLoader() {
        if (!video.paused && !video.ended) {
            loaderWrapper.style.display = "none";
        } else {
            loaderWrapper.style.display = "flex";
        }
    }

    function hideLoader() {
        loaderWrapper.style.display = "none";
    }

    // Show loader when video is buffering
    video.addEventListener("waiting", showLoader);
    video.addEventListener("seeking", showLoader);
    video.addEventListener("stalled", showLoader);

    // Hide loader when video starts playing
    video.addEventListener("playing", hideLoader);

    // Initially show loader until the video starts playing
    showLoader();
});
</script>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const mediaElements = document.querySelectorAll('.media');
    const overlay = document.getElementById('overlay');
    const overlayContent = document.getElementById('overlay-content');
    const closeBtn = document.getElementById('close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentIndex = 0;
    let currentOverlayVideo = null;

    function disableScroll() {
      document.body.classList.add('no-scroll');
    }

    function enableScroll() {
      document.body.classList.remove('no-scroll');
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
          video.play();  // Ensure video keeps playing
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

    function openOverlay(index) {
      disableScroll();
      currentIndex = index;
      const clonedMedia = mediaElements[currentIndex].cloneNode(true);
      overlayContent.innerHTML = '';
      overlayContent.appendChild(clonedMedia);
      overlay.style.display = 'flex';
      overlay.classList.add('overlay-show');

      // Mute all main page videos when overlay is opened
      muteAllVideos();

      if (clonedMedia.querySelector('video')) {
        const video = clonedMedia.querySelector('video');
        const soundOffIcon = clonedMedia.querySelector('.sound-off-icon');
        const soundOnIcon = clonedMedia.querySelector('.sound-on-icon');

        video.muted = true;
        soundOffIcon.style.display = 'block';
        soundOnIcon.style.display = 'none';

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
      enableScroll();
      if (currentOverlayVideo) {
        currentOverlayVideo.muted = true;
        currentOverlayVideo = null;
      }
      playAllVideos();  // Ensure main page videos continue playing
    }

    mediaElements.forEach((media, index) => {
      if (media.querySelector('video')) {
        const video = media.querySelector('video');
        const soundOffIcon = media.querySelector('.sound-off-icon');
        const soundOnIcon = media.querySelector('.sound-on-icon');

        // Remove the controls attribute
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

    closeBtn.addEventListener('click', closeOverlay);

    prevBtn.addEventListener('click', () => {
      if (currentIndex === 0) {
        currentIndex = mediaElements.length - 1;
      } else {
        currentIndex -= 1;
      }
      openOverlay(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
      if (currentIndex === mediaElements.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex += 1;
      }
      openOverlay(currentIndex);
    });
  });
</script>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (!localStorage.getItem('prevBtnClicked')) {
        prevBtn.style.border = '2px solid #275c86';
    }

    prevBtn.addEventListener('click', function() {
        prevBtn.style.border = 'none';
        localStorage.setItem('prevBtnClicked', 'true');
    });
    
        nextBtn.addEventListener('click', function() {
        prevBtn.style.border = 'none';
        localStorage.setItem('prevBtnClicked', 'true');
    });
});