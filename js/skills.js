const skillsSection = document.getElementById("skills-tools");
const toolboxes = Array.from(
  document.querySelectorAll(".skills-tools .toolbox > .card")
);

window.addEventListener("scroll", () => {
  if (window.scrollY >= 760) {
    skillsSection.style.backgroundSize = "20%";
  }
});

window.addEventListener("resize", showCard);
showCard();

const closeDetailsOfCard = document.querySelectorAll(
  ".skills-tools .toolbox > .card > .details > .close"
);

closeDetailsOfCard.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.parentElement.classList.remove("active");
  });
});
