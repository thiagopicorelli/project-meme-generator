const inputTexto = document.getElementById('text-input');
const inputImagem = document.getElementById('meme-insert');

const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

const memeContainer = document.getElementById('meme-image-container');
const memeTexto = document.getElementById('meme-text');
const memeImagem = document.getElementById('meme-image');

function atualizaTexto() {
  memeTexto.innerHTML = inputTexto.value;
}

inputTexto.addEventListener('input', atualizaTexto);

function atualizaImagem(event) {
  let fr = new FileReader();

  fr.addEventListener('load', () => {
    memeImagem.src = fr.result;
  });

  fr.readAsDataURL(event.target.files[0]);
}

inputImagem.addEventListener('change', atualizaImagem);

let bordas = {
  fire: '3px dashed red',
  water: '5px double blue',
  earth: '6px groove green',
};

function atualizaBorda(tipo) {
  memeContainer.style.border = bordas[tipo];
}

fireButton.addEventListener('click', () => {atualizaBorda('fire');});
waterButton.addEventListener('click', () => {atualizaBorda('water');});
earthButton.addEventListener('click', () => {atualizaBorda('earth');});