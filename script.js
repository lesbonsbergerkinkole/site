// Récupération des éléments HTML
const bouton = document.getElementById('monBouton');
const message = document.getElementById('message');

// Écoute de l'événement "clic"
bouton.addEventListener('click', () => {
    message.textContent = "mercie d'avoir consilte notre site.";
    message.style.color = "#0000ff";
    message.style.fontWeight = "bold";
    message.style.marginTop = "15px";
});// Fonction de filtrage Photos / Vidéos
function filtrerGalerie(categorie) {
    const elements = document.querySelectorAll('.element-galerie');
    const boutons = document.querySelectorAll('.btn-filtre');

    // Mettre à jour l'état actif des boutons
    boutons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Afficher ou masquer selon la catégorie choisie
    elements.forEach(el => {
        if (categorie === 'tout') {
            el.style.display = 'block';
        } else if (el.classList.contains(categorie)) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
}
// Sélection du bouton et du bloc À propos par leurs identifiants
const btnApropos = document.getElementById("btnApropos");
const sectionApropos = document.getElementById("sectionApropos");

// Écoute du clic sur le bouton
btnApropos.addEventListener("click", function() {
    // Affiche ou masque la section à chaque clic
    sectionApropos.classList.toggle("apropos-visible");
});
const themeToggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
document.addEventListener("DOMContentLoaded", function() {
    const themeToggleBtn = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    // Si le bouton n'existe pas sur cette page, on arrête pour éviter les erreurs
    if (!themeToggleBtn) return;

    // Charger le thème enregistré précédemment
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (themeIcon) themeIcon.textContent = "☀️";
    }

    // Gestion du clic sur le bouton
    themeToggleBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            if (themeIcon) themeIcon.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            if (themeIcon) themeIcon.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });
});
