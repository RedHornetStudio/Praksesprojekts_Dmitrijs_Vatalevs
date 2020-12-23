const myCheckboxes = document.querySelectorAll('.my-checkbox');

myCheckboxes.forEach(myCheckbox => {
  myCheckbox.addEventListener('keydown', e => {
    if(e.key === ' ') {
      e.preventDefault();
    }
  });
  
  myCheckbox.addEventListener('keyup', e => {
    if(e.key === ' ') {
      e.preventDefault();
      const checkbox = document.querySelector(`#${myCheckbox.getAttribute('for')}`);
      if(checkbox.checked === true) {
        checkbox.checked = false;
      } else {
        checkbox.checked = true;
      }
    }
  });
});