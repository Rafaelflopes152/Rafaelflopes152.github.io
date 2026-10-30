/// script.js

// 1. Pegar referências de TODOS os elementos HTML que vamos interagir
// Isso é como o JavaScript "encontra" as partes da sua página
const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');
const resetButton = document.getElementById('reset-btn'); // Referência para o botão de reset

const playerChoiceDisplay = document.getElementById('player-choice-display');
const aiChoiceDisplay = document.getElementById('ai-choice-display');
const roundResultDisplay = document.getElementById('round-result');
const playerScoreDisplay = document.getElementById('player-score-display');
const aiScoreDisplay = document.getElementById('ai-score-display');

// 2. Variáveis para o placar do jogo (iniciam em zero)
// Usamos 'let' porque esses valores vão mudar durante o jogo
let playerScore = 0;
let aiScore = 0;

// 3. Função para a IA fazer sua escolha
// Ela vai gerar um número aleatório e converter para Pedra, Papel ou Tesoura
function getAiChoice() {
    // Gera um número aleatório entre 0 (inclusive) e 3 (exclusive),
    // depois arredonda para baixo, resultando em 0, 1 ou 2.
    const randomNumber = Math.floor(Math.random() * 3);

    // Mapeia os números para as opções do jogo
    // 0 = Pedra, 1 = Tesoura, 2 = Papel (conforme sua especificação!)
    const aiOptions = ['Pedra', 'Tesoura', 'Papel'];

    // Retorna a escolha da IA (ex: 'Pedra', 'Tesoura', 'Papel')
    return aiOptions[randomNumber];
}

// 4. Função principal para jogar uma rodada
// Esta função será chamada quando o jogador clicar em Pedra, Papel ou Tesoura
// Função principal para jogar uma rodada
function playRound(playerChoice) {
    // Exibe a escolha do jogador na tela
    playerChoiceDisplay.textContent = playerChoice;

    // Faz a IA escolher e exibe a escolha da IA na tela
    const aiChoice = getAiChoice(); // Chama a função que criamos para a IA
    aiChoiceDisplay.textContent = aiChoice;

    let resultMessage = ''; // Variável para armazenar a mensagem de resultado da rodada

    // --- LÓGICA PARA DETERMINAR O VENCEDOR ---
    if (playerChoice === aiChoice) {
        resultMessage = 'Empate!';
    } else if (
        (playerChoice === 'Pedra' && aiChoice === 'Tesoura') ||
        (playerChoice === 'Papel' && aiChoice === 'Pedra') ||
        (playerChoice === 'Tesoura' && aiChoice === 'Papel')
    ) {
        resultMessage = 'Você Venceu!';
        playerScore++; // Incrementa a pontuação do jogador
    } else {
        resultMessage = 'IA Venceu!';
        aiScore++; // Incrementa a pontuação da IA
    }
    // --- FIM DA LÓGICA ---

    // Atualiza o display do resultado da rodada
    roundResultDisplay.textContent = resultMessage;

    // Atualiza os placares na tela
    playerScoreDisplay.textContent = playerScore;
    aiScoreDisplay.textContent = aiScore;

    console.log(`Jogador: ${playerChoice}, IA: ${aiChoice}. Resultado: ${resultMessage}`); // Ajuda a depurar
    console.log(`Placar: Você ${playerScore} x ${aiScore} IA`); // Mostra o placar atual
}


// 5. Adicionar "ouvintes de evento" (event listeners) aos botões de jogada
// Quando um botão é clicado, ele chama a função 'playRound' com a escolha correspondente
rockButton.addEventListener('click', () => playRound('Pedra'));
paperButton.addEventListener('click', () => playRound('Papel'));
scissorsButton.addEventListener('click', () => playRound('Tesoura'));

// 6. Implementação do botão de Reiniciar Jogo (do mini-desafio anterior)
resetButton.addEventListener('click', () => {
    playerScore = 0; // Zera o placar do jogador
    aiScore = 0;     // Zera o placar da IA

    playerScoreDisplay.textContent = playerScore; // Atualiza o display do placar do jogador
    aiScoreDisplay.textContent = aiScore;         // Atualiza o display do placar da IA

    roundResultDisplay.textContent = 'Jogo Reiniciado! Faça sua jogada!'; // Mensagem de reset
    playerChoiceDisplay.textContent = ''; // Limpa a escolha anterior do jogador
    aiChoiceDisplay.textContent = '';     // Limpa a escolha anterior da IA
    console.log('Jogo Reiniciado!');
});