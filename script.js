// Get the container element
const navContainer = document.getElementById("sideNav");

// Get all buttons with class="side-nav__item" inside the container
const navs = navContainer.getElementsByClassName("side-nav__item");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("side-nav__item--active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" side-nav__item--active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " side-nav__item--active";
  });
}