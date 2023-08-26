const burgerBtn = document.querySelector(".header__burger");
const header = document.querySelector(".header");
const body = document.body;
const links = document.querySelectorAll(".header__link");

const menuClose = () => {
  header.classList.remove("menu--active");

  body.style.paddingRight = `0`;
  body.style.overflow = "auto";
};
const menuOpen = () => {
  header.classList.add("menu--active");

  const scrollWidth = window.innerWidth - document.documentElement.clientWidth;

  body.style.paddingRight = `${scrollWidth}px`;
  body.style.overflow = "hidden";
};

burgerBtn.addEventListener("click", (e) => {
  if (header.classList.contains("menu--active")) {
    menuClose();
  } else menuOpen();
});

links.forEach((link) => {
  link.addEventListener("click", menuClose);
});
