// Nav toggle
const menuToggle = document.getElementById("nav-toggle");
const menuText = document.querySelector("#nav-toggle span");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    menuText.innerHTML = "Close Menu";
  } else {
    menuText.innerHTML = "Open Menu";
  }
});
