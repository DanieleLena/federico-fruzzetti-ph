// LIGHTBOX GALLERY ===========================================

var lightbox = new SimpleLightbox(".main-container a", {
  /* options */
  spinner: true,
  disableRightClick: true,
  preloading: false,
});

//LAZY LOADING WITH IntersectionObserver ======================

const config = {
  rootMargin: "-100px 0px",
  threshold: 0.01,
};

// The observer for the images on the page

const lazyLoading = () => {
  const images = document.querySelectorAll(".image");
  let observer = new IntersectionObserver(onIntersection, config);

  images.forEach((image) => {
    observer.observe(image);

  });

  function onIntersection(entries) {

    entries.forEach((entry) => {
        console.log(entry)
      if (entry.intersectionRatio > 0) {
          console.log(entry.intersectionRatio);
          console.log("intersect")
          preloadImage(entry.target.dataset.srcset, entry.target);
          observer.unobserve(entry.target);
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
lazyLoading();
