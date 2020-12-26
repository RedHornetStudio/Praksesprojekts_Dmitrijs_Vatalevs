const myCheckboxes = document.querySelectorAll('.my-checkbox');

myCheckboxes.forEach(myCheckbox => {
  const checkbox = document.querySelector(`#${myCheckbox.getAttribute('data-for')}`);
  const label = document.querySelector(`label[for="${myCheckbox.getAttribute('data-for')}"]`);

  myCheckbox.addEventListener('keydown', e => {
    console.log(e.key);
    if(e.key === 'Enter') {
      e.preventDefault();
    }
  });

  myCheckbox.addEventListener('click', e => {
    if(checkbox.checked === true) {
      checkbox.checked = false;
    } else {
      checkbox.checked = true;
    }
  });

  label.addEventListener('click', () => {
    myCheckbox.focus();
  });
});