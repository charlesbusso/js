
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let progresso = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar
let nivel = document.querySelector('h2')
let somAcerto = document.querySelector('#somAcerto')
let somErro = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// pergunta

let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

//alternativas

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')
//article com a class questao
let articleQuestoes = document.querySelector('.questoes')
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
        pergunta : "Como Jesus foi encontrado ?",
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
    alternativaC : "Abrão",
    alternativaD : "moisés",
    correta : "Abrão",
} 
const q6 = {
    numQuestao : 6,
    pergunta : "Quantos anos viveu Matusalém ?", 
    alternativaA : "962",
    alternativaB : "996",
    alternativaC : "969",
    alternativaD : "992",
    correta : "969",
}
const q7 = {
    numQuestao : 7,
    pergunta : "Quantos anos tinha José quando foi vendido pelos irmãos ?", 
    alternativaA : "22",
    alternativaB : "15",
    alternativaC : "17",
    alternativaD : "19",
    correta : "17",
}
const q8 = {
    numQuestao : 8,
    pergunta : "José sonhou que o sol, a lua e 11 estrelas se uncurvavam perante ele. O que isso quer dizer ?", 
    alternativaA : "Que ele será um deus",
    alternativaB : "Que o pai, mãe e seus irmaos se encurvariam a ele",
    alternativaC : "Que ele é um anjo de Deus",
    alternativaD : "Ele inventou o sonho pra provocar os irmãos",
    correta : "Que o pai, mãe e seus irmaos se encurvariam a ele",
}
const q9 = {
    numQuestao : 9,
    pergunta : "Quem era Davi ?", 
    alternativaA : "Rei de Israel e Judá",
    alternativaB : "Pastor da Igreja",
    alternativaC : "Soldado de Israel",
    alternativaD : "Profeta",
    correta : "Rei de Israel e Judá",
}
const q10 = {
    numQuestao : 10,
    pergunta : " Segundo Deus, o que Davi era ?", 
    alternativaA : "Sacerdote",
    alternativaB : "O coração de Deus",
    alternativaC : "Rei muito bom",
    alternativaD : "Rei muito mal",
    correta : "O coração de Deus",
}
const q11 = {
    numQuestao : 11,
    pergunta : "Davi cometeu um adultério e depois se casou com a moça, quem era ela ?", 
    alternativaA : "Miriã",
    alternativaB : "Jeosebede",
    alternativaC : "Rebeca",
    alternativaD : "Bateseba",
    correta : "Bateseba",
}
const q12 = {
    numQuestao : 12,
    pergunta : "Qual filho de Davi reinou após sua morte ?", 
    alternativaA : "Salomão",
    alternativaB : "Jeroboão",
    alternativaC : "Roboão",
    alternativaD : "Samuel",
    correta : "Salomão",
}
const q13 = {
    numQuestao : 13,
    pergunta : "Quem matou o Gigante que tinha seis dedos em cada mão e seis dedos em cada pé ?", 
    alternativaA : "Samuel",
    alternativaB : "Davi",
    alternativaC : "Jeremias",
    alternativaD : "Jonatas",
    correta : "Jonatas",
}
const q14 = {
    numQuestao : 14,
    pergunta : " Quem era o melhor amigo de Davi ?", 
    alternativaA : "Samuel",
    alternativaB : "Itai",
    alternativaC : "Jeremias",
    alternativaD : "Jonatas",
    correta : "Itai",
}
const q15 = {
    numQuestao : 15,
    pergunta : "O que Salomão pediu a Deus em um sonho ?", 
    alternativaA : "Riqueza",
    alternativaB : "Sabedoria",
    alternativaC : "Vingança a seus inimigos",
    alternativaD : "Poder",
    correta : "Sabedoria",
}
const q16 = {
    numQuestao : 16,
    pergunta : "Segundo Oséias, o povo é destruido por causa do que ?", 
    alternativaA : "Só pensam em vingança",
    alternativaB : "Não sabem se defender",
    alternativaC : "São fracos e oprimidos",
    alternativaD : "Por falta de conhecimento na palavra de Deus",
    correta : "Por falta de conhecimento na palavra de Deus",
}
const q17 = {
    numQuestao : 17,
    pergunta : " Quem é o Avô de Davi?", 
    alternativaA : "Obede",
    alternativaB  : "Boaz",
    alternativaC : "Jessé ",
    alternativaD : "Elias",
    correta : "Obede",
}
const q18 = {
    numQuestao : 18,
    pergunta : " Quem eram os filhos de Noemi?", 
    alternativaA : "José e Judá",
    alternativaB : "Jacó e Esaúl",
    alternativaC : "Malom e Quiliom",
    alternativaD : "Elimeleque e Adrameleque ",
    correta : "Malom e Quiliom",
}
const q19 = {
    numQuestao : 19,
    pergunta : "Quem era a sogra de Rute", 
    alternativaA : "Noeli",
    alternativaB : "Norma",
    alternativaC : "Raquel",
    alternativaD : "Noemi",
    correta : "Noemi",
}
const q20 = {
    numQuestao : 20,
    pergunta : "Quem fez um voto de tolo na Bíblia", 
    alternativaA : "Adorão",
    alternativaB : "João Batista",
    alternativaC : "Gileade",
    alternativaD : "Jefté",
    correta : "Jefté",
}
const q21 = {
    numQuestao : 21,
    pergunta : "Quais são os livros de Salomão na Bíblia", 
    alternativaA : "Eclesiastes, Provérbios e Samuel",
    alternativaB : "Jeremias, Provérbios e Cântico dos Cânticos",
    alternativaC : "Lamentações, Salmos e Provérbios",
    alternativaD : "Eclesiastes, Provérbios e Cântico dos Cânticos ",
    correta : "Eclesiastes, Provérbios e Cântico dos Cânticos",
}
const q22 = {
    numQuestao : 22,
    pergunta : "Quais são os livros de Salomão na Bíblia", 
    alternativaA : "Eclesiastes, Provérbios e Samuel",
    alternativaB : "Jeremias, Provérbios e Cântico dos Cânticos",
    alternativaC : "Lamentações, Salmos e Provérbios",
    alternativaD : "Eclesiastes, Provérbios e Cântico dos Cânticos ",
    correta : "Eclesiastes, Provérbios e Cântico dos Cânticos",
}


