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
    }
  });
});
