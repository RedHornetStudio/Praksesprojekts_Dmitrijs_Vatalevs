const myDropdownMenu = document.querySelector('.my-dropdown-menu');
const selected = myDropdownMenu.querySelector('.selected');
const options = myDropdownMenu.querySelector('.options');
const optionsList = options.querySelectorAll('.option');

let activeOption = null;
myDropdownMenu.addEventListener('click', () => {
  if(options.classList.contains('show')) {
    options.classList.remove('show');
  } else {
    options.classList.add('show');
    optionsList.forEach(option => {
      option.classList.remove('active-option');
    });
    activeOption = null;
  }
});

myDropdownMenu.addEventListener('keyup', e => {
  if(e.key === 'Enter' || e.key === ' ') {
    if(options.classList.contains('show')) {
      options.classList.remove('show');
      if(activeOption) {
        window.location.href = activeOption.getAttribute('data-href');
      }
    } else {
      options.classList.add('show');
      optionsList.forEach(option => {
        option.classList.remove('active-option');
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
      option.classList.remove('active-option');
    });
    if(activeOption && activeOption.nextElementSibling) {
      activeOption = activeOption.nextElementSibling;
    } else {
      activeOption = optionsList[0]
    }
    activeOption.classList.add('active-option');
  }
  if(e.key === 'ArrowUp') {
    e.preventDefault();
    optionsList.forEach(option => {
      option.classList.remove('active-option');
    });
    if(activeOption && activeOption.previousElementSibling) {
      activeOption = activeOption.previousElementSibling;
    } else {
      activeOption = optionsList[optionsList.length - 1];
    }
    activeOption.classList.add('active-option');
  }
});

myDropdownMenu.addEventListener('focusout', () => {
  options.classList.remove('show');
});

options.addEventListener('mousemove', e => {
    optionsList.forEach(option => {
      option.classList.remove('active-option');
    });
    activeOption = e.target;
    activeOption.classList.add('active-option');
});

options.addEventListener('mouseover', e => {
  optionsList.forEach(option => {
    option.classList.remove('active-option');
  });
  activeOption = e.target;
  activeOption.classList.add('active-option');
});

options.addEventListener('click', e => {
  window.location.href = activeOption.getAttribute('data-href');
});