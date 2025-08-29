function revealContent(id) {
    const content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

function showMessage(item) {
    const message = document.getElementById("secret-message");
    message.style.display = "block";
    
    if (item === 4) {
        message.textContent = "ERRO: Nível de acesso insuficiente. Este item não está disponível para seu tipo.";
    } else {
        message.textContent = "AVISO: Este item contém ingredientes que podem alterar permanentemente sua existência.";
    }
    
    setTimeout(() => {
        message.style.display = "none";
    }, 5000);
}

// Efeito de digitação para todos os elementos com classe typewriter
document.addEventListener('DOMContentLoaded', function() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    typewriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.width = '0';
        
        setTimeout(() => {
            let i = 0;
            const typing = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                    element.style.borderRight = 'none';
                }
            }, 50);
        }, 1000);
    });
});