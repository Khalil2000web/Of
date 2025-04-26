document.addEventListener("DOMContentLoaded", function () {
  const mediaElements = document.querySelectorAll(".media");

  function muteAllVideosExcept(exceptVideo = null) {
    mediaElements.forEach((media) => {
      const video = media.querySelector("video");
      if (video && video !== exceptVideo) {
        video.muted = true;
        media.querySelector(".sound-off-icon")?.style.setProperty("display", "block");
        media.querySelector(".sound-on-icon")?.style.setProperty("display", "none");
      }
    });
  }

  function showSpinner(spinner) {
    if (spinner) spinner.style.display = "block";
  }

  function hideSpinner(spinner) {
    if (spinner) spinner.style.display = "none";
  }

  function handleVideoErrors(video, spinner) {
    const errorContainer = document.createElement("div");
    errorContainer.className = "video-error";
    errorContainer.style.cssText = `
      display: none;
      flex-direction: column;
      gap: 20px;
      padding: 0;
      margin: 0;
      position: absolute;
      background: #151b17;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      max-width: 99%;
      max-height: 99%;
      border: none;
      color: #fff;
      z-index: 20;
      text-align: left;
    `;

    errorContainer.innerHTML = `<h2 style="font-size:20px;font-family:Arial;padding-left:20px;padding-top:20px;">VIDEO COULD NOT LOAD</h2><span style="font-size:12px;font-family:Arial;color:#ccc;padding-left:20px;">The video is unavailable. This may be due to a network issue, an unsupported format, or missing permissions.<br><br>VIDEO ID: ${video.id || "N/A"}.</span><button class="retry-btn" style="cursor:pointer;max-width:150px;font-family:Arial;color:blue;font-weight:900;margin:0 auto;">Try Again</button>`;

    video.parentElement.appendChild(errorContainer);

    video.addEventListener("error", () => {
      hideSpinner(spinner);
      errorContainer.style.display = "flex";
    });

    errorContainer.querySelector(".retry-btn").addEventListener("click", () => {
      errorContainer.style.display = "none";
      showSpinner(spinner);
      video.load();
      video.play();
    });
  }

  mediaElements.forEach((media) => {
    const video = media.querySelector("video");
    if (!video) return;

    const spinner = media.querySelector(".spinner");
    const soundOffIcon = media.querySelector(".sound-off-icon");
    const soundOnIcon = media.querySelector(".sound-on-icon");

    // 1. Force show both icons initially
    soundOffIcon.style.display = "block";
    soundOnIcon.style.display = "none";

    // 2. Start loading and handle errors
    handleVideoErrors(video, spinner);

    // 3. Start the video muted and hide the spinner
    showSpinner(spinner);
    video.muted = true;
    video.style.visibility = "hidden";  // Hide video until ready

    video.addEventListener("loadedmetadata", () => {
      hideSpinner(spinner);
      video.play();
      video.style.visibility = "visible";  // Show video once it's ready
    });

    // 4. Event listeners for video playback and buffering
    video.addEventListener("playing", () => hideSpinner(spinner));
    video.addEventListener("waiting", () => showSpinner(spinner));
    video.addEventListener("stalled", () => showSpinner(spinner));
    video.addEventListener("loadstart", () => showSpinner(spinner));

    // 5. Handle sound icons toggle
    soundOffIcon.addEventListener("click", () => {
      video.muted = false;
      soundOffIcon.style.display = "none";  // Hide sound-off icon when sound is on
      soundOnIcon.style.display = "block";  // Show sound-on icon
      muteAllVideosExcept(video);
    });

    soundOnIcon.addEventListener("click", () => {
      video.muted = true;
      soundOffIcon.style.display = "block";  // Show sound-off icon when sound is muted
      soundOnIcon.style.display = "none";   // Hide sound-on icon
    });
  });

  // 6. Mute videos when out of view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (!entry.isIntersecting) {
          video.muted = true;
          const media = video.closest(".media");
          media?.querySelector(".sound-off-icon")?.style.setProperty("display", "block");
          media?.querySelector(".sound-on-icon")?.style.setProperty("display", "none");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("video").forEach((video) => observer.observe(video));
});