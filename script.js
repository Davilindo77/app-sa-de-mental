function registrar(sentimento, emoji) {
    const display = document.getElementById('texto-dica');
    
    const mensagens = {
        'Feliz': 'Que incrível! Aproveite essa energia para ajudar um colega hoje.',
        'Neutro': 'Dias calmos também são importantes. Que tal ouvir uma música?',
        'Triste': 'Tudo bem ficar assim. Respire fundo e tente conversar com alguém de confiança.',
        'Ansioso': 'Tente a técnica de respirar: inspire em 4 segundos e solte em 6.'
    };

    display.innerText = `${emoji} ${sentimento}: ${mensagens[sentimento]}`;

    // Salvar no Histórico
    salvarNoHistorico(sentimento, emoji);
}

function salvarNoHistorico(sentimento, emoji) {
    const agora = new Date();
    const dataFormatada = `${agora.getDate()}/${agora.getMonth() + 1} ${agora.getHours()}:${agora.getMinutes()}`;
    
    const novoRegistro = {
        data: dataFormatada,
        sentimento: sentimento,
        emoji: emoji
    };

    // Pega o que já existe ou cria lista vazia
    let historico = JSON.parse(localStorage.getItem('historicoHumor')) || [];
    
    // Adiciona no início da lista
    historico.unshift(novoRegistro);
    
    // Salva de volta no LocalStorage
    localStorage.setItem('historicoHumor', JSON.stringify(historico));
    
    renderizarHistorico();
}

function renderizarHistorico() {
    const lista = document.getElementById('lista-historico');
    const historico = JSON.parse(localStorage.getItem('historicoHumor')) || [];
    
    if (historico.length === 0) {
        lista.innerHTML = '<p style="color: #999;">Nenhum registro ainda.</p>';
        return;
    }

    lista.innerHTML = historico.map(item => `
        <div class="item-historico">
            <span>${item.emoji} ${item.sentimento}</span>
            <span style="color: #888;">${item.data}</span>
        </div>
    `).join('');
}

function limparHistorico() {
    if (confirm("Deseja apagar todo o seu histórico?")) {
        localStorage.removeItem('historicoHumor');
        renderizarHistorico();
    }
}

// Carregar histórico ao abrir a página
window.onload = renderizarHistorico;
