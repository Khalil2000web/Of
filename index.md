---
layout: default
title: KHALIIL
author: "Khaliil"
published: true
---
<div class="homepage-47-links" style="display:none;">
<div class="mainlinks"><a href="https://tour.khaliil.com/">TOUR</a></div>
<div class="footer"><a href="/legal">LEGAL</a><a style="font-size: 16px;">&copy; 2025 KHALIIL</a></div>
</div>


  <style>
    body {
      overflow: hidden;
    }

    .scroll-container {
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      height: 100vh;
      width: 100vw;margin: 0 auto;
      border: none;touch-action: none;padding-top: 120px;
      user-select: none;
      -webkit-user-select: none;
    }

    .item {
      flex: 0 0 auto;
      padding: 0;
      border-bottom: 1px solid #3333334d;
      background: transparent;
      text-align: center;
    }

.item > * {
  color:var(--text-color);
}

.img-item {
  width: 100%;
  height: auto;
  pointer-events: none;
  display: block;
}

.item p {
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  padding: 40px;font-family: var(--font-main-bold);
}
    .scroll-container::-webkit-scrollbar {
      display: none;
    }
.other {display: flex;
  background-color: #fff;cursor: pointer;
  text-align: center;align-items: center;
  justify-content: center;
  width: 100%;min-height: 100px;text-align: center;
}.other > * {color: #000;}
@media only screen and (min-width:48em) {
  .scroll-container {max-width: 65vw;}
}
</style>

<div class="scroll-container" id="scroller">
<div class="item"><p>VIENNA</p></div>
<div class="item"><a style="cursor: pointer;" href="https://tour.khaliil.com/" target="_blank"><img src="https://pub-711e690bbd0d461890cf62bf43a6282b.r2.dev/IMG_1743.jpeg" class="img-item" alt="Image" decoding="async" loading="eager"></a></div>
<div class="item"><a style="cursor: pointer;" href="https://tour.khaliil.com/" target="_blank"><img src="https://pub-711e690bbd0d461890cf62bf43a6282b.r2.dev/IMG_1731.jpeg" class="img-item" alt="Image" decoding="async" loading="eager"></a></div>
<div class="item"><a style="cursor: pointer;" href="https://tour.khaliil.com/" target="_blank"><img src="https://pub-711e690bbd0d461890cf62bf43a6282b.r2.dev/IMG_3815.jpeg" class="img-item" alt="Image" decoding="async" loading="eager"></a></div>
<div class="item"><p>BUDAPEST</p></div>
<div class="item"><a style="cursor: pointer;" href="https://tour.khaliil.com/" target="_blank"><img src="https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2368.jpeg" class="img-item" alt="Image" decoding="async" loading="eager"></a></div>
<div class="item"><a style="cursor: pointer;" href="https://tour.khaliil.com/" target="_blank"><img src="https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2227.jpeg" class="img-item" alt="Image" decoding="async" loading="eager"></a></div>
<div class="item"><a style="cursor: pointer;" href="https://tour.khaliil.com/" target="_blank"><img src="https://pub-62c7562398154a439829645cb8dca3d2.r2.dev/IMG_2150.jpeg" class="img-item" alt="Image" decoding="async" loading="eager"></a></div>
<div class="item"><p>PRAGUE</p></div>
<div class="item"><a style="cursor: pointer;" href="https://tour.khaliil.com/" target="_blank"><img src="https://pub-1f29174c420746d4bea24ccbcc9e105d.r2.dev/IMG_3682.jpeg" class="img-item" alt="Image" decoding="async" loading="eager"></a></div>
<div class="item"><a style="cursor: pointer;" href="https://tour.khaliil.com/" target="_blank"><img src="https://pub-1f29174c420746d4bea24ccbcc9e105d.r2.dev/IMG_3692.jpeg" class="img-item" alt="Image" decoding="async" loading="eager"></a></div>
<div class="item"><a style="cursor: pointer;" href="https://tour.khaliil.com/" target="_blank"><img src="https://pub-1f29174c420746d4bea24ccbcc9e105d.r2.dev/IMG_2491.jpeg" class="img-item" alt="Image" decoding="async" loading="eager"></a></div>
<div class="other"><a href="https://tour.khaliil.com">TOUR.KHALIIL.COM</a></div>
</div>




<script>
    const scroller = document.getElementById("scroller");
    const speed = 200;
    const delayStart = 2000;
    const delayEnd = 2800;

    function smoothScroll(target) {
      return new Promise(resolve => {
        const start = scroller.scrollTop;
        const distance = target - start;
        const duration = Math.abs(distance) / speed * 1000;

        let startTime = null;

        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          scroller.scrollTop = start + distance * progress;
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            resolve();
          }
        }

        requestAnimationFrame(step);
      });
    }

    async function loopScroll() {
      await new Promise(r => setTimeout(r, delayStart));
      while (true) {
        await smoothScroll(scroller.scrollHeight - scroller.clientHeight);
        await new Promise(r => setTimeout(r, delayEnd));
        await smoothScroll(0);
        await new Promise(r => setTimeout(r, delayEnd));
      }
    }

    loopScroll();
</script>