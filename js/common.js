// Load Navbar and Footer

document.addEventListener("DOMContentLoaded", function () {
    // Load Navbar
    fetch("../nav.html")
        .then(response => response.text())
        .then(data => {
          // Load HTML
            document.getElementById("nav-placeholder").innerHTML = data;

            handleNavBarForMobile();
        });

    // Load Footer
    fetch("../footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });

        // Load Home
    fetch("../home.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("home-placeholder").innerHTML = data;
        handleNavBarNavigation();
    });

    // Load Pokedex
    fetch("../pokedex.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("pokedex-placeholder").innerHTML = data;
            handleNavBarNavigation();
        });

        // Load Legendaries
    fetch("../legendaries.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("legendaries-placeholder").innerHTML = data;
        handleNavBarNavigation();
    });

    // Load Documentaions
    fetch("../documentation.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("documentation-placeholder").innerHTML = data;
            handleNavBarNavigation();
        });
});

function handleNavBarForMobile() {
  const navBar = document.querySelector(".nav-bar");
  const burgerIcon = document.querySelector(".burger");
  const overlay = document.querySelector(".overlay");

  function toggleNavbar(_event) {
    navBar.classList.toggle("nav-bar-selected");
    overlay.classList.toggle("active");
  }

  function closeNavbar(event) {
    if (!navBar.contains(event.target)) {
      navBar.classList.remove("nav-bar-selected");
      overlay.classList.remove("active");
    }
  }

  // Nav Bar Click Handle
  burgerIcon.addEventListener("click", toggleNavbar);
  overlay.addEventListener("click", closeNavbar);
  document.addEventListener("click", closeNavbar);
}

function handleNavBarNavigation() {
  const navItems = document.querySelectorAll(".nav-bar-item");
  const sections = document.querySelectorAll(".section");

  navItems.forEach(item => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      // Remove active class from all nav items
      navItems.forEach(nav => nav.classList.remove("active"));

      // Add active class to clicked nav item
      this.classList.add("active");

      // Get target section ID
      const targetId = this.getAttribute("data-target");

      // Hide all sections
      sections.forEach(section => section.classList.remove("active"));

      // Show the selected section
      document.getElementById(targetId).classList.add("active");
    });
  });
}
