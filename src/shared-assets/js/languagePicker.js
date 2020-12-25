const languagePicker = document.querySelector('.language-picker');
const hidden = languagePicker.querySelector('.hidden');
const elements = hidden.querySelectorAll('.elem');

let activeElement = elements[0];
languagePicker.addEventListener('click', () => {
  if(hidden.style.display === 'flex') {
    hidden.style.display = 'none';
  } else {
    hidden.style.display = 'flex';
    elements.forEach(element => {
      element.style.backgroundColor = '#ffffff'
    });
    activeElement = elements[0];
    activeElement.style.backgroundColor = '#d8d8d8';
  }
});

languagePicker.addEventListener('keyup', e => {
  if(e.key === 'Enter') {
    if(hidden.style.display === 'flex') {
      hidden.style.display = 'none';
      window.location.href = activeElement.textContent;
    } else {
      hidden.style.display = 'flex';
      elements.forEach(element => {
        element.style.backgroundColor = '#ffffff'
      });
      activeElement = elements[0];
      activeElement.style.backgroundColor = '#d8d8d8';
    }
  }
});

languagePicker.addEventListener('keydown', e => {
  if(e.key === 'ArrowDown') {
    e.preventDefault();
    elements.forEach(element => {
      element.style.backgroundColor = '#ffffff'
    });
    if(activeElement.nextElementSibling) {
      activeElement = activeElement.nextElementSibling;
    } else {
      activeElement = elements[0]
    }
    activeElement.style.backgroundColor = '#d8d8d8';
  }
  if(e.key === 'ArrowUp') {
    e.preventDefault();
    elements.forEach(element => {
      element.style.backgroundColor = '#ffffff'
    });
    if(activeElement.previousElementSibling) {
      activeElement = activeElement.previousElementSibling;
    } else {
      activeElement = elements[elements.length - 1];
    }
    activeElement.style.backgroundColor = '#d8d8d8';
  }
});

languagePicker.addEventListener('focusout', () => {
  hidden.style.display = 'none';
});

hidden.addEventListener('mousemove', e => {
    elements.forEach(element => {
      element.style.backgroundColor = '#ffffff'
    });
    e.target.style.backgroundColor = '#d8d8d8';
    activeElement = e.target;
});

hidden.addEventListener('click', e => {
  window.location.href = e.target.textContent;
});