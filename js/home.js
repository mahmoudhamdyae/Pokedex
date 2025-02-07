const burgerIcon = document.querySelector(".nav-bar-items .burger");

function openNavBar() {
    var x = document.getElementById("nav-bar-items");
    if (x.className === "nav-bar-item") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar-item";
    }
  }

  burgerIcon.addEventListener("click", () => {
    openNavBar();
});