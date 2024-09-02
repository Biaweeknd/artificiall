const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você prefere qual estilo de musica?",
        alternativas: [
            {
                texto: "internacional",
                afirmacao: "No início você escolheu musica internacional "
            },
            {
                texto: "brasileira",
                afirmacao: "no inicio você escolheu musica brasileira"
            }
        ]
    },
    {
        enunciado: "o que você prefere?",
        alternativas: [
            {
                texto: "doce.",
                afirmacao: "você preferiu doce."
            },
            {
                texto: "salgado.",
                afirmacao: "você preferiu salgado."
            }
        ]
    },
    {
        enunciado: "se você ver um animal na rua você faria o que?",
        alternativas: [
            {
                texto: "levaria pra casa.",
                afirmacao: "você ganhou um amigo."
            },
            {
                texto: "ou passaria reto e fingiria que não viu.",
                afirmacao: "você ignorou, você é uma pessoa ruim."
            }
        ]
    },
    {
        enunciado: "o que mais prefere?",
        alternativas: [
            {
                texto: "nescau.",
                afirmacao: "você escolheu nescau parabéns você é uma pessoa incrível."
            },
            {
                texto: "toddy.",
                afirmacao: "poh, tu nâo fez uma boa escolha"
            }
        ]
    },
    {
        enunciado: "qual a forma correta? ",
        alternativas: [
            {
                texto: "biscoito.",
                afirmacao: "talvez não foi uma boa escolha, mas parabéns é sua opinião."
            },
            {
                texto: "bolacha.",
                afirmacao: "tu é o cara, vocẽ é incrível. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();