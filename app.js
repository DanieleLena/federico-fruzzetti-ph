document.addEventListener("DOMContentLoaded", function () {
 let splide = new Splide(".splide", {
   pauseOnHover: "false",
   rewind: "true",
   type: 'fade',
   autoplay: "true",
   interval: 5000,
   pauseOnFocus: "false",
   arrows: "false",
 });
  
  splide.mount();
});


// CUSTOM RIGHT CLICK MENU =================================================

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


//animation

const burgerBtn = document.querySelector(".burger-icon");
const tl = gsap.timeline({paused:true});

function openNav() {
  animateOpenNav();
  
  burgerBtn.onclick = function (e) {
    // Toggle reversed to it's opposite value
    tl.reversed(!tl.reversed());
    // Use the toggle method in the classList API
    document.body.classList.toggle("disable-scrolling");
  };
}
function animateOpenNav() {
  tl.to(".mobile-menu", {
    onStart() {
      console.log('ciao cazzoni');
    },
    duration: .3,
    ease: "power3.out",
  }).to(".mobile-menu", {
    duration: .3,
    ease: "power3.out",
    opacity: .9
  }).to(".mobile-link", {
    opacity: 1,
    duration: 1,
    stagger: {
      each: 0.1,
      ease: "power1.in"
    }
  })
  .reverse(); 
}

openNav();