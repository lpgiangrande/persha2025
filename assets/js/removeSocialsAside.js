document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner l'élément 'aside' avec les icônes sociales
    const socialIcons = document.querySelector('aside.social-icons');

    // Variables pour détecter la direction du défilement
    let lastScrollTop = 0;
    const scrollThreshold = 20;  // Distance avant le haut de la page pour réafficher l'aside
    let isAtTop = false; // Pour savoir si l'utilisateur est tout en haut de la page

    // Ajouter un écouteur d'événements pour le défilement
    window.addEventListener('scroll', function() {
        // Vérifier si l'écran est un mobile/tablette
        if (window.innerWidth <= 1000) { // Si l'écran est plus petit ou égal à 1000px
            let currentScroll = window.scrollY || document.documentElement.scrollTop;

            // Si on défile vers le bas
            if (currentScroll > lastScrollTop) {
                socialIcons.style.display = 'none'; // Cacher les icônes sociales
                isAtTop = false; // On n'est plus tout en haut
            } else {
                // Si on défile vers le haut
                // On ne réaffiche l'aside que si on est proche du sommet de la page
                if (currentScroll <= scrollThreshold && !isAtTop) {
                    socialIcons.style.display = 'flex'; // Remettre les icônes sociales visibles
                    isAtTop = true; // L'utilisateur est maintenant tout en haut
                }
            }

            // Mettre à jour la position du dernier scroll
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        } else {
            // Réinitialiser l'affichage de l'aside lorsque la largeur de l'écran est supérieure à 1000px
            socialIcons.style.display = 'flex';
        }
    });
});
