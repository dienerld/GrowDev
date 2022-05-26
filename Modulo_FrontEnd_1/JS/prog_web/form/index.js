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
  const curriculum = qSelect('#curriculum').value;

  const inputInterestArea = qSelectAll('input[name="interest"]:checked');

  if (inputInterestArea.length < 1) {
    alert('Please select a interest area');
    return;
  }
  const interestArea = [];
  inputInterestArea.forEach((input) => interestArea.push(input.value));

  console.log(
    `Nome: ${name}\nEndereço: ${address}\nCidade: ${city}\nEstado: ${state}\nAreas de Interesse: ${interestArea}${
      curriculum ? `\nCurrículo: ${curriculum}` : ''
    }`
  );
  clearForm();
});
