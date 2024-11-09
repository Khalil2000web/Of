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
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (!entry.isIntersecting && !video.muted) {
          video.muted = true;
          const media = video.closest('.media');
          if (media) {
            const soundOffIcon = media.querySelector('.sound-off-icon');
            const soundOnIcon = media.querySelector('.sound-on-icon');
            soundOffIcon.style.display = 'block';
            soundOnIcon.style.display = 'none';
          }
        }
      });
    }, { threshold: 0.1 });
  
    mediaElements.forEach(media => {
      const video = media.querySelector('video');
      const soundOffIcon = media.querySelector('.sound-off-icon');
      const soundOnIcon = media.querySelector('.sound-on-icon');
      const playBtn = media.querySelector('.play-btn');
      const spinner = media.querySelector('.spinner');
      const errorMessage = document.createElement('div');
      
      errorMessage.classList.add('error-message');
      errorMessage.style.display = 'none';
      errorMessage.innerHTML = `
        <div style="padding: 20px;">
          <strong style="color:#EF9A9A;">Error:</strong> Video could not be loaded.<br><br>
          <span style="font-size:0.8rem;color:#ccc;">
            This may be due to a failed loading attempt or an invalid video URL. Please verify video source paths and reload the page.
          </span><br><br>
          <button class="retry-button" style="font-weight:800;">TRY AGAIN</button>
        </div>
      `;
      media.appendChild(errorMessage);
  
      video.removeAttribute('controls');
  
      video.addEventListener('waiting', () => {
        spinner.style.display = 'block';
      });
  
      video.addEventListener('canplay', () => {
        spinner.style.display = 'none';
      });
  
      video.addEventListener('error', () => {
        spinner.style.display = 'none';
        errorMessage.style.display = 'block';
      });
  
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
  
      errorMessage.querySelector('.retry-button').addEventListener('click', () => {
        errorMessage.style.display = 'none';
        video.load();
        video.play();
      });
  
      observer.observe(video);
    });
  });