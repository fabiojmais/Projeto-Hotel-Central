document.addEventListener('DOMContentLoaded', () => {
    // Populando o select de quartos com os dados de data.js
    const roomSelect = document.getElementById('room-select');
    if (roomSelect && typeof quartosData !== 'undefined') {
        quartosData.forEach(room => {
            const option = document.createElement('option');
            option.value = room.id;
            option.textContent = room.nome;
            roomSelect.appendChild(option);
        });
    }

    // Lógica para pré-selecionar o quarto se vier da URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedRoomId = urlParams.get('room');
    if (selectedRoomId) {
        roomSelect.value = selectedRoomId;
    }

    // Lógica para o formulário de reserva
    const reservaForm = document.getElementById('reservaForm');
    if (reservaForm) {
        reservaForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Lógica de validação das datas
            const checkinDate = new Date(reservaForm.checkin.value);
            const checkoutDate = new Date(reservaForm.checkout.value);

            if (checkoutDate <= checkinDate) {
                alert('A data de saída deve ser posterior à data de entrada.');
                return;
            }

            // Simulação de envio
            alert('Reserva confirmada! Entraremos em contato em breve.');
            reservaForm.reset();
        });
    }

    // Lógica para o formulário de contato (agora com EmailJS)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const serviceID = 'service_6j50xji';
            const templateID = 'template_4bfd5ll';
            const publicKey = 'BcbsHVr9ucLdYD5gM';

            emailjs.sendForm(serviceID, templateID, contactForm, publicKey)
                .then(() => {
                    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                    contactForm.reset();
                }, (error) => {
                    console.error('Falha ao enviar a mensagem:', error);
                    alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
                });
        });
    }
});