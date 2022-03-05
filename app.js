// Select The Elements
var toggle_btn = document.querySelector(".toggle-btn");
var big_wrapper = document.querySelector(".big-wrapper");
const main = document.querySelector("main");
let needsTranslation = document.querySelectorAll("[data-i18n-key]");
let languageToggle = document.querySelector(".language-toggle");
let hamburger_menu = document.querySelector('.hamburger-menu')
// active locale
let locale = "en";

// English and French locales
const translations = {
  // English
  en: {
    "main-header": "History and stories of Montreal in under 5 minutes",
    "sub-header":
      "Get the weekly email where we explore different streets, buildings, and neighborhoods through photographs, stories, and people.",
    "sign-up": "Sign Up",
    "try-it": "Try It",
  },

  // French translations
  fr: {
    "main-header": "Histoire et récits de Montréal en moins de 5 minutes",
    "sub-header":
      "Recevez l'e-mail hebdomadaire dans lequel nous explorons différentes rues, bâtiments et quartiers à travers des photographies, des histoires et des personnes.",
    "sign-up": "S'inscrire",
    "try-it": "Essayer",
  },
};

// Event Listeners

// When toggle button is clicked...
toggle_btn.addEventListener("click", () => {
  console.log("clicked");

  //update locale and language btn
  if (locale === "en") {
    locale = "fr";
    languageToggle.innerHTML = "EN"
  } else {
    locale = "en";
    languageToggle.innerHTML = "FR"
  }

  // Invoke translateElement on needsTranslation
  needsTranslation.forEach(translateElement);
});

hamburger_menu.addEventListener("click", () => {
  big_wrapper.classList.toggle("active");
})

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = translations[locale][key];
  element.innerText = translation;
}
