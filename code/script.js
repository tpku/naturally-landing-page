// Navbar Scroll Event
const navBar = document.querySelector(".nav-bar");
// Navbar Desktop
window.addEventListener('scroll', function (e) {
  if (window.scrollY > document.documentElement.clientHeight) {
    navBar.classList.add("active-desktop")
  } else {
    navBar.classList.remove("active-desktop")
  }
});


// Products Card Hover Effect
const cardsHover = document.querySelectorAll(".card");
const productInfo = document.querySelector(".product-info");

// cardsHover.forEach((card) => {
//   card.addEventListener("mouseenter", (e) => {
//     productInfo.classList.toggle('active-card');
//   });
//   card.addEventListener("mouseleave", (e) => {
//     productInfo.classList.toggle('active-card');
//   });
// });


const menuBtnHome = document.querySelector(".menu-btn.home");
const menuBtnInfo = document.querySelector(".menu-btn.info");
const menuBtnContact = document.querySelector(".menu-btn.contact");
const menuBtnStore = document.querySelector(".menu-btn.store");
const menuBtnSearch = document.querySelector(".menu-btn.search");

const subMenuHome = document.querySelector(".nav-content.home");
const subMenuInfo = document.querySelector(".nav-content.info");
const subMenuContact = document.querySelector(".nav-content.contact");
const subMenuStore = document.querySelector(".nav-content.store");
const subMenuSearch = document.querySelector(".nav-content.search");

menuBtnHome.addEventListener("mouseenter", (e) => {
  subMenuHome.classList.add("active")
  subMenuInfo.classList.remove("active")
  subMenuContact.classList.remove("active")
  subMenuStore.classList.remove("active")
  subMenuSearch.classList.remove("active")
});
menuBtnInfo.addEventListener("mouseenter", (e) => {
  subMenuHome.classList.remove("active")
  subMenuInfo.classList.add("active")
  subMenuContact.classList.remove("active")
  subMenuStore.classList.remove("active")
  subMenuSearch.classList.remove("active")
});
menuBtnContact.addEventListener("mouseenter", (e) => {
  subMenuHome.classList.remove("active")
  subMenuInfo.classList.remove("active")
  subMenuContact.classList.add("active")
  subMenuStore.classList.remove("active")
  subMenuSearch.classList.remove("active")
});
menuBtnStore.addEventListener("mouseenter", (e) => {
  subMenuHome.classList.remove("active")
  subMenuInfo.classList.remove("active")
  subMenuContact.classList.remove("active")
  subMenuStore.classList.add("active")
  subMenuSearch.classList.remove("active")
});
menuBtnSearch.addEventListener("mouseenter", (e) => {
  subMenuHome.classList.remove("active")
  subMenuInfo.classList.remove("active")
  subMenuContact.classList.remove("active")
  subMenuStore.classList.remove("active")
  subMenuSearch.classList.add("active")
});