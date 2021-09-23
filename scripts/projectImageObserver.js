const config = {
  rootMargin: "-0px 0px",
  threshold: 0.00,
};

// The observer for the images on the page

const lazyLoading = () => {
  const Project = document.querySelectorAll(".imageDue");
  let observerDue = new IntersectionObserver(onIntersection, config);

  Project.forEach((image) => {
    observerDue.observe(image);
  });

  function onIntersection(entries) {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.intersectionRatio >  0) {
        console.log(entry.intersectionRatio);
        console.log("intersect");
        preloadImage(entry.target.dataset.srcset, entry.target);
        observerDue.unobserve(entry.target);
      }
    });
  }
};
function preloadImage(url, target) {
  target.setAttribute("srcset", url);

  target.addEventListener("load", () => {
    target.classList.add("fadein-animation");
  });
}
// lazyLoading();


const footer = document.querySelector(".footer-top");
let observerTre = new IntersectionObserver(onIntersectionDue, config);
    observerTre.observe(footer);

  function onIntersectionDue(entries) {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.intersectionRatio >  0) {
        console.log(entry.intersectionRatio);
        console.log("intersect");
        preloadImage(entry.target.dataset.srcset, entry.target);
        observerTre.unobserve(entry.target);
      }
    });
  }
