---
layout: default
title: LENS
author: "Khaliil"
permalink: /lens/
published: true
---

<div class="dh2ll__content">
<h1>SHOT WITH THE CANON SX70 HS</h1>
<div class="dh2ll__gallery">
<div class="sx70__container"><img src="https://pub-7302578c362b4844b5ef4d1fcdc92c80.r2.dev/IMG_0249.jpeg" loading="lazy" decoding="async" alt="image" class="sx70__image"></div>
<div class="sx70__container"><img src="https://pub-7302578c362b4844b5ef4d1fcdc92c80.r2.dev/IMG_0244.jpeg" loading="lazy" decoding="async" alt="image" class="sx70__image"></div>
<div class="sx70__container"><img src="https://pub-7302578c362b4844b5ef4d1fcdc92c80.r2.dev/IMG_0180.jpeg" loading="lazy" decoding="async" alt="image" class="sx70__image"></div>
<div class="sx70__container"><img src="https://pub-7302578c362b4844b5ef4d1fcdc92c80.r2.dev/IMG_0178.jpeg" loading="lazy" decoding="async" alt="image" class="sx70__image"></div>
<div class="sx70__container"><img src="https://pub-7302578c362b4844b5ef4d1fcdc92c80.r2.dev/IMG_0134.jpeg" loading="lazy" decoding="async" alt="image" class="sx70__image"></div>
<div class="sx70__container"><img src="https://pub-7302578c362b4844b5ef4d1fcdc92c80.r2.dev/IMG_0133.jpeg" loading="lazy" decoding="async" alt="image" class="sx70__image"></div>
<div class="sx70__container"><img src="https://pub-7302578c362b4844b5ef4d1fcdc92c80.r2.dev/IMG_0131.jpeg" loading="lazy" decoding="async" alt="image" class="sx70__image"></div>
<div class="sx70__container"><img src="https://pub-7302578c362b4844b5ef4d1fcdc92c80.r2.dev/IMG_0129.jpeg" loading="lazy" decoding="async" alt="image" class="sx70__image"></div>
<div class="sx70__container"><img src="https://pub-7302578c362b4844b5ef4d1fcdc92c80.r2.dev/IMG_0128.jpeg" loading="lazy" decoding="async" alt="image" class="sx70__image"></div>
<div class="sx70__container"><img src="https://pub-7302578c362b4844b5ef4d1fcdc92c80.r2.dev/IMG_0110.jpeg" loading="lazy" decoding="async" alt="image" class="sx70__image"></div>
<div class="sx70__container"><img src="https://pub-7302578c362b4844b5ef4d1fcdc92c80.r2.dev/IMG_0101.jpeg" loading="lazy" decoding="async" alt="image" class="sx70__image"></div>
</div>
</div>
<div class="image-overlay" id="imageOverlay"><button title="Close overlay" type="button" tabindex="0" aria-label="Close" class="close-btn"><svg viewBox="0 0 24 24" fill="CurrentColor"><path d="M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"/></svg></button><img id="overlayImage" src="" alt="Expanded image"></div>

<script defer>
  const containers = document.querySelectorAll('.sx70__container');
  const overlay = document.getElementById('imageOverlay');
  const overlayImage = document.getElementById('overlayImage');
  const closeBtn = document.querySelector('.close-btn');

  containers.forEach(container => {
    container.addEventListener('click', () => {
      const img = container.querySelector('img');
      if (img) {
        overlayImage.src = img.src;
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
      }
    });
  });

  closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  overlayImage.src = '';
  document.body.style.overflow = '';
});
</script>