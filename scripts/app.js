
// SPLIDE CAROUSEL ===================================

document.addEventListener("DOMContentLoaded", function () {
 let splide = new Splide(".splide", {
   rewind: true,
   type: "fade",
   autoplay: true,
   pauseOnHover: false,
   interval: 4000,
   arrows: false,
 });
  
  splide.mount();
});






