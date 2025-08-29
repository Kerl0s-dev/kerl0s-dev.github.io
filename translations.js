// Dictionnaire de traductions
const translations = {
  fr: {
    nav_home: "Accueil",
    nav_projects: "Projets",
    nav_about: "À propos",
    hero_subtitle: "Développeur passionné 🚀 | Explore mes projets & créations",
    btn_github: "Mon GitHub",
    btn_youtube: "Ma chaîne YouTube"
  },
  en: {
    nav_home: "Home",
    nav_projects: "Projects",
    nav_about: "About",
    hero_subtitle: "Passionate developer 🚀 | Explore my projects & creations",
    btn_github: "My GitHub",
    btn_youtube: "My YouTube channel"
  }
};

// Fonction pour changer de langue
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
  document.documentElement.lang = lang; // change attribut <html lang="">
}

// Détection du selecteur
const langSwitcher = document.getElementById("lang-switcher");
langSwitcher.addEventListener("change", (e) => {
  setLanguage(e.target.value);
});

// Par défaut : français
setLanguage("en");