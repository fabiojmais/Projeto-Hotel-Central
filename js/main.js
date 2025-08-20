document.addEventListener('DOMContentLoaded', () => {

    // Lógica do Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-menu li a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Função para marcar o link ativo no menu de navegação
    function setActiveLink() {
        const currentPath = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.nav-menu li a');
        navLinks.forEach(link => {
            // Remove a classe 'active' de todos os links, exceto para o botão
            if (!link.classList.contains('btn-primary')) {
                link.classList.remove('active');
            }
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }
    setActiveLink();
});