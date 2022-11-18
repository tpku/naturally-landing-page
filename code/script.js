const cardsHover = document.querySelectorAll(".product.card");
const textContainer = document.querySelector(".text-container");
const btnContainer = document.querySelector(".btn-container-index")



// cardsHover.forEach((card) => {
//   card.addEventListener("mouseover", () => {
//     textContainer.classList.toggle('product-hover');
//     btnContainer.classList.toggle('product-hover');
//   });
//   card.addEventListener("mouseleave", () => {
//     textContainer.classList.toggle('product-hover');
//     btnContainer.classList.toggle('product-hover');
//   });
// });
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

const navBar = document.querySelector(".nav-bar");

window.addEventListener('scroll', function (e) {
    if (window.scrollY > 971) {
        navBar.classList.add("active-desktop")
    } else {
        navBar.classList.remove("active-desktop")
    }
  });
