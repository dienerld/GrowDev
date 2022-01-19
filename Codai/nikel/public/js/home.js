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
    getCashIn();
    getCashOut();
    getTotal();
  });

document
  .getElementById('btn-transactions')
  .addEventListener('click', function () {
    window.location.href = 'transactions.html';
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
  getCashOut();
  getTotal();
}

function logout() {
  sessionStorage.removeItem('logged');
  localStorage.removeItem('session');

  window.location.href = 'index.html';
}

function saveData(data) {
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

      cashInHtml += `
        <div class="row mb-4">
          <div class="col-12">
            <h3 class="fs-2">R$ ${cashIn[index].value.toFixed(2)}</h3>
          </div>
          <!-- Div Description -->
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-8">${cashIn[index].description}</div>
              <div
                class="col-12 col-md-3 d-flex justify-content-end"
              >
                ${cashIn[index].date}
              </div>
            </div>
          </div>
        </div>
      `;
    }
    document.getElementById('cash-in-list').innerHTML = cashInHtml;
  }
}

function getCashOut() {
  const transaction = data.transactions;
  const cashOut = transaction.filter((item) => item.type === '2');
  if (cashOut.length) {
    let cashInHtml = ``;
    let limit = 0;

    if (cashOut.length > 5) {
      limit = 5;
    } else {
      limit = cashOut.length;
    }
    for (let index = 0; index < limit; index++) {
      console.log(cashOut[index]);

      cashInHtml += `
        <div class="row mb-4">
          <div class="col-12">
            <h3 class="fs-2">R$ ${cashOut[index].value.toFixed(2)}</h3>
          </div>
          <!-- Div Description -->
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-8">${cashOut[index].description}</div>
              <div
                class="col-12 col-md-3 d-flex justify-content-end"
              >
                ${cashOut[index].date}
              </div>
            </div>
          </div>
        </div>
      `;
    }
    document.getElementById('cash-out-list').innerHTML = cashInHtml;
  }
}

function getTotal() {
  let total = 0;
  const transaction = data.transactions;
  transaction.forEach((item) => {
    if (item.type === '1') {
      total += item.value;
    } else {
      total -= item.value;
    }
  });

  document.getElementById('value-total').innerHTML = `R$ ${total.toFixed(2)}`;
}
