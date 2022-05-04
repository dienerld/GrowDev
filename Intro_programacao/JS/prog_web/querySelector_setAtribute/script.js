const arrCards = document.querySelectorAll('.card');
const arrTitleCards = document.querySelectorAll('.titulo-card');
const arrDescriptionCards = document.querySelectorAll('.descricao-card');
const arrButtonsEdit = document.querySelectorAll('.botao-editar');
const arrButtonsDelete = document.querySelectorAll('.botao-apagar');

arrCards.forEach((card) => {
  card.style.backgroundColor = '#e07137';
});

arrTitleCards.forEach((title) => {
  title.textContent = 'Meu Card';
  title.style.marginTop = '20px';
  title.style.color = '#333b53';
});

arrDescriptionCards.forEach((description) => {
  description.textContent = 'Descrição modificada pelo JavaScript';
  description.style.color = '#fff';
  description.style.margin = '24px -2px';
});

function editButton(arr, color, callback) {
  arr.forEach((button) => {
    button.style.backgroundColor = color;
    button.style.borderRadius = '8px';
    button.style.padding = '8px';
    button.style.color = '#fff';
    button.style.border = '0px';
    button.onclick = callback;
  });
}

function editarCard() {
  alert('Clicou em Editar');
}

function apagarCard() {
  const isConfirmed = window.prompt(
    'Tem Certeza que deseja apagar?/n Digite sim ou nao'
  );

  if (isConfirmed === 'sim') {
    alert('Confirmado');
  } else {
    alert('Cancelou');
  }
}

editButton(arrButtonsDelete, '#f8433f', apagarCard);
editButton(arrButtonsEdit, '#338106', editarCard);
