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


    });
});
<script>
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  // 1. Vérifier si l'utilisateur avait déjà choisi le mode sombre
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeIcon) themeIcon.textContent = '☀️';
  }

  // 2. Écouter le clic sur le bouton
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      const isDarkMode = document.body.classList.contains('dark-mode');

      // Changer l'icône (Soleil / Lune)
      if (themeIcon) {
        themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
      }

      // Sauvegarder le choix dans le navigateur
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
  }
</script>
// Ouvrir la fenêtre d'accès membres
function openMemberModal() {
    document.getElementById('memberModal').style.display = 'flex';
}

// Fermer la fenêtre
function closeMemberModal() {
    document.getElementById('memberModal').style.display = 'none';
    document.getElementById('errorMsg').style.display = 'none';
}

// Vérification du mot de passe
function checkPassword() {
    const inputPwd = document.getElementById('pagePassword').value;
    const correctPwd = "Kinkole2026"; // Modifiez votre mot de passe ici

    if (inputPwd === correctPwd) {
        window.location.href = "La page privée réservée aux membres";
    } else {
        document.getElementById('errorMsg').style.display = 'block';
    }
}
