document.getElementById('btn-logout').addEventListener('click', logout); // Fazer logout app

const modal = new bootstrap.Modal('#transaction-modal');
const session = localStorage.getItem('session');
let logged = sessionStorage.getItem('logged');
let data = {
  transactions: [],
};

checkLogged();
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

  getTransactions();
}

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

    getTransactions();
  });

function logout() {
  sessionStorage.removeItem('logged');
  localStorage.removeItem('session');

  window.location.href = 'index.html';
}

function saveData(data) {
  localStorage.setItem(data.login, JSON.stringify(data));
}

function getTransactions() {
  const transactions = data.transactions;

  let transactionsHtml = ``;

  if (transactions.length) {
    transactions.forEach((transaction) => {
      let type = 'Entrada';

      if (transaction.type === '2') {
        type = 'SaÍda';
      }
      transactionsHtml += `
				<tr>
          <th scope="row">${transaction.date}</th>
          <td>R$ ${transaction.value.toFixed(2)}</td>
          <td>${type}</td>
          <td>${transaction.description}</td>
        </tr>
			`;
    });
  }
  document.getElementById('tbody-transactions').innerHTML = transactionsHtml;
}
