document.addEventListener("DOMContentLoaded", () => {
  //   const btn_render = document.querySelector(".render");
  const cartBlock = document.querySelector(".shopping-cart");
  function renderDiv() {
    cartBlock.innerHTML = "";
    const techStore = JSON.parse(localStorage.getItem("tech_store"));
    if (techStore.length > 0) {
      techStore.forEach((element) => {
        // const { count, imgSrc, price, productName } = element;
        const count = element.count;
        const imgSrc = element.imgSrc;
        const price = element.price;
        const productName = element.productName;
        const cartItem = document.createElement("div");
        cartItem.classList.add("shopping-cart__item");

        cartItem.innerHTML = `  
                                      <div class="shopping-cart__item_preview">
                                          <img src=${imgSrc} alt="" />
                                      </div>
                                      <div class="shopping-cart__text">
                                          <p data-name='${productName}' >${productName}</p>
                                          <p>Цена: <span class="bold">${price}</span></p>
                                      </div>
                                      <div class="counter-wrapper">
                                        <button class="trash-basket"><img src = 'img/trash.svg' class="trash-basket"></button> 
                                          <button class='decreaser'>-</button>
                                          <button class="counter">${count}</button>
                                          <button class='increaser'>+</button>
                                      </div>
                                   `;
        cartBlock.appendChild(cartItem);
      });
    }
  }

  cartBlock.addEventListener("click", (e) => {
    console.log(e.target);
    const targetClass = e.target.classList;

    if (
      targetClass.contains("decreaser") ||
      targetClass.contains("increaser") ||
      targetClass.contains("trash-basket")
    ) {
      const parentDiv = e.target.closest(".shopping-cart__item");
      const productName = parentDiv.querySelector("[data-name]").innerText;

      const parsed = JSON.parse(localStorage.getItem("tech_store"));
      const findElement = parsed.findIndex(
        (elem) => elem.productName === productName
      );

      if (targetClass.contains("increaser")) {
        parsed[findElement].count = parsed[findElement].count + 1;
        localStorage.setItem("tech_store", JSON.stringify(parsed));
      }
      if (targetClass.contains("decreaser") && parsed[findElement].count > 1) {
        parsed[findElement].count = parsed[findElement].count - 1;
        localStorage.setItem("tech_store", JSON.stringify(parsed));
      }
      if (targetClass.contains("trash-basket")) {
        console.log(findElement);
        const newParsed = [
          ...parsed.slice(0, findElement),
          ...parsed.slice(findElement + 1),
        ];
        localStorage.setItem("tech_store", JSON.stringify(newParsed));
        console.log(parsed, "newParse");
      }

      //   localStorage.setItem("tech_store", JSON.stringify(parsed));
      renderDiv();
    }
  });

  renderDiv();

  console.log(cartBlock);
});
