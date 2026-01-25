document.addEventListener("DOMContentLoaded", () => {
  const OFFSET = 80;

  // Handle initial hash on page load
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        const topPos =
          target.getBoundingClientRect().top + window.scrollY - OFFSET;
        window.scrollTo({ top: topPos });
      }, 200);
    }
  }

  // Use event delegation and capture phase to intercept earlier
  document.addEventListener(
    "click",
    function (e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      // Skip empty hashes
      if (href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      e.stopPropagation(); // Stop the event from bubbling to astro-navbar

      const topPos =
        target.getBoundingClientRect().top + window.scrollY - OFFSET;
      window.scrollTo({
        top: topPos,
        behavior: "smooth",
      });
    },
    true,
  ); // Use capture phase (true) to intercept before astro-navbar
});
