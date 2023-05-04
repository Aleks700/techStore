document.addEventListener("DOMContentLoaded", function () {
  const popularItemWrap = document.querySelector(".popular_item_wrapper");
  popularItemWrap.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn__blue")) {
      const parentDiv = e.target.parentElement;
      e.target.classList.remove("btn__blue");
      e.target.classList.add("active-btn__blue");
      const link = document.createElement("a");
      link.setAttribute("href", "cart.html");
      link.appendChild(e.target);
      parentDiv.appendChild(link);
    }
  });
});
