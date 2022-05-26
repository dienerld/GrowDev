/* Desenvolva aqui a rotina */

const btnCalc = document.querySelector('#btn_calcular');
btnCalc.addEventListener('click', calcular);

function calcular(valueSaved) {
  const elementBase = document.querySelector('#valor_base');
  const elementTransport = document.querySelector('#valor_transporte');
  const elementFood = document.querySelector('#valor_alimentacao');
  const elementTotalRecipes = document.querySelector('#valor_receita');
  const elementDiscountCar = document.querySelector('#valor_automovel');
  const elementDiscountAbsence = document.querySelector('#faltas');
  const elementTotalDiscount = document.querySelector('#valor_descontos');
  const elementTotal = document.querySelector('#valor_total');

  if (valueSaved.valueBase != null) {
    elementBase.value = valueSaved.valueBase;
    elementTransport.value = valueSaved.valueTransport;
    elementFood.value = valueSaved.valueFood;
    elementDiscountCar.value = valueSaved.valueDiscountCar;
    elementDiscountAbsence.value = valueSaved.valueDiscountAbsence;
  }

  const total =
    (parseFloat(elementBase.value) || 0) +
    (parseFloat(elementTransport.value) || 0) +
    (parseFloat(elementFood.value) || 0);
  elementTotalRecipes.value = total.toFixed(2);

  const totalDiscount =
    (parseFloat(elementDiscountCar.value) || 0) +
    (parseFloat(elementDiscountAbsence.value) || 0);

  elementTotalDiscount.value = totalDiscount.toFixed(2);
  elementTotal.value = (total - totalDiscount).toFixed(2);

  const obj = {
    valueBase: elementBase.value || 0,
    valueTransport: elementTransport.value || 0,
    valueFood: elementFood.value || 0,
    valueDiscountCar: elementDiscountCar.value || 0,
    valueDiscountAbsence: elementDiscountAbsence.value || 0,
  };

  localStorage.setItem('calc', JSON.stringify(obj));
}

const valueStorage = JSON.parse(localStorage.getItem('calc'));
if (valueStorage) {
  calcular(valueStorage);
}

const arrInput = document.querySelectorAll('input[type="number"]');
arrInput.forEach((element) => {
  if (element.disabled === false) {
    element.onchange = calcular;
  }
});
