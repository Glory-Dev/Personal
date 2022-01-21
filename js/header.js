const header = document.querySelector("body > .header");
const navLinks = document.querySelector(".header .navbar > .links");
const navLinksLis = document.querySelectorAll(".header .navbar > .links li");
const menuBarIcon = document.querySelector(".header .navbar > .menu-icon");

window.addEventListener("scroll", () => {
  scrollY >= 50
    ? header.classList.add("active")
    : header.classList.remove("active");
});

window.addEventListener("resize", resizeWindowForHeader());
resizeWindowForHeader();

menuBarIcon.addEventListener("click", toggleMenuBar);
navLinksLis.forEach((li) => {
  li.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBarIcon.classList.remove("active");
  });
});

document.addEventListener("keyup", (e) => {
  if (menuBarIcon.classList.contains("active"))
    if (e.key == "Escape") toggleMenuBar();
});

function toggleMenuBar() {
  menuBarIcon.classList.contains("active")
    ? menuBarIcon.classList.remove("active")
    : menuBarIcon.classList.add("active");
  navLinks.classList.contains("active")
    ? navLinks.classList.remove("active")
    : navLinks.classList.add("active");
}
