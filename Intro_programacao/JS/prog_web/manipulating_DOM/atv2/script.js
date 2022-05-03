const main = document.querySelector('main');

function addImagem() {
  const img = document.createElement('img');
  img.src = './cats.jpg';
  img.width = 700;
  main.appendChild(img);
}
