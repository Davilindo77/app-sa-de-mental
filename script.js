function registrar(sentimento) {
    const display = document.getElementById('texto-dica');
    
    const mensagens = {
        'Feliz': 'Que incrível! Aproveite essa energia para ajudar um colega hoje.',
        'Neutro': 'Dias calmos também são importantes. Que tal ouvir uma música?',
        'Triste': 'Tudo bem ficar assim. Respire fundo e tente conversar com alguém de confiança.',
        'Ansioso': 'Tente a técnica de respirar: inspire em 4 segundos e solte em 6.'
    };

    display.innerText = `Você selecionou ${sentimento}: ${mensagens[sentimento]}`;
}
