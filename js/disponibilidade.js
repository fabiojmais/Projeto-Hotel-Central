document.addEventListener('DOMContentLoaded', () => {
    const roomsGrid = document.getElementById('roomsGrid');
    const btnAtualizar = document.getElementById('btnAtualizar');

    function createAvailabilityCard(room) {
        const statusText = room.disponivel ? 'Disponível' : 'Indisponível';
        const statusClass = room.disponivel ? 'available' : 'unavailable';
        const statusIcon = room.disponivel ? 'fas fa-check-circle' : 'fas fa-times-circle';

        return `
            <div class="room-availability-card">
                <i class="status-badge ${statusIcon} ${statusClass}"></i>
                <h4>${room.nome}</h4>
                <p>Capacidade: ${room.capacidade} hóspede${room.capacidade > 1 ? 's' : ''}</p>
                <a href="reserva.html?room=${room.id}" class="btn-secondary">Reservar</a>
            </div>
        `;
    }

    function loadAvailability() {
        roomsGrid.innerHTML = '';
        if (typeof quartosData !== 'undefined') {
            quartosData.forEach(room => {
                roomsGrid.innerHTML += createAvailabilityCard(room);
            });
        }
    }

    if (btnAtualizar) {
        btnAtualizar.addEventListener('click', () => {
            // Em um cenário real, aqui seria feita uma chamada à API para obter o status em tempo real
            loadAvailability();
            alert('Status atualizado!');
        });
    }

    // Carregar a disponibilidade ao carregar a página
    loadAvailability();
});