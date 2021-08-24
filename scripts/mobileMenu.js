const burgerBtn = document.querySelector(".burger-icon");
const tl = gsap.timeline({ paused: true });

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
      duration: 0.3,
      ease: "power3.out",
      display: "flex",
      opacity: 0.9,
      
    })
    .to(".mobile-link", {
      opacity: 1,
      duration: 1,
      stagger: {
        each: 0.1,
        ease: "power1.in",
      },
    })
    .reverse();
}

openNav();
