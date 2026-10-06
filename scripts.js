// Seleciona o botão de alternar tema e o elemento body do HTML
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

// 1. VERIFICAÇÃO INICIAL: Recupera o tema salvo no navegador do usuário
const temaSalvo = localStorage.getItem('theme');

// Se houver um tema salvo, aplica ele imediatamente ao carregar a página
if (temaSalvo) {
    bodyElement.className = temaSalvo;
} else {
    // Caso contrário, verifica se o sistema operacional do usuário prefere modo escuro por padrão
    const prefereDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefereDark) {
        bodyElement.className = 'dark-mode';
    } else {
        bodyElement.className = 'light-mode';
    }
}

// 2. EVENTO DE CLIQUE: Gerencia a troca de cores ao clicar no botão
themeToggleBtn.addEventListener('click', () => {
    // Se estiver no light-mode, muda para dark e salva a preferência
    if (bodyElement.classList.contains('light-mode')) {
        bodyElement.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        // Caso contrário, muda para light e atualiza o salvamento
        bodyElement.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});
