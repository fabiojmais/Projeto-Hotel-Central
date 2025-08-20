document.addEventListener('DOMContentLoaded', () => {
    const roomsContainer = document.querySelector('.rooms-container');
    
    // Função para criar o HTML de um cartão de quarto
    function createRoomCard(room) {
        const comodidadesList = room.comodidades.map(item => `
            <p><i class="fas fa-check-circle"></i> ${item}</p>
        `).join('');

        return `
            <div class="room-card">
                <img src="${room.imagem}" alt="${room.nome}">
                <div class="room-info">
                    <h3>${room.nome}</h3>
                    <p><i class="fas fa-user"></i> ${room.capacidade} hóspede${room.capacidade > 1 ? 's' : ''}</p>
                    <p>${room.descricao}</p>
                    <div class="room-comodities">
                        ${comodidadesList}
                    </div>
                    <p class="price">R$ ${room.preco} <span>/diária</span></p>
                    <a href="reserva.html?room=${room.id}" class="btn-primary">Reservar</a>
                </div>
            </div>
        `;
    }

    // Renderizar os quartos na página
    if (roomsContainer && typeof quartosData !== 'undefined') {
        let roomsHTML = '';
        quartosData.forEach(room => {
            roomsHTML += createRoomCard(room);
        });
        roomsContainer.innerHTML = roomsHTML;
    }
});