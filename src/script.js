const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const exploreMenu = document.querySelector("#explore-page");
  const newsletterMenu = document.querySelector("#newsletter-page");
  let scrollPos = window.scrollY;
  console.log(scrollPos);

  // adding 'highlight' class to the menu item that is active
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    exploreMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos > 600 && scrollPos < 1600) {
    exploreMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    newsletterMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    newsletterMenu.classList.add("highlight");
    exploreMenu.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// Hide mobilemenu
const hideMobileMenu = () => {
  const hamburgerActive = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && hamburgerActive) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
