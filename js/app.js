// SELECTORS
const bars = document.querySelector(".header__bars");
const list = document.querySelector(".nav__list");
const links = document.querySelectorAll(".nav__link");
const seeMore = document.querySelector(".project__btn");
const hideProject = document.querySelectorAll(".hide-project");

// FUNCTIONS
bars.addEventListener("click", function () {
  list.classList.toggle("toggle");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      list.classList.remove("toggle");
    });
  });
});

// SEE MORE
seeMore.addEventListener("click", function (e) {
  e.preventDefault();
  hideProject.forEach((pro) => {
    pro.classList.toggle("hidden");
  });
});
