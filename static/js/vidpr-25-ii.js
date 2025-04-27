const containers = document.querySelectorAll('.video-container');
let currentlyUnmutedVideo = null;

containers.forEach(container => {
  const canvas = container.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const video = container.querySelector('video');
  const soundBtn = container.querySelector('.sound-btn');
  const soundIcon = soundBtn.querySelector('img');
  const playBtn = container.querySelector('.play-btn');
  const errorContainer = container.querySelector('.error-message');

  // Resize canvas based on video
  function resizeCanvas() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
  }

  // Draw video frames to canvas
  function renderFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (video.readyState >= 2) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    }
    requestAnimationFrame(renderFrame);
  }

  // Handle video error
  video.addEventListener('error', () => {
    displayErrorMessage("VIDEO COULD NOT LOAD", "The video is unavailable. This may be due to a network issue, an unsupported format, or missing permissions.");
  });

  // Timeout to check if video is loading correctly
  setTimeout(() => {
    if (video.readyState < 2) {  // If video hasn't started loading properly
      displayErrorMessage("VIDEO COULD NOT LOAD", "The video failed to load after several attempts. Please check the video URL or try again later.");
    }
  }, 5000);  // Adjust time as needed (5 seconds in this case)

  // Video loaded event
  video.addEventListener('canplay', () => {
    resizeCanvas();
    renderFrame();
    const spinner = container.querySelector('.spinner');
    if (spinner) {
      spinner.style.display = 'none';
    }
  });

  // Play/Pause button logic
  playBtn.addEventListener('click', () => {
    if (video.paused || video.ended) {
      video.play();
      playBtn.style.display = 'none'; // Hide play button when video plays
    } else {
      video.pause();
      playBtn.style.display = 'block'; // Show play button when video pauses
    }
  });

  // Mute/Unmute Logic
  soundBtn.addEventListener('click', () => {
    if (video.muted) {
      if (currentlyUnmutedVideo && currentlyUnmutedVideo !== video) {
        currentlyUnmutedVideo.muted = true;
        updateIcon(currentlyUnmutedVideo, 'https://khaliil.com/static/images/icon-mute.svg');
      }
      video.muted = false;
      currentlyUnmutedVideo = video;
      updateIcon(video, 'https://khaliil.com/static/images/icon-volume.svg');
    } else {
      video.muted = true;
      updateIcon(video, 'https://khaliil.com/static/images/icon-mute.svg');
      currentlyUnmutedVideo = null;
    }
  });

  function updateIcon(videoElement, iconSrc) {
    const container = videoElement.closest('.video-container');
    const icon = container.querySelector('.sound-btn img');
    icon.src = iconSrc;
  }

  // Intersection Observer for muting when video is out of view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting && !video.muted) {
        video.muted = true;
        updateIcon(video, 'https://khaliil.com/static/images/icon-mute.svg');
        if (currentlyUnmutedVideo === video) {
          currentlyUnmutedVideo = null;
        }
      }
    });
  }, { threshold: 0.1 });

  observer.observe(container);

  // Display error message if video can't load
  function displayErrorMessage(title, description) {
    errorContainer.style.display = 'flex';
    errorContainer.innerHTML = `
      <h2>${title}</h2>
      <span>${description}</span>
      <button class="retry-btn">Try Again</button>
    `;

    // Retry button to reload the video
    const retryBtn = errorContainer.querySelector('.retry-btn');
    retryBtn.addEventListener('click', () => {
      video.load(); // Reload the video to retry
      errorContainer.style.display = 'none'; // Hide error message
      const spinner = container.querySelector('.spinner');
      if (spinner) {
        spinner.style.display = 'block'; // Show spinner while retrying
      }
    });
  }

  // If video is taking too long to load, force error display
  video.addEventListener('stalled', () => {
    setTimeout(() => {
      if (video.readyState < 2) {
        displayErrorMessage("VIDEO COULD NOT LOAD", "Video failed to load after several attempts.");
      }
    }, 5000); // Timeout after 5 seconds
  });

  // Show play button when video is paused or not playing
  video.addEventListener('pause', () => {
    playBtn.style.display = 'block';
  });

  // Hide play button when video is playing
  video.addEventListener('play', () => {
    playBtn.style.display = 'none';
  });
});