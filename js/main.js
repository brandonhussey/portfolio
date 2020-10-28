const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});
