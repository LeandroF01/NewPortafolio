document.querySelector(".bars__menu").addEventListener("click", animateBars);

let $line1__bars = document.querySelector(".line1__bars-menu");
let $line2__bars = document.querySelector(".line2__bars-menu");
let $line3__bars = document.querySelector(".line3__bars-menu");

function animateBars() {
  $line1__bars.classList.toggle("activeline1__bars-menu");
  $line2__bars.classList.toggle("activeline2__bars-menu");
  $line3__bars.classList.toggle("activeline3__bars-menu");
}

const $toggle = document.querySelector(".bars__menu");
const $menu = document.querySelector(".nav_menu");

$toggle.addEventListener("click", () => {
  $menu.classList.toggle("lef_navigation");
});

const navMenuHome = () => {
  const contentNav = document.querySelectorAll(".contnt-home");
  const navSection = () => {
    const navMenu = document.querySelector(".nav_menu");
    navMenu.classList.remove("lef_navigation");
    animateBars();
  };

  contentNav.forEach((e) => e.addEventListener("click", navSection));
};

document.addEventListener("DOMContentLoaded", () => {
  navMenuHome();
});
