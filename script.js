import portoflio from "./scripts/portfolio.js";

const navbar = document.getElementById("navbar");
const logos = document.getElementById("logosDiv");
const navName = document.getElementById("navName");

window.onscroll = function () {
  windowScroll();
};

function windowScroll() {
  if (screen.width >= 1080) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navbar.style.height = "5%";
      navbar.style.fontSize = "1rem";
      navName.style.opacity = 1;
    } else {
      navbar.style.height = "10%";
      navbar.style.fontSize = "1.35rem";
      navName.style.opacity = 0;
    }
  }
}
