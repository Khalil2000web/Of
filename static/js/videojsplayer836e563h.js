document.addEventListener('DOMContentLoaded', function() {
  const mediaElements = document.querySelectorAll('.media');
  function muteAllVideos() {
    mediaElements.forEach(media => {
      const video = media.querySelector('video');
      if (video) {
        video.muted = true;
        const soundOffIcon = media.querySelector('.sound-off-icon');
        const soundOnIcon = media.querySelector('.sound-on-icon');
        soundOffIcon.style.display = 'block';
        soundOnIcon.style.display = 'none';
        video.play();
      }
    });
  }
  mediaElements.forEach(media => {
    const video = media.querySelector('video');
    const soundOffIcon = media.querySelector('.sound-off-icon');
    const soundOnIcon = media.querySelector('.sound-on-icon');
    const playBtn = media.querySelector('.play-btn');
    const spinner = media.querySelector('.spinner');
    video.removeAttribute('controls');
    video.addEventListener('waiting', () => {
      spinner.style.display = 'block';
    });
    video.addEventListener('canplay', () => {
      spinner.style.display = 'none';
    });
    playBtn.style.display = 'block';
    playBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playBtn.style.display = 'none';
      }
    });
    video.addEventListener('pause', () => {
      playBtn.style.display = 'block';
    });
    video.addEventListener('play', () => {
      playBtn.style.display = 'none';
    });
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
  });
});
