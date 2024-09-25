const navigationButton = document.getElementById("navigation-button");
const navbarMenu = document.getElementById("navbar-menu");

function displayNavigationMenu() {
  if (navbarMenu.classList == "navbar-active") {
    navbarMenu.classList.remove("navbar-active");
    navbarMenu.classList.add("navbar-deactivate");
    navigationButton.classList.remove("fa-xmark");
    navigationButton.classList.add("fa-bars");
    console.log("If running")
  } else {
    navbarMenu.classList.remove("navbar-deactivate");
    navbarMenu.classList.add("navbar-active");
    navigationButton.classList.remove("fa-bars");
    navigationButton.classList.add("fa-xmark");
    console.log("Else running")
  }
}

function initializeNavbar() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    navbarMenu.classList.remove("navbar-active");
  }
}

window.addEventListener("load", initializeNavbar);
