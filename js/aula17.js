let numeroSecreto = 0
//let numeroDeChances = 3

let contador = 1
let min = 1
let max = 10
let situacao = ''

//selecionar elementos

let inputNumero = document.querySelector('#inputNumero')
let btnChutar = document.querySelector('#btnChutar')
let aviso = document.querySelector('#aviso')
let musica = document.querySelector('#musicaDeFundo')

//funções ou metodos para controlar o jogo

function gerarNumeroSecreto() {
    numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min
}
function bloquearBtnChutar() {
    btnChutar.setAttribute('disabled', 'disabled')
    btnChutar.style.background = '#ccc'
    btnChutar.style.cursor = 'not-allowed'
}
function ativarBtnChutar() {
    btnChutar.removeAttribute('disabled')
    btnChutar.style.background = '#222'
    btnChutar.style.cursor = 'pointer'
}

function validarNumeroDigitado(numero) {
    if (numero <= 0 || numero > 10) {
        aviso.classList.add('errou')
        mensagemRapida('Você não está sendo um mentalista! Digite um número inteiro entre 1 e 10.')
        bloquearBtnChutar()
        inputNumero.value = ''
    } else {

    }
}

/* metodos para manipular musica*/

function tocarMusicaDeFundo() {
    musica.play()
}
function ativarDesativarMusica() {
    if (musica.muted ) {
        musica.muted = false;
    }else {
        musica.muted = true;
    }
}

function pausarMusicaDeFundo() {
    musica.pause()
    musica.currentTime = 0;
}
function jogar() {
    verificarSeAcertou()
}

function mensagemRapida(mensagem) {
    aviso.textContent = mensagem
    setTimeout(function() {
        aviso.textContent = ""
        aviso.classList.remove('acertou')
        aviso.classList.remove('errou')
        inputNumero.value = ''
    }, 3000)
}

function gameOver(situacao) {
    switch (situacao) {

        case 'acertou':
            aviso.classList.add('acertou')
            mensagemRapida('Acertou, o número secreto era' + numeroSecreto)
            break
        case 'chute maior':
            mensagemRapida('Chute maior que o número secreto')
            aviso.classList.add('errou')  
            break
            
        case 'chute menor':
            aviso.classList.add('errou')
            mensagemRapida('Chute menor que o número secreto')    
            break

            default:
    }

}

function verificarSeAcertou() {
    //pegar o valor do input numerodigitadoe converter para inteiro
    chute = parseInt(document.querySelector('#inputNumero').value)
     
    if(numeroSecreto === chute) {
        situacao = 'acertou'
        gameOver(situacao)
        gerarNumeroSecreto()//gerar novo numero secreto

    }else if (chute > numeroSecreto) {
        situacao = 'chute maior'
        gameOver(situacao)

    } else if (chute < numeroSecreto) {
        situacao = 'chute menor'
        gameOver(situacao)  

    } else{

        
     }
}
