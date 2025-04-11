---
layout: default
title: Khalil
---

<style>.media-container{position:fixed;top:0;left:0;width:100%;max-height:100%;max-width:100%;height:auto;overflow-y:auto;overflow-x:hidden;overscroll-behavior:none;scrollbar-width: none;padding-top:0;padding-bottom:160px;}.media-container::-webkit-scrollbar{display: none;} .media-container img,.media-container .media{width:100%;max-width:100%;height:auto;display:block;}.info-container{position:absolute;top:20px;left:20px;background:red;padding:10px 15px;border-radius:5px;display:none;}.info-container h2{margin-bottom:5px;font-size:22px;}.info-container p{font-size:16px;opacity:.8;}.nav-bar{position:fixed;bottom:90px;left:0;width:100%;max-width:100%;height:60px;background:transparent;display:flex;justify-content:space-around;align-items:center;padding:0;}@media screen and (min-width:45em) {.nav-bar {position: absolute;max-width:60%;top:80px;left:50%;transform: translateX(-50%);}.media-container {position: absolute;height:auto;max-height: none;}}.btn{background:transparent;border:none;padding:10px 20px;cursor:pointer;border-radius:0;}.btn svg{display:block;width:30px;color:#fff;}video{width:100%;height:auto;min-height:200px;background:#151b17;}.media .sound-icon{position:absolute;bottom:27px;right:27px;max-width:16px;height:auto;cursor:pointer;z-index:10;user-select:none;-webkit-user-select: none;}.sound-icon img {user-select: none;-webkit-user-drag: none;-webkit-user-select: none;max-width:16px;}button {touch-action: manipulation;}.play-btn,.spinner{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:5;display:none;user-select: none;-webkit-user-select: none;}.play-btn{width:100px;height:100px;border-radius:50%;background:url('https://khaliiil.com/static/media/undefined.svg') no-repeat center;background-size:contain;cursor:pointer;border: 2px solid #95a5a6;}.spinner {width: 56px;height: 56px;border-radius: 50%;border: 9px solid #4682B4;opacity:0.8;animation: spinner-bulqg1 0.8s infinite linear alternate, spinner-oaa3wk 1.6s infinite linear;margin: -30px 0 0 -30px;}@keyframes spinner-bulqg1 {0% {clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);}12.5% {clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0%);}25% {clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100%);}50% {clip-path: polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);}62.5% {clip-path: polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%);}75% {clip-path: polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100%);}100% {clip-path: polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100%);}}@keyframes spinner-oaa3wk {0% {transform: scaleY(1) rotate(0deg);}49.99% {transform: scaleY(1) rotate(135deg);}50% {transform: scaleY(-1) rotate(0deg);}100% {transform: scaleY(-1) rotate(-135deg);}}.image {pointer-events: none;margin-bottom:0;}.error-message {position: absolute;top:0;left:0;width:100%;height:100%;z-index:20;background: #151b17;font-family:Arial;display: none;}.media {position:relative;}.media-container iframe {width:100%;max-width:100%;height:300px;object-fit: none;border: none;}@media screen and (min-width:44em) {.media-container iframe {height:550px;}} </style>
<style>.footer {position: fixed;bottom: 0;left:50%;transform: translateX(-50%);width:100%;max-width: 100%;display: flex;padding:0;margin:0;align-items: center;justify-content: space-around;z-index: var(--z-index-max);}.footer a {user-select:none;-webkit-user-select:none;color: var(--text-color);padding:0;margin:0;padding-bottom: 20px;font-size:20px;text-decoration: none;letter-spacing: 1px;}@media screen and (min-width:45em) {.footer {max-width: 80%;}.footer a {font-size: 19px;}} </style>


<div class="media-container" id="media-container"></div><div class="info-container"><h2 id="media-title"></h2><p id="media-description"></p></div>
<div class="nav-bar"><button class="btn" onclick="prevMedia()"><svg viewBox="4 0 22 22" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M18 4l-8 8 8 8" stroke="white" stroke-width="3" stroke-linejoin="miter"></path></svg></button><button class="btn" onclick="nextMedia()"><svg viewBox="-2 0 22 22" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M6 4l8 8-8 8" stroke="white" stroke-width="3" stroke-linejoin="miter"></path></svg></button></div>
    
    


<script>
    const mediaItems = [
        {"type": "video", "src": "https://raw.githubusercontent.com/Khalil2000web/Media/main/germany-media/IMG_6443.mov", "poster": "", "alt": "Video", "title": "RENAISSANCE FILM 2024", "id": "video:202435gccf_RENAISSANCE_FILM", "description": "Me at the RENAISSANCE FILM BY BEYONCÉ 2023", "class": null, "target": null},
        {"type": "image", "src": "https://raw.githubusercontent.com/Khalil2000web/Media/main/germany-media/IMG_9255.jpeg", "title": "image:2024_GERMANY_012_", "description": "", "alt": "Image", "class": "image", "target": null},
        {"type": "image", "src": "https://raw.githubusercontent.com/Khalil2000web/Media/main/germany-media/photo-output.jpeg", "title": "image:2024_GERMANY_013_", "description": "", "alt": "Image", "class": "image", "target": null},
        {"type": "image", "src": "https://raw.githubusercontent.com/Khalil2000web/Media/main/germany-media/IMG_6497.jpeg", "title": "image:2024_GERMANY_014_", "description": "", "alt": "Image", "class": "image", "target": null},
        {"type": "image", "src": "https://raw.githubusercontent.com/Khalil2000web/Media/main/germany-media/IMG_6493.jpeg", "title": "image:2024_GERMANY_015_", "description": "", "alt": "Image", "class": "image", "target": null}
    ];

    let currentIndex = getIndexFromURL();

    function getIndexFromURL() {
        const params = new URLSearchParams(window.location.search);
        const mediaId = params.get('media');

        if (!mediaId) return 0;

        const index = mediaItems.findIndex(item => item.id === mediaId);
        return index !== -1 ? index : 0;
    }

    function updateMedia() {
        const e = document.getElementById("media-container");
        e.innerHTML = "";

        const t = mediaItems[currentIndex];

        if (t.type === "image") {
            const a = document.createElement("img");
            a.src = t.src;
            a.alt = t.alt;
            a.className = t.class || "";
            a.style.pointerEvents = "none";

            if (t.target) {
                const link = document.createElement("a");
                link.href = t.target;
                link.target = "_blank";
                link.appendChild(a);
                e.appendChild(link);
            } else {
                e.appendChild(a);
            }
        } else if (t.type === "video") {
            const a = document.createElement("div");
            a.className = "media " + (t.class || "");
            a.innerHTML = `
                <video src="${t.src}" poster="${t.poster}" loop autoplay muted playsinline></video>
                <img src="https://khaliiil.com/static/media/icon-mute.svg" style="max-width:16px" class="sound-icon sound-off-icon">
                <img src="https://khaliiil.com/static/media/icon-volume.svg" style="display:none;max-width:16px;" class="sound-icon sound-on-icon">
                <div class="play-btn"></div>
                <div class="spinner" style="display:block;"></div>
                <div class="error-message" style="display:none;flex-direction:column;gap:20px;padding:20px;">
                    <h2 style="font-size:20px;font-family:Arial;">VIDEO COULD NOT LOAD</h2>
                    <span style="font-size:12px;font-family:Arial;color:#ccc;">The video is unavailable. This may be due to a network issue, an unsupported format, or missing permissions.<br><br>VIDEO ID: ${t.id}.</span>
                    <button style="cursor:pointer;max-width:150px;font-family:arial;font-weight:900;margin:0 auto;" class="retry-btn">Try Again</button>
                </div>`;

            if (t.target) {
                a.style.cursor = "pointer";
                a.addEventListener("click", () => {
                    window.open(t.target, "_blank");
                });
            }

            e.appendChild(a);
            setupVideoPlayer();
        }

        updateButtons();
    }

    function setupVideoPlayer() {
        document.querySelectorAll(".media").forEach(e => {
            const t = e.querySelector("video");
            const a = e.querySelector(".sound-off-icon");
            const n = e.querySelector(".sound-on-icon");
            const o = e.querySelector(".play-btn");
            const r = e.querySelector(".spinner");
            const l = e.querySelector(".error-message");
            const c = e.querySelector(".retry-btn");

            r.style.display = "block";
            t.muted = true;

            a.addEventListener("click", e => {
                e.stopPropagation();
                t.muted = false;
                a.style.display = "none";
                n.style.display = "block";
            });

            n.addEventListener("click", e => {
                e.stopPropagation();
                t.muted = true;
                a.style.display = "block";
                n.style.display = "none";
            });

            t.addEventListener("play", () => {
                o.style.display = "none";
                r.style.display = "none";
            });

            t.addEventListener("pause", () => {
                o.style.display = "block";
            });

            o.addEventListener("click", e => {
                e.stopPropagation();
                t.paused ? t.play() : t.pause();
            });

            t.addEventListener("waiting", () => {
                r.style.display = "block";
            });

            t.addEventListener("playing", () => {
                r.style.display = "none";
            });

            let d;
            t.addEventListener("timeupdate", () => {
                clearTimeout(d);
                r.style.display = "none";
                d = setTimeout(() => {
                    if (!t.paused) {
                        r.style.display = "block";
                    }
                }, 1000);
            });

            t.addEventListener("error", () => {
                r.style.display = "none";
                l.style.display = "flex";
            });

            c.addEventListener("click", e => {
                e.stopPropagation();
                l.style.display = "none";
                r.style.display = "block";
                t.load();
                t.play();
            });
        });
    }

    function updateButtons() {
        const e = document.getElementById("prev-btn");
        const t = document.getElementById("next-btn");

        if (e && t) {
            e.style.pointerEvents = currentIndex === 0 ? "none" : "auto";
            e.style.opacity = currentIndex === 0 ? ".5" : "1";
            t.style.pointerEvents = currentIndex === mediaItems.length - 1 ? "none" : "auto";
            t.style.opacity = currentIndex === mediaItems.length - 1 ? ".5" : "1";
        }
    }

    function nextMedia() {
        if (currentIndex < mediaItems.length - 1) {
            currentIndex++;
            reloadIframeIfNeeded();
            updateMedia();
        }
    }

    function prevMedia() {
        if (currentIndex > 0) {
            currentIndex--;
            reloadIframeIfNeeded();
            updateMedia();
        }
    }

    function reloadIframeIfNeeded() {
        const e = mediaItems[currentIndex];
        if (e.type === "iframe") {
            e.src = e.src;
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        updateMedia();
        updateButtons();
    });
</script>

<script>document.addEventListener("copy",e=>{const s=window.getSelection();if(!s.rangeCount)return;const r=s.getRangeAt(0),i=r.commonAncestorContainer.querySelector?.("img");if(i){e.preventDefault();e.clipboardData.setData("text/plain",i.alt||"Image cannot be copied");}});</script>