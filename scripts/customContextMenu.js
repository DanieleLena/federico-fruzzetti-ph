// CUSTOM RIGHT CLICK MENU ===============================

const images = document.querySelectorAll(".image");
const menu = document.querySelector(".right-click-menu");

images.forEach((image) => {
  image.addEventListener(
    "contextmenu",
    (e) => {
      var posX = e.clientX;
      var posY = e.clientY;
      openMenu(posX, posY);
      e.preventDefault();
    },
    false
  );
});

document.addEventListener("click", (e) => {
  if (e.target.parentNode !== menu) {
    menu.style.visibility = "hidden";
  }
});
document.addEventListener("scroll", () => {
  menu.style.visibility = "hidden";
});

function openMenu(x, y) {
  let windowW = window.innerWidth;
  let windowH = window.innerHeight;
  let menuW = menu.offsetWidth;
  let menuH = menu.offsetHeight;
  if (x + menuW > windowW && y + menuH > windowH) {
    menu.style.left = x - menuW + "px";
    menu.style.top = y - menuH + "px";
  } else if (x + menuW > windowW) {
    menu.style.top = y + "px";
    menu.style.left = x - menuW + "px";
  } else if (y + menuH > windowH) {
    menu.style.left = x + "px";
    menu.style.top = y - menuH + "px";
  } else {
    menu.style.left = x + "px";
    menu.style.top = y + "px";
  }

  menu.style.visibility = "visible";
}
