
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
const q6 = {
    numQuestao : 6,
    pergunta : "Quantos anos viveu Matusalém ?", 
    alternativaA : "962",
    alternativaB : "996",
    alternativaC : "969",
    alternativaD : "992",
    correta : "969"
}
const q7 = {
    numQuestao : 7,
    pergunta : "Quantos anos tinha José quando foi vendido pelos irmãos ?", 
    alternativaA : "22",
    alternativaB : "15",
    alternativaC : "17",
    alternativaD : "19",
    correta : "17"
}
const q8 = {
    numQuestao : 8,
    pergunta : "José sonhou que o sol, a lua e 11 estrelas se uncurvavam perante ele. O que isso quer dizer ?", 
    alternativaA : "Que ele será um deus",
    alternativaB : "Que o pai, mãe e seus irmaos se encurvariam a ele",
    alternativaC : "Que ele é um anjo de Deus",
    alternativaD : "Ele inventou o sonho pra provocar os irmãos",
    correta : "Que o pai, mãe e seus irmaos se encurvariam a ele"
}
const q9 = {
    numQuestao : 9,
    pergunta : "Quem era Davi ?", 
    alternativaA : "Rei de Israel e Judá",
    alternativaB : "Pastor da Igreja",
    alternativaC : "Soldado de Israel",
    alternativaD : "Profeta",
    correta : "Rei de Israel e Judá"
}
const q10 = {
    numQuestao : 10,
    pergunta : " Segundo Deus, o que Davi era ?", 
    alternativaA : "Sacerdote",
    alternativaB : "O coração de Deus",
    alternativaC : "Rei muito bom",
    alternativaD : "Rei muito mal",
    correta : "O coração de Deus"
}
const q11 = {
    numQuestao : 11,
    pergunta : "Davi cometeu um adultério e depois se casou com a moça, que era ela ?", 
    alternativaA : "Miriã",
    alternativaB : "Jeosebede",
    alternativaC : "Rebeca",
    alternativaD : "Bateseba",
    correta : "Bateseba"
}
const q12 = {
    numQuestao : 12,
    pergunta : "Qual filho de Davi reinou após sua morte ?", 
    alternativaA : "Salomão",
    alternativaB : "Jeroboão",
    alternativaC : "Roboão",
    alternativaD : "Samuel",
    correta : "Salomão"
}
const q13 = {
    numQuestao : 13,
    pergunta : "Quem matou o Gigante que tinha seis dedos em cada mão e seis dedos em cada pé ?", 
    alternativaA : "Samuel",
    alternativaB : "Davi",
    alternativaC : "Jeremias",
    alternativaD : "Jonatas",
    correta : "Jonatas"
}
const q14 = {
    numQuestao : 14,
    pergunta : " Quem era o melhor amigo de Davi ?", 
    alternativaA : "Samuel",
    alternativaB : "Itai",
    alternativaC : "Jeremias",
    alternativaD : "Jonatas",
    correta : "Itai"
}
const q15 = {
    numQuestao : 15,
    pergunta : "  ?", 
    alternativaA : "Samuel",
    alternativaB : "Itai",
    alternativaC : "Jeremias",
    alternativaD : "Jonatas",
    correta : "Itai"
}

//constante com um array de objetos com todas as questões
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13 ]

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
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
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

    pergunta.textContent = " Parabéns ,Você conseguiu " + pontos + " " + pont
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



















