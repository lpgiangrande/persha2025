let currentSection = 0; // Section actuellement visible
const sections = document.querySelectorAll('.section');

function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        currentSection = index;
    }
}

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Défilement vers le bas
        scrollToSection(currentSection + 1);
    } else {
        // Défilement vers le haut
        scrollToSection(currentSection - 1);
    }
});

// Ajoute une écoute pour les flèches du clavier
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        scrollToSection(currentSection + 1);
    } else if (event.key === 'ArrowUp') {
        scrollToSection(currentSection - 1);
    }
});
