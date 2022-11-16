const cardsHover = document.querySelectorAll(".product.card");
const textContainer = document.querySelector(".text-container.c-1");
const btnContainer = document.querySelector(".btn-container-index.c-1")



cardsHover.forEach((card) => {
  card.addEventListener("mouseover", () => {
    textContainer.classList.toggle('product-hover');
    btnContainer.classList.toggle('product-hover');
  });
  card.addEventListener("mouseleave", () => {
    textContainer.classList.toggle('product-hover');
    btnContainer.classList.toggle('product-hover');
  });
});