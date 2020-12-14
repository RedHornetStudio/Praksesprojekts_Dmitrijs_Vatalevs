const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const toggleButtonLines = toggleButton.querySelectorAll('.toggle-button-line');
const close = toggleButton.querySelector('.close');

toggleButton.addEventListener('click', () => {
  if(close.style.display === 'block') {
    toggleButtonLines.forEach(line => {
      line.style.display = 'block';
    });
    close.style.display = 'none';
    mobileNav.style.display = 'none';
  } else {
    toggleButtonLines.forEach(line => {
      line.style.display = 'none';
    });
    close.style.display = 'block';
    mobileNav.style.display = 'flex';
  }
});

window.addEventListener('resize', () => {
  if(window.innerWidth > 1240) {
    toggleButtonLines.forEach(line => {
      line.style.display = 'block';
    });
    close.style.display = 'none';
    mobileNav.style.display = 'none';
  }
});