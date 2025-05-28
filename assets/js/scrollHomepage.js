const lenis = new Lenis();
window.lenis = lenis; 

// Scroll animation loop
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Gestion du bouton "Back to Top"
const toTopButton = document.getElementById('to-top');

if (toTopButton) {
  toTopButton.addEventListener('click', () => {
    lenis.scrollTo(0, { duration: 0.8, easing: (t) => t });
  });

  // Afficher ou masquer le bouton selon la position du scroll
  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      toTopButton.style.display = "block";
    } else {
      toTopButton.style.display = "none";
    }
  });
}
