// Ajuste les ingrédients
function ajusterIngredients() {
    const nb = parseInt(document.getElementById("personnes").value);
    const base = 4;
    document.querySelectorAll("[data-base]").forEach(span => {
        const q = parseInt(span.getAttribute("data-base"));
        span.textContent = Math.round(q * nb / base);
    });
}
document.getElementById("personnes").addEventListener("change", ajusterIngredients);
document.addEventListener("DOMContentLoaded", ajusterIngredients);

// Animation d'apparition des ingrédients
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('#liste-ingredients li').forEach(li => {
    observer.observe(li);
});

// Ouverture fenêtre zoom
function openModal(src) {
    const fenetreZoom = document.getElementById("fenetreZoomImage");
    const fenetreZoomImg = document.getElementById("fenetreZoomImageContenu");
    fenetreZoomImg.src = src;
    fenetreZoom.classList.add("active");
}

// Fermeture fenêtre zoom
function closeModal() {
    document.getElementById("fenetreZoomImage").classList.remove("active");
}

// Clique sur une image
document.querySelectorAll(".galerie a").forEach(a => {
    a.addEventListener("click", e => {
        e.preventDefault();
        openModal(a.href);
    });
});

// Clique sur la croix
document.querySelector(".fermer-zoom").addEventListener("click", closeModal);

// Clique en dehors de l'image
document.getElementById("fenetreZoomImage").addEventListener("click", e => {
    if (e.target === e.currentTarget) closeModal();
});
