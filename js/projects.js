const switcherLis = document.querySelectorAll(".projects .switcher li");
const projects = Array.from(
  document.querySelectorAll(".projects .content .gallery > div")
);

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", filterGallery);
});
