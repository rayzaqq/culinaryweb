window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Membuat Navigation Mobile
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Membuat navigation close/swipe
navMenu.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});
