const inputTexto = document.getElementById('text-input');

const memeTexto = document.getElementById('meme-text');

function atualizaTexto() {
  memeTexto.innerHTML = inputTexto.value;
}

inputTexto.addEventListener('input', atualizaTexto);
