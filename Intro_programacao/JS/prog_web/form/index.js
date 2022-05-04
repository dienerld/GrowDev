const qSelect = (selector) => document.querySelector(selector);
const qSelectAll = (selector) => document.querySelectorAll(selector);

const formBlank = qSelect('#form-data-person');

const clearForm = () => {
  const form = qSelect('#form-data-person');
  form.innerHTML = formBlank.innerHTML;
};

document.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = qSelect('#name').value;
  const address = qSelect('#address').value;
  const city = qSelect('#city').value;
  const state = qSelect('#state').value;

  const interestArea = qSelectAll('input[name="interest"]:checked');

  console.log(name, address, city, state);
  interestArea.forEach((a) => console.log(a.value));
});
