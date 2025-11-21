document.addEventListener("DOMContentLoaded", () => {
  const OFFSET = 80;

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

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;

      e.preventDefault();

      const topPos =
        target.getBoundingClientRect().top + window.scrollY - OFFSET;
      window.scrollTo({
        top: topPos,
        behavior: "smooth",
      });
    });
  });
});
