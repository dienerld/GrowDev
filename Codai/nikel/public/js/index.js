// Register in Application
const linkCreateAccount = document.getElementById('create-form');
const session = localStorage.getItem('session');
let logged = sessionStorage.getItem('logged');

checkLogged();

linkCreateAccount.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email-create-input').value;
  const password = document.getElementById('password-create-input').value;

  if (email.length < 6) {
    alert('Preencha o campo com um email valido');
    return;
  } else if (password.length < 4) {
    alert('Preencha o campo senha com mais de 3 caracteres');
    return;
  }

  saveAccount({ login: email, password, transactions: [] });
  document.getElementById('modal-close').click();
  alert('Form enviado com sucesso!!');
});

function saveAccount(dataUser) {
  localStorage.setItem(dataUser.login, JSON.stringify(dataUser));
}

// End session Register in Application

// Application Login
const loginApplication = document.getElementById('login-form');

loginApplication.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email-login-input').value;
  const password = document.getElementById('password-login-input').value;
  const stayConnected = document.getElementById('session-check').checked;

  const account = getAccount(email);

  if (!account) {
    alert('Verifique o usuário ou a senha de login');
    return;
  }

  if (account.password !== password) {
    alert('Verifique o usuário ou a senha de login');
    return;
  }
  saveSession(email, stayConnected);
  window.location.href = 'home.html';
});

// func helpers

function saveSession(data, stayConnected) {
  if (stayConnected) {
    localStorage.setItem('session', data);
  }
  sessionStorage.setItem('logged', data);
}

function getAccount(key) {
  const account = localStorage.getItem(key);
  console.log(account);

  if (account) {
    return JSON.parse(account);
  }
  return '';
}

function checkLogged() {
  if (session) {
    sessionStorage.setItem('logged', session);
    logged = session;
  }

  if (logged) {
    saveSession(logged, session);
    window.location.href = 'home.html';
  }
}
