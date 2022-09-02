const inputTexto = document.getElementById('text-input');
const inputImagem = document.getElementById('meme-insert')

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