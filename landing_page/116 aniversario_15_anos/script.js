// 1. Obter referências aos elementos HTML
const painel1 = document.getElementById('painel1');
const painel2 = document.getElementById('painel2');
const introVideo = document.getElementById('introVideo'); // Referência ao elemento de vídeo
const meuSom = document.getElementById('backgroundMusic');

// 2. Função dedicada para esconder o Painel 1 e mostrar o Painel 2
const transicionarParaPainel2 = () => {
    // Se o painel1 já está escondido, não fazemos nada (evita execuções múltiplas)
    if (painel1.classList.contains('escondido')) {
        return;
    }

    // Esconde o Painel 1
    painel1.classList.add('escondido');
    // Mostra o Painel 2
    painel2.classList.remove('escondido');
    meuSom.play();
    console.log('Transição para Painel 2 realizada.');

    // Opcional: Pausar o vídeo se ele ainda estiver tocando em segundo plano
    // e remover o event listener para evitar chamadas futuras desnecessárias
    if (!introVideo.paused) {
        introVideo.pause();
    }
    introVideo.removeEventListener('ended', transicionarParaPainel2);
    painel1.removeEventListener('click', transicionarParaPainel2); // Remove o listener de clique do painel1
};

// 3. Adicionar "ouvinte de evento" de clique ao Painel 1 (para pular o vídeo)
painel1.addEventListener('click', transicionarParaPainel2);

// 4. Adicionar "ouvinte de evento" para o final do vídeo
// Quando o vídeo terminar, a função transicionarParaPainel2 será chamada.
introVideo.addEventListener('ended', transicionarParaPainel2);

// Opcional: Tratar casos onde o autoplay pode ser bloqueado
// Alguns navegadores podem bloquear o autoplay, especialmente se o vídeo não estiver mutado.
// Você pode adicionar um fallback com setTimeout, mas o ideal é que o vídeo seja mutado
// ou que haja um botão de "Play" visível se o autoplay falhar.
// Para este exemplo, vamos assumir que o autoplay mutado funciona.

// Se o autoplay falhar e você quiser um fallback de tempo, você pode fazer algo assim:
/*
const FALLBACK_TIME = 35000; // 35 segundos para dar tempo do autoplay tentar
let fallbackTimerId = setTimeout(() => {
    if (!painel1.classList.contains('escondido')) {
        console.warn('Autoplay pode ter sido bloqueado ou vídeo não terminou. Transicionando via fallback timer.');
        transicionarParaPainel2();
    }
}, FALLBACK_TIME);

// Dentro de transicionarParaPainel2, adicione:
// if (fallbackTimerId) {
//     clearTimeout(fallbackTimerId);
// }
*/