
const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const navLinks = document.querySelectorAll(".header__nav a");

function closeMenu() {
  nav.classList.remove("is-open");
  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-label", "Open menu");
}

burger.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");

  burger.setAttribute("aria-expanded", String(isOpen));
  burger.setAttribute(
    "aria-label",
    isOpen ? "Close menu" : "Open menu"
  );
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    closeMenu();
  }
});
