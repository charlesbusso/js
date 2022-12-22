
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// pergunta

let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

//alternativas

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')
//article com a class questao
let articleQuestoes = document.querySelector('questoes')
let alternativas = document.querySelector('#alternativas')


const q0 = {
    numQuestao : 0,
    pergunta : "pergunta",
    alternativaA : "alternativa A",
    alternativaB : "alternativa B",
    alternativaC : "alternativa C",
    alternativaD : "alternativa D",
    correta : "0",

}
const q1 = {
    numQuestao : 1,
    pergunta : "Quem matou Caim ?",
    alternativaA : "Sansão",
    alternativaB : "Jacó",
    alternativaC : "Abel",
    alternativaD : "Moisés",
    correta : "Abel",

}

    const q2 = {
        numQuestao : 2,
        pergunta : "Como Moisés foi encontrado ?",
        alternativaA : "Na cama",
        alternativaB : "Manjedoura",
        alternativaC : "Berço",
        alternativaD : "No mato",
        correta : "Manjedoura",
}

const q3 = {
    numQuestao : 3,
    pergunta : "Qual personagem biblico viveu mais ?",
    alternativaA : "Jarede",
    alternativaB : "Matusalém",
    alternativaC : "Noé",
    alternativaD : "Adão",
    correta : "Matusalém",
}
const q4 = {
    numQuestao : 4,
    pergunta : "Quantos anos viveu Sara ?",
    alternativaA : "127",
    alternativaB : "125",
    alternativaC : "132",
    alternativaD : "117",
    correta : "127",
}

const q5 = {
    numQuestao : 5,
    pergunta : "Deus disse a quem : Anda na minha presença e sê perfeito", 
    alternativaA : "Adão",
    alternativaB : "Jacó",
    alternativaC : "Abraão",
    alternativaD : "moisés",
    correta : "Abraão",
} 

//constante com um array de objetos com todas as questões
const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')
numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
total.textContent = totalDeQuestoes

//montar a 1a questão completa para iniciar o quiz

numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

//configurar o value da 1a questão completa

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

//PARA MONTAR AS PRÓXIMAS QUESTÕES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao + 'A')
    b.setAttribute('value', nQuestao + 'B')
    c.setAttribute('value', nQuestao + 'C')
    d.setAttribute('value', nQuestao + 'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}
function verificarSeAcertou(nQuestao, resposta) {
    let numeroDaQuestao = nQuestao.value

    let respostaEscolhida = resposta.textContent
    let certa = questoes[numeroDaQuestao].correta
    if(respostaEscolhida == certa) {
        pontos += 10
       }else {
          
    }



       //atualizar  o placar

       placar = pontos
       instrucoes.textContent = "Pontos" + placar
       //bloquear a escolha de opcoes
       bloquearAlternativas()

       setTimeout(function() {
        proxima = numeroDaQuestao+1
        
        if (proxima > totalDeQuestoes) {
            fimDoJogo()
        }else {
            proximaQuestao(proxima)
        }

       }, 250)

       desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "fim do Jogo !!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent = "Você conseguiu" + " " + pont
    aviso.textContent = "você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    //ocultar o article da questao

    articleQuestoes.style.display = 'none'
    setTimeout(function() {
        pontos = 0 
        location.reload();

    }, 2000)
}



















