const scrollButton = document.querySelector("[data-scroll-to-blogs]");
const blogsSection = document.querySelector("#latest-stories");
const readMoreButtons = document.querySelectorAll("[data-read-more]");
const revealItems = document.querySelectorAll(".reveal");

scrollButton?.addEventListener("click", () => {
  blogsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
});

readMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const contentId = button.getAttribute("aria-controls");
    const extraContent = contentId ? document.getElementById(contentId) : null;

    if (!extraContent) return;

    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    extraContent.hidden = isOpen;

    const label = button.querySelector("span:first-child");
    if (label) label.textContent = isOpen ? "Continue reading" : "Show less";
  });
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
