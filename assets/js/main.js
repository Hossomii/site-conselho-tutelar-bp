/**
 * Função para inicializar a lógica do menu hamburguer.
 * Ela só é chamada DEPOIS que o cabeçalho estiver na página.
 */
const inicializarMenuHamburguer = () => {
    const hamburguerBtn = document.querySelector("#hamburguer-btn");
    const navMenu = document.querySelector("header nav");

    if (hamburguerBtn && navMenu) {
        hamburguerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('nav-active');
            hamburguerBtn.classList.toggle('is-active');
        });
    }
};

/**
 * Função genérica para carregar um arquivo HTML e inseri-lo na página.
 * @param {string} filePath - O caminho para o arquivo HTML.
 * @param {string} elementId - O ID do elemento placeholder.
 * @param {function} callback - Uma função para ser executada após o carregamento.
 */
const loadHTMLComponent = (filePath, elementId, callback) => {
    fetch(filePath)
        .then(response => response.ok ? response.text() : Promise.reject('Arquivo não encontrado.'))
        .then(data => {
            const placeholder = document.getElementById(elementId);
            if (placeholder) {
                placeholder.outerHTML = data; // Substitui o placeholder pelo conteúdo
            }
            if (callback) {
                callback();
            }
        })
        .catch(error => console.error(`Falha ao carregar ${filePath}:`, error));
};

// Evento principal que roda quando o DOM está pronto
document.addEventListener('DOMContentLoaded', () => {
    // Carrega o cabeçalho e, no final, executa a função para ativar o menu
    loadHTMLComponent('_partials/_header.html', 'header-placeholder', inicializarMenuHamburguer);
    
    // Carrega o rodapé
    loadHTMLComponent('_partials/_footer.html', 'footer-placeholder');
});