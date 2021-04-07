const root = document.querySelector('html');
const body = document.querySelector('body');
const backToTopLink = document.getElementById("back-to-top-link")

const scrollToTop = () =>{
    window.scrollTo(0, 0);
}

backToTopLink.addEventListener('click', ()=> {
    scrollToTop();
})
