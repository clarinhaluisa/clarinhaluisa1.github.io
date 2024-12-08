// Exemplo de Interatividade
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Seleciona todas as fotos
const fotos = document.querySelectorAll('.foto');

// Adiciona evento de clique a cada foto
fotos.forEach(foto => {
    foto.addEventListener('click', () => {
        exibirFullscreen(foto.style.backgroundImage);
    });
});

// Função para exibir imagem em tela cheia
function exibirFullscreen(backgroundImage) {
    // Cria o elemento de tela cheia
    const fullscreenDiv = document.createElement('div');
    fullscreenDiv.classList.add('fullscreen');
    fullscreenDiv.style.backgroundImage = backgroundImage;

    // Adiciona evento para fechar ao clicar
    fullscreenDiv.addEventListener('click', () => {
        fullscreenDiv.remove();
    });

    // Adiciona o elemento ao body
    document.body.appendChild(fullscreenDiv);
}

// Obter elementos do modal
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

// Adicionar eventos de clique nas fotos
document.querySelectorAll('.foto').forEach((foto) => {
    foto.addEventListener('click', () => {
        // Obter a URL da imagem do estilo `background-image`
        const imageUrl = window.getComputedStyle(foto).backgroundImage.slice(5, -2);
        modalImage.src = imageUrl; // Definir a imagem no modal
        modal.style.display = 'flex'; // Mostrar o modal
    });
});

// Fechar o modal ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar o modal ao clicar fora da imagem
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
