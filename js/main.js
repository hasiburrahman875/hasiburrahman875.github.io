(function () {
  function applyImageFallback(img) {
    var frame = img.closest(".image-frame");
    if (!frame) return;

    frame.classList.add("is-missing");
    var fallback = frame.querySelector(".image-fallback");
    if (fallback) {
      fallback.textContent = img.getAttribute("data-fallback") || "[ADD FIGURE]";
    }
  }

  function initImageFallbacks() {
    var images = document.querySelectorAll("img[data-fallback]");
    images.forEach(function (img) {
      if (img.complete && img.naturalWidth === 0) {
        applyImageFallback(img);
      }
      img.addEventListener("error", function () {
        applyImageFallback(img);
      });
    });
  }

  function setFooterYear() {
    var yearNodes = document.querySelectorAll("#year");
    var year = new Date().getFullYear();
    yearNodes.forEach(function (node) {
      node.textContent = year;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initImageFallbacks();
    setFooterYear();
  });
})();
