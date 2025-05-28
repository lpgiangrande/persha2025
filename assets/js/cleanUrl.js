// empêche le #section dans l’URL
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.dataset.target;
      const target = document.getElementById(targetId);
      if (target) {
        lenis.scrollTo(target, { duration: 0.8, easing: (t) => t });
      }
    });
  });
  