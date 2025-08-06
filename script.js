const menuIcon =document.getElementById('menu-icon');
const navbarMenu = document.getElementById('navbar');

menuIcon.onclick = ()=> {
    menuIcon.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    menuIcon.classList.toggle('bx-menu');
    menuIcon.classList.toggle('bx-x');
};