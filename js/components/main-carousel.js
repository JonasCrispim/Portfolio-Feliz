// 1º Acessar a janela (browser)
// 2º Pegar HTML todo
// 3º Pegar botão
// 4º Saber que está sendo clicado no botão
// 5º Acessar a janela
// 6º Pegar o HTML todo
// 7º Pegar o elements
// 8º Mover o elements para direita

const btnRight = window.document.querySelector('.button-arrow.-right');
const btnLeft = window.document.querySelector('.button-arrow.-left')
const elements = window.document.querySelector('.elements');
let pixelsP = 10;
let pixelsN = -10;

btnLeft.addEventListener('click', function() {
    pixelsP = 0;
    pixelsN = pixelsN - 10;
    elements.style = `transform: translateX(${pixelsN}px)`;
})

btnRight.addEventListener('click', function() {
    pixelsN = 0;
    pixelsP = pixelsP + 10;
    elements.style = `transform: translateX(${pixelsP}px)`;
});