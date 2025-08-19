// reserva.js
document.addEventListener('DOMContentLoaded', function () {
  const forms = ['reservaForm', 'contactForm'];
  forms.forEach(id => {
    const form = document.getElementById(id);
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Obrigado! Sua mensagem foi enviada. (Simulação - use Formspree no GitHub Pages)');
        form.reset();
      });
    }
  });
});