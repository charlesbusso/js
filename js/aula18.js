//selecionar o input com o numero digitado

let valorDigitado = document.querySelector('#valorEmReal')
//selecionar elementos radio
let moedaSelecionada = document.getElementsByName('moedaEstrangeira')
let aviso = document.querySelector('#aviso')

//slecionar botoes
let btnConverter = document.querySelector('#btnConverter')
let btnLimpar = document.querySelector('#btnLimpar')

//cotaçoes do dia 
let valorDoDolar = 5.31
let valorDoEuro = 6.23
let valorDaLibra = 7.26
let  valorDoBitcoin = 229762.85
let valorEmReal = 0

let moedaEstrangeira = ''
let moedaConvertida = ''

//mensagem formatada para exibir valores monetarios

function mensagemFormatada(moedaConvertida){
    isNaN(valorEmReal) ? valorEmReal = 0 : ''
    aviso.textContent = "O valor " + (valorEmReal).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) + " convertido em " + moedaEstrangeira + " é " + moedaConvertida
}

//verificar se foi digitado o valor para converter

function BloquearBotao() {
    if(valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null) {
        btnConverter.setAttribute('disabled', 'disabled')
        btnConverter.style.background = '#ccc'
        btnConverter.style.cursor = 'not-allowed'
    }
}

//reativar botao

function ativarBotao() {
    if(valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled')
        btnConverter.style.background = '#ffc107'
        btnConverter.style.cursor = 'pointer'
    }else {

    }
}

//veriifcar qual botao radio foi selecionado
//vincular a verificação a um evento , click no botao

btnConverter.addEventListener('click', function() {
    //fazer o parsefloat dos valores monetarios
    valorEmReal = parseFloat(valorDigitado.value)
    for(let i = 0; i < moedaSelecionada.length; i++) {
        if(moedaSelecionada[i].checked){
            moedaEstrangeira = moedaSelecionada[i].value
        }
    }

    switch(moedaEstrangeira){

        case 'Dólar':
        moedaConvertida = valorEmReal / valorDoDolar
        mensagemFormatada(moedaConvertida.toLocaleString('en-US', {style: 'currency', currency: 'USD'}))
        break

        case 'Euro':
            moedaConvertida = valorEmReal / valorDoEuro
            mensagemFormatada(moedaConvertida.toLocaleString('de-DE', {style: 'currency', currency:'EUR'}))
            break

            case 'Libra':
                moedaConvertida = valorEmReal / valorDaLibra
                mensagemFormatada(moedaConvertida.toLocaleString('en-GB', {style: 'currency',currency: 'GBP'}))
            break

            case 'Bitcoins':
                moedaConvertida = valorEmReal /valorDoBitcoin
                mensagemFormatada(parseFloat(moedaConvertida).toFixed(5))
                break
                default:
                    aviso.textContent = 'Escolha uma moeda estrangeira'

    }
    isNaN(moedaConvertida) ? moedaConvertida = 0 : ''
})

btnLimpar.addEventListener('click', function() {
    valorDigitado.focus()
    valorDigitado.value = ''
    aviso.textContent = 'Digite o valor, escolha a moeda e conveter'
    moedaSelecionada[0].checked = false
    moedaSelecionada[1].checked = false
    moedaSelecionada[2].checked = false
    moedaSelecionada[3].checked = false
})