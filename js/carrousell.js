const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = carousel.querySelectorAll('img');
let index = 0;

function showImage() {
  images.forEach((img, i) => {
    if (i === index) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

showImage();

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  showImage();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  showImage();
});
