// RESPONSIVE HAMBURGER => NAVBAR SHOW

let hamburger = document.querySelector(".hamburger");
let navUL = document.querySelector(".navLinks");

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('active');
})