document.addEventListener("DOMContentLoaded", () => {
  console.log("cart");
  const cartBlock = document.querySelector(".shopping-cart");
  const techStore = JSON.parse(localStorage.getItem("tech_store"));
  if (techStore.length > 0) {
    const { count, imgSrc, price, productName } = techStore[0];
    console.log("count", count);
    console.log("imgSrc", imgSrc);
    console.log("price", price);
    console.log("productName", productName);
    const cartItem = document.createElement("div");
    cartItem.classList.add("shopping-cart__item");
    console.log(cartItem);

    cartItem.innerHTML = `  
                                  <div class="shopping-cart__item_preview">
                                      <img src=${imgSrc} alt="" />
                                  </div>
                                  <div class="shopping-cart__text">
                                      <p>${productName}</p>
                                      <p>Цена: <span class="bold">${price}</span></p>
                                  </div>
                                  <div class="counter-wrapper">
                                      <button>-</button>
                                      <button class="counter">${count}</button>
                                      <button>+</button>
                                  </div>
                               `;
    cartBlock.appendChild(cartItem);
  }
  console.log(cartBlock);
  console.log(techStore);
});
