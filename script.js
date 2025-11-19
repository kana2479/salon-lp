// ページ内リンクをスムーススクロールにする
const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    const targetId = href === '#' || href === '' ? 'top' : href.substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
// =====================
// FAQ アコーディオン
// =====================
// FAQ toggle
document.querySelectorAll('.faq-question').forEach((q) => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const answer = item.querySelector('.faq-answer');
    const icon = q.querySelector('.faq-icon');

    item.classList.toggle('open');

    if (item.classList.contains('open')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.textContent = "－";
    } else {
      answer.style.maxHeight = null;
      icon.textContent = "＋";
    }
  });
});
// ========================
// GALLERY MODAL
// ========================
const galleryThumbs = document.querySelectorAll('.js-gallery-thumb');
const galleryModal = document.querySelector('#gallery-modal');
const galleryModalImg = document.querySelector('#gallery-modal-image');
const galleryModalCaption = document.querySelector('#gallery-modal-caption');
const galleryModalClose = galleryModal?.querySelector('.gallery-modal__close');
const galleryModalOverlay = galleryModal?.querySelector('.gallery-modal__overlay');

function openGalleryModal(img) {
  if (!galleryModal || !galleryModalImg) return;

  galleryModalImg.src = img.src;
  galleryModalImg.alt = img.alt || '';
  if (galleryModalCaption) {
    galleryModalCaption.textContent = img.alt || '';
  }

  galleryModal.classList.add('is-open');
  document.body.classList.add('is-modal-open');
}

function closeGalleryModal() {
  if (!galleryModal || !galleryModalImg) return;

  galleryModal.classList.remove('is-open');
  document.body.classList.remove('is-modal-open');
  galleryModalImg.src = '';
}

// サムネイルクリックで開く
galleryThumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    openGalleryModal(thumb);
  });
});

// 閉じるボタン
galleryModalClose?.addEventListener('click', closeGalleryModal);

// オーバーレイクリックで閉じる
galleryModalOverlay?.addEventListener('click', closeGalleryModal);

// ESCキーで閉じる
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && galleryModal?.classList.contains('is-open')) {
    closeGalleryModal();
  }
});


     
  
