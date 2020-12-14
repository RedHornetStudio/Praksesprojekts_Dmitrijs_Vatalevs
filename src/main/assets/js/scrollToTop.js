const html = document.querySelector('html');
const toTop = document.querySelector('.to-top a');

document.addEventListener('scroll', e => {
  if(html.scrollTop === 0) {
    if(toTop.style.display !== '') {
      toTop.style.display = '';
    }
  } else {
    if(toTop.style.display === '') {
      toTop.style.display = 'inline';
    }
  }
});

toTop.addEventListener('click', e => {
  scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});