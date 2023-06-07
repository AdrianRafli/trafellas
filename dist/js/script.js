let menu = document.querySelector(".toggle-btn");
let menuIcon = document.querySelector(".toggle-btn i");
let dropDown = document.querySelector(".dropdown");

menu.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  dropDown.classList.toggle("open");
};

// Swiper JS
const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 100,
});
