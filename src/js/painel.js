const imagens = document.querySelectorAll('.imagem-painel');
const setaVoltar = document.getElementById('btn-voltar');
const setaAvancar = document.getElementById('btn-avancar');
let imagemAtual = 0;
let intervalo;

function esconderImagens() {
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });
}

function mostrarImagem() {    
    imagens[imagemAtual].classList.add('mostrar');
}

function avancarImagem() {
    if(imagemAtual !== imagens.length - 1) {
        imagemAtual++;        
    } else {
        imagemAtual = 0;
    }
    esconderImagens();
    mostrarImagem();
}

function voltarImagem() {
    if (imagemAtual !== 0) {
        imagemAtual--;
    } else {
        imagemAtual = imagens.length - 1;
    }
    esconderImagens();
    mostrarImagem();
}

setaAvancar.addEventListener('click', avancarImagem);
setaVoltar.addEventListener('click', voltarImagem);

function automatico() {
    intervalo = setInterval(avancarImagem, 5000);
}

function parar() {
    clearInterval(intervalo);
}

automatico();

const carrossel = document.querySelector('.conteudo-principal .paineis');
carrossel.addEventListener('mouseenter', parar);
carrossel.addEventListener('mouseleave', automatico);
