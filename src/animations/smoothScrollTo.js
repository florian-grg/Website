// Fonction utilitaire pour scroll smooth vers une ancre
export function smoothScrollTo(selector) {
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
