const buttonMenu = document.getElementById("button-menu");
const buttonClose = document.getElementById("button-close");
const navMenu = document.querySelector("nav");

const linksMenu = document.querySelectorAll("nav li a");

linksMenu.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

function toggleMenu() {
  navMenu.classList.toggle("active");
}

buttonMenu.addEventListener("click", toggleMenu);
buttonClose.addEventListener("click", toggleMenu);
