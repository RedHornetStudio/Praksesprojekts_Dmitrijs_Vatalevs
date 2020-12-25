const myCheckboxes = document.querySelectorAll('.my-checkbox');

myCheckboxes.forEach(myCheckbox => {
  const checkbox = document.querySelector(`#${myCheckbox.getAttribute('data-for')}`);
  const label = document.querySelector(`label[for="${myCheckbox.getAttribute('data-for')}"]`);

  myCheckbox.addEventListener('click', () => {
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