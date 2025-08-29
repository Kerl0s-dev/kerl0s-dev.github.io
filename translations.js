// Dictionnaire de traductions
const translations = {
  fr: {
    nav_home: "Accueil",
    nav_projects: "Projets",
    nav_contact: "Contact",
    hero_subtitle: "Développeur passionné 🚀 | Explore mes projets & créations",
    btn_github: "Mon GitHub",
    btn_youtube: "Ma chaîne YouTube",
    contact_title: "Me contacter",
    contact_text: "Envie de collaborer ? Un projet à partager ?",
    btn_mail: "M’écrire ✉️",
  },
  en: {
    nav_home: "Home",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_subtitle: "Passionate developer 🚀 | Explore my projects & creations",
    btn_github: "My GitHub",
    btn_youtube: "My YouTube channel",
    contact_title: "Contact me",
    contact_text: "Want to collaborate? Got a project to share?",
    btn_mail: "Write me ✉️",
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