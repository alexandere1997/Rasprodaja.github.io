let wrapper__header = document.querySelector(".wrapper-header");
let btnToggle = document.querySelector(".navbar-toggler");


btnToggle.addEventListener("click", () => {
  wrapper__header.classList.toggle("transformToggle");
});
