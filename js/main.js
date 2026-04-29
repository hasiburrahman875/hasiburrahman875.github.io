(function () {
  function renderNewsFeed() {
    var node = document.getElementById("news-list");
    if (!node) return;

    var items = window.NEWS_ITEMS || [];
    if (!Array.isArray(items) || items.length === 0) {
      node.innerHTML = "<li><strong>No news items found:</strong> add entries in <code>js/news-data.js</code>.</li>";
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
    renderNewsFeed();
    initImageFallbacks();
    setFooterYear();
  });
})();
