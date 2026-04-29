(function () {
  function renderNewsFeed() {
    var node = document.getElementById("news-list");
    if (!node) return;

    var items = window.NEWS_ITEMS || [];
    if (!Array.isArray(items) || items.length === 0) {
      node.innerHTML = "<li><strong>Updates:</strong> New items will be added soon.</li>";
      return;
    }

    var html = items
      .map(function (item) {
        if (!item || !item.date || !item.text) return "";
        var safeDate = String(item.date);
        var safeText = String(item.text);
        if (item.link) {
          return (
            "<li><strong>" +
            safeDate +
            ":</strong> <a href=\"" +
            String(item.link) +
            "\" target=\"_blank\" rel=\"noopener noreferrer\">" +
            safeText +
            "</a></li>"
          );
        }
        return "<li><strong>" + safeDate + ":</strong> " + safeText + "</li>";
      })
      .filter(Boolean)
      .join("");

    node.innerHTML = html;
  }

  function applyImageFallback(img) {
    var frame = img.closest(".image-frame");
    if (!frame) return;

    frame.classList.add("is-missing");
    var fallback = frame.querySelector(".image-fallback");
    if (fallback) {
      fallback.textContent = img.getAttribute("data-fallback") || "Figure unavailable";
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

  function buildVideoFallback(video) {
    var link = video.getAttribute("data-fallback-link");
    if (!link) return;

    var holder = document.createElement("p");
    holder.className = "video-fallback";
    holder.innerHTML =
      "If this browser cannot play the embedded video, use the direct file link: " +
      '<a href="' +
      link +
      '" target="_blank" rel="noopener noreferrer">open video</a>.';

    video.parentNode.insertAdjacentElement("afterend", holder);
  }

  function initVideoFallbacks() {
    var videos = document.querySelectorAll("video[data-fallback-link]");
    videos.forEach(function (video) {
      buildVideoFallback(video);
      video.setAttribute("playsinline", "playsinline");
      video.setAttribute("preload", "metadata");
      video.addEventListener("error", function () {
        video.classList.add("is-broken");
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
    renderNewsFeed();
    initImageFallbacks();
    initVideoFallbacks();
    setFooterYear();
  });
})();
