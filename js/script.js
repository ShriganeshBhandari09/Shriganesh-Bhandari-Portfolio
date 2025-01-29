const navigationButton = document.getElementById("navigation-button");
const navbarMenu = document.getElementById("navbar-menu");

const navlinks = document.querySelectorAll(".nav-links");

function displayNavigationMenu() {
  if (navbarMenu.classList == "navbar-active") {
    navbarMenu.classList.remove("navbar-active");
    navbarMenu.classList.add("navbar-deactivate");
    navigationButton.classList.remove("fa-xmark");
    navigationButton.classList.add("fa-bars");
  } else {
    navbarMenu.classList.remove("navbar-deactivate");
    navbarMenu.classList.add("navbar-active");
    navigationButton.classList.remove("fa-bars");
    navigationButton.classList.add("fa-xmark");
  }
}

function closeNavbar() {
  navbarMenu.classList.remove("navbar-active");
  navbarMenu.classList.add("navbar-deactivate");
  navigationButton.classList.remove("fa-xmark");
  navigationButton.classList.add("fa-bars");
}

navlinks.forEach((link) => {
  link.addEventListener("click", closeNavbar);
});

function initializeNavbar() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    navbarMenu.classList.remove("navbar-active");
  }
}

window.addEventListener("load", initializeNavbar);
