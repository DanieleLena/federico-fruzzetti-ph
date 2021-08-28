//NAV BAR ANIMATION ================================================================

const nav = document.querySelector(".nav");
let lastScrollTop = 0;

document.addEventListener("scroll", () => {
  var st = window.pageYOffset || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    // downscroll code
    nav.classList.add("hide-nav");
  } else {
    // upscroll code
    nav.classList.remove("hide-nav");

  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});
