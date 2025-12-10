// Animation sur scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Empêcher le clic du lien dans la carte de se propager deux fois
document.querySelector('.btn-recette').addEventListener('click', (e) => {
  e.stopPropagation();
});
