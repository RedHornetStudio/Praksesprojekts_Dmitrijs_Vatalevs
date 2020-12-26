const myDropdownMenu = document.querySelector('.my-dropdown-menu');
const options = myDropdownMenu.querySelector('.options');
const optionsList = options.querySelectorAll('.option');

const noneActiveOptionColor = getComputedStyle(optionsList[0]).getPropertyValue('background-color');
const activeOptionColor = '#d8d8d8';

let activeOption = null;
myDropdownMenu.addEventListener('click', () => {
  if(options.style.display === 'flex') {
    options.style.display = 'none';
  } else {
    options.style.display = 'flex';
    optionsList.forEach(option => {
      option.style.backgroundColor = noneActiveOptionColor
    });
    activeOption = null;
  }
});

myDropdownMenu.addEventListener('keyup', e => {
  if(e.key === 'Enter' || e.key === ' ') {
    if(options.style.display === 'flex') {
      options.style.display = 'none';
      if(activeOption) {
        window.location.href = activeOption.getAttribute('data-href');
      }
    } else {
      options.style.display = 'flex';
      optionsList.forEach(option => {
        option.style.backgroundColor = noneActiveOptionColor
      });
      activeOption = null;
    }
  }
});

myDropdownMenu.addEventListener('keydown', e => {
  if(e.key === ' ') {
    e.preventDefault();
  }
  if(e.key === 'ArrowDown') {
    e.preventDefault();
    optionsList.forEach(option => {
      option.style.backgroundColor = noneActiveOptionColor
    });
    if(activeOption && activeOption.nextElementSibling) {
      activeOption = activeOption.nextElementSibling;
    } else {
      activeOption = optionsList[0]
    }
    activeOption.style.backgroundColor = activeOptionColor;
  }
  if(e.key === 'ArrowUp') {
    e.preventDefault();
    optionsList.forEach(option => {
      option.style.backgroundColor = noneActiveOptionColor
    });
    if(activeOption && activeOption.previousElementSibling) {
      activeOption = activeOption.previousElementSibling;
    } else {
      activeOption = optionsList[optionsList.length - 1];
    }
    activeOption.style.backgroundColor = activeOptionColor;
  }
});

myDropdownMenu.addEventListener('focusout', () => {
  options.style.display = 'none';
});

options.addEventListener('mousemove', e => {
    optionsList.forEach(option => {
      option.style.backgroundColor = noneActiveOptionColor
    });
    e.target.style.backgroundColor = activeOptionColor;
    activeOption = e.target;
});

options.addEventListener('click', e => {
  window.location.href = e.target.getAttribute('data-href');
});