const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultadp");



const perguntas = [
    {
        enunciado: "Imagine que você tirou 30 dias de férias e pode escolher seu desino podendo levar quem quiser. Porém está em dúvida para onde ir, nós podemos te ajudar. Qual o clima de sua preferência?",
        alternativas: [
            {
                texto: " Lugares quentes ",
                afirmacao: " Lembre-se de levar protetor solar. ",
            },
            {
                texto: " Lugares frios ",
                afirmacao: " Lembre-se de levar agasalhos. ",
            }
        ]
    },
    {
        enunciado: " Ótimo! Continuando com a sua preferência, o lugar que deseja ir, seria... ",
        alternativas: [
            {
                texto: " Lugares agitados e movimentados ",
                afirmacao: " Sempre fique atento, mantenha seus pertencer próximos. ",
            },
            {
                texto: " Lugares calmos e aconchegantes ",
                afirmacao: " Aproveite suas férias para tirar um descanso. ",
            }
        ]
    },
    {
        enunciado: " Maravilhoso! Me conta... quem irá te acompanhar?",
        alternativas: [
            {
                texto: " Fámilia e/ou pet's ",
                afirmacao: " Hotéis e resort's são a melhor opção para você. ",
            },
            {
                texto: " Amigos ",
                afirmacao: " AirBnb e empresas de turismo podem te auxiliar. ",
            }
        ]
    },
    {
        enunciado: " Bom! De acordo com seu financeiro, quanto pretende gastar em sua viagem?",
        alternativas: [
            {
                texto: " Até três salários mínimos ",
                afirmacao: " Boa opção para você são viagens nacionais. ",
            },
            {
                texto: " Acima de três salários mínimos  ",
                afirmacao: " Você irá adorar conhecer novos países. ",
            }
        ]
    },
    {
        enunciado: " Para finalizar... Qual o meio de locomoção você pretende utilizar para chegar ao seu destino?",
        alternativas: [
            {
                texto: " Carros ou motocicletas ",
                afirmacao: " Seu destino pode ser próximo de você. ",
            },
            {
                texto: " Avião ou ônibus ",
                afirmacao: " Sair de sua zona de conforto e conhecer novos horizontes. ",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}








mostraPergunta();