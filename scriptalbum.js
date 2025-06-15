// Apparition des images au scroll
const albumItems = document.querySelectorAll('.album-item');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});
albumItems.forEach(item => observer.observe(item));

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.album-item img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Fermer en cliquant à l'extérieur de l'image
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});

// Fermer avec la touche Échap
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = 'none';
  }
});
