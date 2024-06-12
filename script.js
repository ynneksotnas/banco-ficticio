// script.js

// Função para redirecionar para a página principal
function redirectToMainPage() {
    window.location.href = 'index.html'; // Substitua 'main.html' pelo caminho da sua página principal
}

// Configura o tempo de exibição da splash screen (por exemplo, 3 segundos)
document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(redirectToMainPage, 1000);
});
