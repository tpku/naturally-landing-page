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
        navBar.style.display = "flex";
      } else {
        navBar.style.display = "none";
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