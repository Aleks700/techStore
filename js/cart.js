document.addEventListener("DOMContentLoaded", () => {
  console.log("cart");
  const cartBlock = document.querySelector(".shopping-cart");
  const techStore = JSON.parse(localStorage.getItem("tech_store"));
  console.log(cartBlock);
  console.log(techStore);
  const cartItem = document.createElement("div");
  console.log(cartItem);
  cartItem.innerHTML = ` <img>`;
});
