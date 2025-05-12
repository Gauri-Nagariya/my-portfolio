let lastScrollTop = 0;
const navbar = document.querySelector(".Navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop && scrollTop > 50) {
    navbar.classList.add("hidden"); // Hide on scroll down
  } else {
    navbar.classList.remove("hidden"); // Show on scroll up
  }

  lastScrollTop = scrollTop;
});