//constante com um array de objetos com todas as questões
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22 ]

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

alternativas.addEventListener('dblclick', () => {
    pontos -= 10
    if(numQuestao.value == 10 && pontos == 110){
        pontos = 100
    }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}
function piscarNoAcerto(){
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')

}
function piscarNoErro(){
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}
function tirarPiscar(){
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}
function verificarSeAcertou(nQuestao, resposta) {
    let numeroDaQuestao = nQuestao.value

    let respostaEscolhida = resposta.textContent
    let certa = questoes[numeroDaQuestao].correta
    if(respostaEscolhida == certa) {
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10
        titulo.textContent = "Parabéns você acertou 😊"
        if(nQuestao.value == 1 && pontos == 20){
            pontos = 10
        }
        
       }else {
        piscarNoErro()
        somErro.play()
        titulo.textContent = "Que pena, você errou 😢 !! Precisa estudar mais!"
         }
         setTimeout(() => {
            tirarPiscar()
         }, 700);

         if (numeroDaQuestao < 10){
            nivel.textContent = 'Nivel 1'
         }else if((numeroDaQuestao => 11)&& (numeroDaQuestao <= 20)){
            nivel.textContent = 'Nível 2'
         }else if((numeroDaQuestao => 20)&&(numeroDaQuestao <= 30)){
            nivel.textContent = 'Nível 3'
         }else(nivel)

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
            titulo.textContent = ''
        }

       }, 950)

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

    if(pontos < 80){
        pergunta.textContent = "Precisa estudar mais, Você não sabe muito sobre a Bíblia 😢!"
    }else if((pontos => 80)&&(pontos <= 150)){
        pergunta.textContent = "Você acertou algumas questões, mais tem que estudar mais! 😢"
    }else if((pontos => 160)&&(pontos <= 290)){
        pergunta.textContent = "Parabéns, Você sabe bastante da Bíblia 😊"
    }else if((pontos => 300)){ 
    pergunta.textContent = "Parabéns, Você acertou todas as perguntas e sabe muito, mais muito sobre a Bíblia 😊😊😊😊😊"
    }else (pergunta.textContent = '') 


    

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



















