document.addEventListener('DOMContentLoaded', () => {
    const botaoNao = document.getElementById('nao');

    botaoNao.addEventListener('mouseenter', () => {
        const container = botaoNao.parentElement;
        const containerRect = container.getBoundingClientRect();
        const buttonRect = botaoNao.getBoundingClientRect();
        
        const newLeft = Math.random() * (containerRect.width - buttonRect.width);
        const newTop = Math.random() * (containerRect.height - buttonRect.height);
        
        botaoNao.style.position = 'absolute';
        botaoNao.style.left = `${newLeft}px`;
        botaoNao.style.top = `${newTop}px`;
    });
});