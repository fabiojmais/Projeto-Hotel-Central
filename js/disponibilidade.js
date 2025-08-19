// js/disponibilidade.js

// Banco de dados simulado de quartos
const quartos = [
  { id: 1, tipo: "Casal Deluxe", numero: "101", capacidade: 2, preco: "R$ 299", disponivel: true },
  { id: 2, tipo: "Casal Deluxe", numero: "102", capacidade: 2, preco: "R$ 299", disponivel: false },
  { id: 3, tipo: "Solteiro Conforto", numero: "201", capacidade: 1, preco: "R$ 199", disponivel: true },
  { id: 4, tipo: "Solteiro Conforto", numero: "202", capacidade: 1, preco: "R$ 199", disponivel: true },
  { id: 5, tipo: "Suíte Master", numero: "301", capacidade: 4, preco: "R$ 599", disponivel: false },
  { id: 6, tipo: "Suíte Master", numero: "302", capacidade: 4, preco: "R$ 599", disponivel: true },
  { id: 7, tipo: "Casal Deluxe", numero: "103", capacidade: 2, preco: "R$ 299", disponivel: true },
  { id: 8, tipo: "Solteiro Conforto", numero: "203", capacidade: 1, preco: "R$ 199", disponivel: false }
];

// Função que mostra os quartos na tela
function renderizarQuartos() {
  const container = document.getElementById("roomsGrid");
  container.innerHTML = ""; // Limpa antes

  quartos.forEach(quarto => {
    const status = quarto.disponivel ? "Disponível" : "Ocupado";
    const cor = quarto.disponivel ? "#27ae60" : "#e74c3c";
    const icone = quarto.disponivel ? "fa-check-circle" : "fa-times-circle";

    const card = document.createElement("div");
    card.className = "room-card-availability";
    card.style.borderLeftColor = cor;

    card.innerHTML = `
      <div class="room-header">
        <i class="fas ${icone}" style="color: ${cor};"></i>
        <strong>Quarto ${quarto.numero}</strong>
      </div>
      <div class="room-info">
        <p><strong>Tipo:</strong> ${quarto.tipo}</p>
        <p><strong>Capacidade:</strong> ${quarto.capacidade} hóspede(s)</p>
        <p><strong>Diária:</strong> ${quarto.preco}</p>
        <p class="status" style="color: ${cor}; font-weight: 600;">${status}</p>
      </div>
    `;

    container.appendChild(card);
  });
}

// Botão "Atualizar" simula mudanças
document.getElementById("btnAtualizar").addEventListener("click", () => {
  // Simula novas reservas ou cancelamentos
  quartos.forEach(quarto => {
    if (Math.random() > 0.8) {
      quarto.disponivel = !quarto.disponivel;
    }
  });
  renderizarQuartos();
  alert("Status dos quartos atualizado!");
});

// Renderiza ao carregar a página
document.addEventListener("DOMContentLoaded", renderizarQuartos);