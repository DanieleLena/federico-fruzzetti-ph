const images = document.querySelectorAll(".lazy-load");

const config = {
  rootMargin: "-300px 0px",
  threshold: 0.01,
};

// The observer for the images on the page
let observer = new IntersectionObserver(onIntersection, config);
images.forEach((image) => {
  observer.observe(image);
});

function onIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      observer.unobserve(entry.target);
      preloadImage(entry.target.dataset.src, entry.target);
    }
  });
}
function preloadImage(url, target) {
  target.setAttribute("src", url);

  target.addEventListener("load", () => {
    target.classList.add("fadein-animation");
    console.log("caricata");
  });
}

// CUSTOM RIGHT CLICK MENU =================================================

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
  if (e.target !== menu) {
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
