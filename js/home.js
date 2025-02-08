const burgerIcon = document.querySelector(".burger");
const navBar = document.querySelector(".nav-bar");
const navBarItems = document.querySelector(".nav-bar-items");

navBarItems.style.maxHeight = "0px";

function toggleNavBar() {
    if (getComputedStyle(navBar).height == "115px") {
        navBar.style.height = "344px";
        navBar.style.background = "linear-gradient(180deg, #F5DB13 0%, #F2B807 100%)";
        navBar.style.borderRadius = "0px 0px 16px 16px";
        burgerIcon.style.display = "none";
    }
  }

  burgerIcon.addEventListener("click", () => {
    toggleNavBar();
});