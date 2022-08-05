const toggle = document.getElementById("toggle");
const btn = document.getElementById("btn-icon");

const changeDarkLigth = () => {
  document.body.classList.toggle("body__dark--mode");
  btn.classList.toggle("fa-sun");
};

toggle.addEventListener("click", changeDarkLigth);
