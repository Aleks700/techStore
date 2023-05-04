document.addEventListener("DOMContentLoaded", function () {
  const popularItemWrap = document.querySelector(".popular_item_wrapper");
  popularItemWrap.addEventListener("click", (e) => {
    const btn = e.target;
    if (btn.classList.contains("btn__blue")) {
      const parentDiv = btn.parentElement;
      btn.classList.remove("btn__blue");
      btn.classList.add("active-btn__blue");
      const link = document.createElement("a");
      link.setAttribute("href", "cart.html");
      link.appendChild(btn);
      parentDiv.appendChild(link);
      const price = parentDiv.querySelector(".price span").innerText;
      const productName = parentDiv.querySelector(".product_name").innerText;
      const imgSrc = parentDiv.querySelector("img").src;
      const techStore = localStorage.getItem("tech_store");
      console.log(techStore);
      if (techStore !== null) {
        const parsed = JSON.parse(techStore);
        const findElement = parsed.findIndex(
          (elem) => elem.productName === productName
        );

        if (findElement === -1) {
          console.log(-1);
          localStorage.setItem(
            "tech_store",
            JSON.stringify(
              parsed.push({
                productName: productName,
                imgSrc: imgSrc,
                price: price,
                count: 1,
              })
            )
          );
        } else {
          console.log(parsed[findElement].count);
        }

        // console.log(findElement);
        // console.log(parsed[findElement]);
        // console.log;
      } else {
        localStorage.setItem(
          "tech_store",
          JSON.stringify([
            {
              productName: productName,
              imgSrc: imgSrc,
              price: price,
              count: 1,
            },
          ])
        );
        console.log(techStore);
      }

      console.log(price);
      console.log(productName);
      console.log(imgSrc);
    }
  });
});
