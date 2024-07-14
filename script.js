let header = document.querySelector('.header');
let inicioDispaly = document.querySelector('.inicio');
let projetoDisplay = document.querySelector('.projetoSection');
let sobreDisplay = document.querySelector('.sobre');
let contatoDisplay = document.querySelector('.contato');

inicioDispaly.style.display = 'grid';
projetoDisplay.style.display = 'none';
sobreDisplay.style.display = 'none';
contatoDisplay.style.display = 'none';

document.querySelector('.menu').addEventListener('click', () => {
   header.style.display = 'flex';
});

function adjustHeaderDisplay() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 769) {
    header.style.display = 'flex';
  } else {
    header.style.display = 'none';
  }
}

document.querySelector('.inicioBtn').addEventListener('click', () => {
    adjustHeaderDisplay();
    inicioDispaly.style.display = 'grid';
    projetoDisplay.style.display = 'none';
    sobreDisplay.style.display = 'none';
    contatoDisplay.style.display = 'none';
});

document.querySelector('.projetoBtn').addEventListener('click', () => {
    adjustHeaderDisplay();
    inicioDispaly.style.display = 'none';
    projetoDisplay.style.display = 'grid';
    sobreDisplay.style.display = 'none';
    contatoDisplay.style.display = 'none';
});

document.querySelector('.sobreBtn').addEventListener('click', () => {
    adjustHeaderDisplay();
    inicioDispaly.style.display = 'none';
    projetoDisplay.style.display = 'none';
    sobreDisplay.style.display = 'flex';
    contatoDisplay.style.display = 'none';
});

document.querySelector('.contatoBtn').addEventListener('click', () => {
    adjustHeaderDisplay();
    inicioDispaly.style.display = 'none';
    projetoDisplay.style.display = 'none';
    sobreDisplay.style.display = 'none';
    contatoDisplay.style.display = 'flex';
});

// Verificar o tamanho da janela ao carregar a página
adjustHeaderDisplay();

// Adicionar um event listener para redimensionamento da janela
window.addEventListener('resize', adjustHeaderDisplay);
