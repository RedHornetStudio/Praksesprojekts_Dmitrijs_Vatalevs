const select = document.querySelector('.select');
const options = select.querySelector('.options');
const optionsList = options.querySelectorAll('.option');
console.log('aaa');

let activeElement = optionsList[0];
select.addEventListener('click', () => {
  if(options.style.display === 'flex') {
    options.style.display = 'none';
  } else {
    options.style.display = 'flex';
    optionsList.forEach(element => {
      element.style.backgroundColor = '#ffffff'
    });
    activeElement = optionsList[0];
    activeElement.style.backgroundColor = '#d8d8d8';
  }
});

select.addEventListener('keyup', e => {
  if(e.key === 'Enter' || e.key === ' ') {
    if(options.style.display === 'flex') {
      options.style.display = 'none';
      window.location.href = activeElement.textContent;
    } else {
      options.style.display = 'flex';
      optionsList.forEach(element => {
        element.style.backgroundColor = '#ffffff'
      });
      activeElement = optionsList[0];
      activeElement.style.backgroundColor = '#d8d8d8';
    }
  }
});

select.addEventListener('keydown', e => {
  if(e.key === ' ') {
    e.preventDefault();
  }
  if(e.key === 'ArrowDown') {
    e.preventDefault();
    optionsList.forEach(element => {
      element.style.backgroundColor = '#ffffff'
    });
    if(activeElement.nextElementSibling) {
      activeElement = activeElement.nextElementSibling;
    } else {
      activeElement = optionsList[0]
    }
    activeElement.style.backgroundColor = '#d8d8d8';
  }
  if(e.key === 'ArrowUp') {
    e.preventDefault();
    optionsList.forEach(element => {
      element.style.backgroundColor = '#ffffff'
    });
    if(activeElement.previousElementSibling) {
      activeElement = activeElement.previousElementSibling;
    } else {
      activeElement = optionsList[optionsList.length - 1];
    }
    activeElement.style.backgroundColor = '#d8d8d8';
  }
});

select.addEventListener('focusout', () => {
  options.style.display = 'none';
});

options.addEventListener('mousemove', e => {
    optionsList.forEach(element => {
      element.style.backgroundColor = '#ffffff'
    });
    e.target.style.backgroundColor = '#d8d8d8';
    activeElement = e.target;
});

options.addEventListener('click', e => {
  window.location.href = e.target.textContent;
});