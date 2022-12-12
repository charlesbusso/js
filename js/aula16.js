//selecionar elementos

let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click', function() {
    //adicionar a animação
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')

    //tocar oefeito sonoro

    dadoRolando.play()

    //ocultar o botão sortear
    btnSortear.style.display = "none"

    //usar setimeout para executar as açoes após 1.75seg

    setTimeout(function() {

        //armazenar numero sorteado na variavel
        numeroSorteado = getRandomInt(1,6)

        //definir atributo src com base no numero
        imgDado.setAttribute('src' , './imagens/'+numeroSorteado+'.png')

        //escrever no paragrafo o numero sorteado

        sorteado.textContent = numeroSorteado

        //exibir o botao sortear

        btnSortear.style.display = 'inline-block'

        //retirar a animação

        imgDado.classList.remove('animar')
        sorteado.classList.remove('aparecer')
    }, 1750 )
})

//função que gera numero randomico inteiro

function getRandomInt(min, max) {
    min = Math.ceil(min) // arredonda para cima ceil = teto
    max = Math.floor(max) // arredonda para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min
}