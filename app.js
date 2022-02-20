// Select The Elements
var toggle_btn = document.querySelector(".toggle-btn");
var big_wrapper = document.querySelector(".big-wrapper");
const main = document.querySelector("main");

let french = false;

const mainFrenchHeader =
  "Histoire et histoires de Montréal en moins de 5 minutes";
const mainFrenchSubHeader =
  "Recevez l'e-mail hebdomadaire où nous explorons différentes rues, bâtiments et quartiers à travers des photographies, des histoires et des personnes.";

function toggleAnimation() {
  // Clone the wrapper
  french = !french;
  let clone = big_wrapper.cloneNode(true);
  if (french) {
    clone.classList.remove("en");
    clone.classList.add("fr");
  } else {
    clone.classList.remove("fr");
    clone.classList.add("en");
  }
  clone.classList.add("copy");
  let showcaseArea = clone.childNodes[5]
  console.log(showcaseArea)
  main.appendChild(clone);
}

// Add event listeners
toggle_btn.addEventListener("click", toggleAnimation);

// clone.ChildNodes
// {
//   "0": {},
//   "1": {},
//   "2": {},
//   "3": {},
//   "4": {},
//   "5": {},
//   "6": {},
//   "7": {},
//   "8": {}
// }