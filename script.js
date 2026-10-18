// Revela elementos ao rolar e anima os contadores
(() => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const reveals = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        const counter = entry.target.querySelector("[data-count]");
        if (counter) countUp(counter);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );
  reveals.forEach((el) => io.observe(el));

  function countUp(el) {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { el.textContent = target + suffix; return; }
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
})();
