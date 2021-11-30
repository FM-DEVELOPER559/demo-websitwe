 burger = document.querySelector('.burger');
 navbar = document.querySelector('.navbar');
 navlist = document.querySelector('.nav-list');
//  rightnavbar = document.querySelector('.rightnavbar');
burger.addEventListener('click',()=>{
    // rightnavbar.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})