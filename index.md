---
layout: default
title: KHALIIL
author: "Khaliil"
published: true
---
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