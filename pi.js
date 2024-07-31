document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("myVideo");
    const loaderWrapper = document.getElementById("loader-wrapper");
    const mediaElements = document.querySelectorAll('.media');
    const mediaContainer = document.querySelectorAll('.media-container');
    const overlay = document.getElementById('overlay');
    const overlayContent = document.getElementById('overlay-content');
    const closeBtn = document.getElementById('close-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;
    let currentOverlayVideo = null;

    function showLoader() {
        loaderWrapper.style.display = (video.paused || video.ended) ? "flex" : "none";
    }

    function hideLoader() {
        loaderWrapper.style.display = "none";
    }

    video.addEventListener("waiting", showLoader);
    video.addEventListener("seeking", showLoader);
    video.addEventListener("stalled", showLoader);
    video.addEventListener("playing", hideLoader);

    showLoader();

    function disableScroll() {
        document.body.classList.add('no-scroll');
    }

    function enableScroll() {
        document.body.classList.remove('no-scroll');
    }

    function muteAllVideos() {
        mediaElements.forEach(media => {
            const video = media.querySelector('video');
            if (video) {
                video.muted = true;
                media.querySelector('.sound-off-icon').style.display = 'block';
                media.querySelector('.sound-on-icon').style.display = 'none';
                video.play();
            }
        });
    }

    function playAllVideos() {
        mediaElements.forEach(media => {
            const video = media.querySelector('video');
            if (video) video.play();
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
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
        mediaContainer.style.overflow = 'hidden';
        mediaContainer.style.touchAction = 'none';

        muteAllVideos();

        const video = clonedMedia.querySelector('video');
        const soundOffIcon = clonedMedia.querySelector('.sound-off-icon');
        const soundOnIcon = clonedMedia.querySelector('.sound-on-icon');

        if (video) {
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
        document.body.style.overflow = 'auto';
        document.body.style.touchAction = '';
        mediaContainer.style.overflow = 'auto';
        mediaContainer.style.touchAction = '';
        playAllVideos();
    }

    mediaElements.forEach((media, index) => {
        const video = media.querySelector('video');
        const soundOffIcon = media.querySelector('.sound-off-icon');
        const soundOnIcon = media.querySelector('.sound-on-icon');

        if (video) {
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
            if (!event.target.classList.contains('sound-off-icon') && !event.target.classList.contains('sound-on-icon')) {
                openOverlay(index);
            }
        });
    });

    closeBtn.addEventListener('click', closeOverlay);

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? mediaElements.length - 1 : currentIndex - 1;
        openOverlay(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === mediaElements.length - 1) ? 0 : currentIndex + 1;
        openOverlay(currentIndex);
    });

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