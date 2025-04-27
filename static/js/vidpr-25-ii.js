
const containers = document.querySelectorAll('.video-container');
let currentlyUnmutedVideo = null;

containers.forEach(container => {
  const canvas = container.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const video = container.querySelector('video');
  const soundBtn = container.querySelector('.sound-btn');
  const soundIcon = soundBtn.querySelector('img');

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

video.addEventListener('canplay', () => {
  resizeCanvas();
  video.play();
  renderFrame();
  const spinner = container.querySelector('.spinner');
  if (spinner) {
    spinner.style.display = 'none';
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
});