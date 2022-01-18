document.getElementById('btn-logout').addEventListener('click', logout); // Fazer logout app

const modal = new bootstrap.Modal('#transaction-modal');
const session = localStorage.getItem('session');
let logged = sessionStorage.getItem('logged');
let data = {
  transactions: [],
};
let cashOut = [];

checkLogged();
// ?create new lançament
document
  .getElementById('transaction-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const value = parseFloat(document.getElementById('value-input').value);
    const description = document.getElementById('description-input').value;
    const date = document.getElementById('date-input').value;
    const type = document.querySelector(
      'input[name="type-transaction"]:checked'
    ).value;

    data.transactions.unshift({
      value: value,
      type: type,
      description: description,
      date: date,
    });
    saveData(data);

    alert('Transação adicionada com sucesso!! ');
    event.target.reset();
    modal.hide();
  });

// Functions
function checkLogged() {
  if (session) {
    sessionStorage.setItem('logged', session);
    logged = session;
  }

  if (!logged) {
    window.location.href = 'index.html';
    return;
  }

  const dataUser = localStorage.getItem(logged);
  if (dataUser) {
    data = JSON.parse(dataUser);
  }
  getCashIn();
}

function logout() {
  sessionStorage.removeItem('logged');
  localStorage.removeItem('session');

  window.location.href = 'index.html';
}

function saveData(data) {
  console.log(data);

  localStorage.setItem(data.login, JSON.stringify(data));
}

function getCashIn() {
  const transaction = data.transactions;
  const cashIn = transaction.filter((item) => item.type === '1');
  if (cashIn.length) {
    let cashInHtml = ``;
    let limit = 0;

    if (cashIn.length > 5) {
      limit = 5;
    } else {
      limit = cashIn.length;
    }
    for (let index = 0; index < limit; index++) {
      console.log(cashIn[index]);
    }
  }
}
