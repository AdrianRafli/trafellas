let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar-nav");

menu.onclick = () => {
  menu.classList.toggle("fa-x");
  navbar.classList.toggle("open");
};
