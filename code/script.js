// Navbar Scroll Event
const navBar = document.querySelector(".nav-bar");
// Navbar Desktop
window.addEventListener('scroll', function (e) {
  if (window.scrollY > 850) {
    navBar.classList.add("active-desktop")
  } else {
    navBar.classList.remove("active-desktop")
  }
});

// Products Card Hover Effect
const cardsHover = document.querySelectorAll(".card");
const productInfo = document.querySelector(".product-info")

cardsHover.forEach((card) => {
  card.addEventListener("mouseenter", (e) => {
    productInfo.classList.toggle('active-card');
  });
  card.addEventListener("mouseleave", (e) => {
    productInfo.classList.toggle('active-card');
  });
});