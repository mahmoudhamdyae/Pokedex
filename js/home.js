const burgerIcon = document.querySelector(".burger");
const navBar = document.querySelector(".nav-bar");
const overlay = document.querySelector(".overlay");

function toggleNavbar(event) {
  navBar.classList.toggle("nav-bar-selected");
  overlay.classList.toggle("active");
}

  function closeNavbar(event) {
    if (!navBar.contains(event.target)) {
      navBar.classList.remove("nav-bar-selected");
      overlay.classList.remove("active");
    }
}

burgerIcon.addEventListener("click", toggleNavbar);
overlay.addEventListener("click", closeNavbar);
document.addEventListener("click", closeNavbar);