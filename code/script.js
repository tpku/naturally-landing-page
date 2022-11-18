// Navbar Scroll Event
const navBar = document.querySelector(".nav-bar");
// Navbar Desktop
window.addEventListener('scroll', function (e) {
  if (window.scrollY > 971) {
    navBar.classList.add("active-desktop")
  } else {
    navBar.classList.remove("active-desktop")
  }
});

// Products Card Hover Effect
const cardsHover = document.querySelectorAll(".product.card");
const textContainer = document.querySelector(".text-container");
const btnContainer = document.querySelector(".btn-container-index")

cardsHover.forEach((card) => {
  card.addEventListener("mouseenter", (e) => {
    textContainer.classList.toggle('product-hover');
    btnContainer.classList.toggle('product-hover');
  });
  card.addEventListener("mouseleave", (e) => {
    textContainer.classList.toggle('product-hover');
    btnContainer.classList.toggle('product-hover');
  });
});