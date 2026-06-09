const menuBtn = document.querySelector(".menu-btn");
const header = document.querySelector(".site-header");

menuBtn?.addEventListener("click", () => {
  header.classList.toggle("open");
});

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach(item => observer.observe(item));

document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", event => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    header.classList.remove("open");

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

const focus = new URLSearchParams(window.location.search).get("focus") || document.body.dataset.focus;
if (focus) {
  const card = document.getElementById(focus);
  if (card) {
    card.classList.add("focused");
    setTimeout(() => card.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
  }
}

const dashboard = document.querySelector(".dashboard-card");

if (dashboard && window.matchMedia("(pointer: fine)").matches) {
  dashboard.addEventListener("mousemove", event => {
    const rect = dashboard.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * -4;
    const rotateX = ((y / rect.height) - 0.5) * 3;

    dashboard.style.animation = "none";
    dashboard.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  });

  dashboard.addEventListener("mouseleave", () => {
    dashboard.style.animation = "";
    dashboard.style.transform = "";
  });
}
