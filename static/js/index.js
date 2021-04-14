const root = document.querySelector('html');
const body = document.querySelector('body');
const backToTopLink = document.getElementById("back-to-top-link");
const navPopout = document.getElementById('popout-nav-menu');

const scrollToTop = () =>{
    window.scrollTo(0, 0);
}

backToTopLink.addEventListener('click', ()=> {
    scrollToTop();
})

const toggleNavMenu = () => {
    const navMenu = document.getElementById('popout-nav-menu-expanded');
    const overlay = document.getElementById('overlay');
    navMenu.style.display = "block";
    overlay.style.display = "block";
}

navPopout.addEventListener('click', () => {toggleNavMenu()});

const closePopout = () => {
    const navMenu = document.getElementById('popout-nav-menu-expanded');
    const overlay = document.getElementById('overlay');
    navMenu.style.display = "none";
    overlay.style.display = "none";
}