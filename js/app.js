// SELECTORS
const signIn = document.querySelector(".signin");
const overLay = document.querySelector(".overlay");
const signInForm = document.querySelector(".form");
const xIcon = document.querySelector(".xicon");
const xMenuIcon = document.querySelector(".xmenu-icon");
const seeMoreBtn = document.querySelector(".project__btn--hover");
const project = document.querySelectorAll(".project");
const hideProject = document.querySelectorAll(".hide-project");
const navIcon = document.querySelector(".nav-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLink = document.querySelectorAll(".mobile-menu__link");

// FUNCTIONS

// OPEN
const openForm = function (e) {
  e.preventDefault();
  signInForm.classList.remove("hidden");
  overLay.classList.remove("hidden");
};

// CLOSE FORM
const closeForm = function () {
  signInForm.classList.add("hidden");
  overLay.classList.add("hidden");
};

// EVENTS
signIn.addEventListener("click", openForm);
xIcon.addEventListener("click", closeForm);
overLay.addEventListener("click", closeForm);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !signInForm.classList.contains("hidden")) {
    closeForm();
  }
});

seeMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  hideProject.forEach((el) => {
    el.classList.toggle("hidden");
  });
  if (seeMoreBtn.innerText === "See More") {
    seeMoreBtn.innerText = "See Less";
  } else {
    seeMoreBtn.innerText = "See More";
  }
});

navIcon.addEventListener("click", function (e) {
  mobileMenu.style.transform = "translate(0%, 0%)";
});

xMenuIcon.addEventListener("click", function () {
  mobileMenu.style.transform = "translate(100%, 0%)";
});

mobileMenuLink.forEach((link) =>
  link.addEventListener("click", function () {
    mobileMenu.style.transform = "translate(100%, 0%)";
  })
);
