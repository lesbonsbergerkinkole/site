document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');

    // 1. Appliquer le thème sauvegardé si l'utilisateur est déjà venu
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeIcon) themeIcon.textContent = '☀️';
    }

    // 2. Écouter le clic sur le bouton
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');

            // Changer l'icône (Soleil / Lune)
            if (themeIcon) {
                themeIcon.textContent = isDark ? '☀️' : '🌙';
            }

            // Mémoriser le choix du thème
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
});
