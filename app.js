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
