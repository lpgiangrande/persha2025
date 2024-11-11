document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner l'élément 'aside' avec les icônes sociales
    const socialIcons = document.querySelector('aside.social-icons');

    // Variables pour détecter la direction du défilement
    let lastScrollTop = 0;

    // Ajouter un écouteur d'événements pour le défilement
    window.addEventListener('scroll', function() {
        // Vérifier si l'écran est un mobile/tablette
        if (window.innerWidth <= 768) { // Si l'écran est plus petit ou égal à 768px
            let currentScroll = window.scrollY || document.documentElement.scrollTop;

            // Si on défile vers le bas
            if (currentScroll > lastScrollTop) {
                // Cacher les icônes sociales en les retirant du flux du DOM
                socialIcons.style.display = 'none';
            } else {
                // Si on défile vers le haut et on est tout en haut
                if (currentScroll <= 0) {
                    socialIcons.style.display = 'flex'; // Remettre les icônes sociales visibles
                }
            }

            // Mettre à jour la position du dernier scroll
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }
    });
});
