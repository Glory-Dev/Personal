function goUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function settingPopUp() {
  settingWindow.classList.contains("active")
    ? settingWindow.classList.remove("active")
    : settingWindow.classList.add("active");
}
function resizeWindowForHeader() {
  if (window.innerWidth > 575) {
    navLinks.classList.remove("active");
    menuBarIcon.classList.remove("active");
  }
}
function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
function filterGallery() {
  projects.forEach((e) => {
    e.style.visibility = "hidden";
    document.querySelectorAll(this.dataset.switch).forEach((e) => {
      e.style.visibility = "visible";
    });
  });
}
function showCard() {
  toolboxes.forEach((card) => {
    window.innerWidth > 900
      ? card.addEventListener("click", removeActive)
      : card.classList.remove("active");
  });
}

function removeActive() {
  toolboxes.forEach((card) => {
    card.classList.remove("active");
    this.classList.add("active");
  });
}
