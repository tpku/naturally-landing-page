// Navbar Scroll Event
const navBar = document.querySelector(".nav-bar");
const hamburgerMenu = document.querySelector(".hamburger");

const menuBtns = document.querySelectorAll(".menu-btn")
const subMenuBtns = document.querySelectorAll(".nav-content")


function checkScreenWidth(maxWidth) {
  if (maxWidth.matches) {
    // Mobile Scroll max-width 650px
    window.addEventListener('scroll', function (e) {
      if (window.scrollY > document.documentElement.clientHeight) {
        hamburgerMenu.classList.add("active");
      }
    });
    // Hamburger Menu Toggle Open & Close
    hamburgerMenu.addEventListener('click', function (e) {
        navBar.classList.toggle("active-mobile")
    });
    // Menu Button Actions
    menuBtns.forEach(menuBtn => {
      menuBtn.addEventListener("click", (e) => {
        subMenuBtns.forEach(subMenuBtn => {
          subMenuBtn.classList.remove("active");
        });
        let nextSibling = e.target.nextElementSibling;
        nextSibling.classList.add("active");
      })
    });
  } 
  else 
  {
    // Desktop Scroll & Hover
    window.addEventListener('scroll', function (e) {
      if (window.scrollY > document.documentElement.clientHeight) {
        navBar.classList.add("active-desktop")
      } else {
        navBar.classList.remove("active-desktop")
      }
    });
    // Menu Button Actions
    menuBtns.forEach(menuBtn => {
      menuBtn.addEventListener("mouseenter", (e) => {
        subMenuBtns.forEach(subMenuBtn => {
          subMenuBtn.classList.remove("active");
        });
        let nextSibling = e.target.nextElementSibling;
        nextSibling.classList.add("active");
      })
    });
  }
}

const maxWidth = window.matchMedia("(max-width: 650px)")
checkScreenWidth(maxWidth) // Call listener function at run time
maxWidth.addListener(checkScreenWidth) // Attach listener function on state changes




const rightBottomContainer = document.querySelector(".hero-img-right");
const leftTopContainer = document.querySelector(".hero-img-left");
const heroRightBottom = document.querySelector(".hero-img-right img");
const heroLeftTop = document.querySelector(".hero-img-left img");
const heroWrapper = document.querySelector(".heading-wrapper");

// Alternativ för DESKTOP
// document.addEventListener("scroll", (e) => {
//   rightBottomContainer.style.transform = `translateX(${1 + window.scrollY * 1 + "px"})`;
//   heroRightBottom.style.transform = `scale(${1 + window.scrollY * 0.001})`;
//   leftTopContainer.style.transform = `translateX(${1 + window.scrollY * -1 + "px"})`;
//   heroLeftTop.style.transform = `scale(${1 + window.scrollY * 0.001})`;
// }) 

// // Alternativ för MOBIL
// document.addEventListener("scroll", (e) => {
//   leftTopContainer.style.transform = `translateY(${1 + window.scrollY * -1 + "px"})`;
//   rightBottomContainer.style.transform = `translateY(${1 + window.scrollY * 3 + "px"})`;
//   heroLeftTop.style.transform = `scale(${1 + window.scrollY * 0.005})`;
//   heroRightBottom.style.transform = `scale(${1 + window.scrollY * 0.005})`;
// })