const backToTopLink = document.getElementById("back-to-top-link");
const navPopout = document.getElementById("popout-nav-menu");
const overlay = document.getElementById("overlay");
const closePopoutIcon = document.getElementById("close-popout-icon");

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

backToTopLink.addEventListener("click", () => {
  scrollToTop();
});

const toggleNavMenu = () => {
  const navMenu = document.getElementById("popout-nav-menu-expanded");
  navMenu.style.display = "block";
  overlay.style.display = "block";
};

const closePopout = () => {
  const navMenu = document.getElementById("popout-nav-menu-expanded");
  navMenu.style.display = "none";
  overlay.style.display = "none";
};

navPopout.addEventListener("click", () => {
  toggleNavMenu();
});
overlay.addEventListener("click", () => {
  closePopout();
});
closePopoutIcon.addEventListener("click", () => {
  closePopout();
});

const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();
