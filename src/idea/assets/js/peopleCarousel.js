const track = document.querySelector('.track');
const slides = track.querySelectorAll('.slide');
const btnPrevious = document.querySelector('.previous');
const btnNext = document.querySelector('.next');
let currentSlide = 0;

btnPrevious.addEventListener('click', () => {
  if(currentSlide > 0) {
    currentSlide--;
    btnNext.classList.remove('disabled');
    track.style.transform = `translate(-${currentSlide * 100}%)`;
    if(currentSlide === 0) {
      btnPrevious.classList.add('disabled');
    }
  }
});

btnNext.addEventListener('click', () => {
  if(currentSlide < slides.length - 1) {
    currentSlide++;
    btnPrevious.classList.remove('disabled');
    track.style.transform = `translate(-${currentSlide * 100}%)`;
    if(currentSlide === slides.length - 1) {
      btnNext.classList.add('disabled');
    }
  }
});