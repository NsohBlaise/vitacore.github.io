let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu');

menu.onclick = () => {
    menu. classList.toggle('fa-bars');
    navbar.classList.toggle('active')
};
window.onscroll = () => {
    menu. classList.remove('fa-bars');
    navbar.classList.remove('active')
}