const menu = document.querySelector(".nav");
const menuButton = document.querySelector(".toggle");
// const body = document.querySelector(".page__body");
const links = document.querySelectorAll(".nav__link");
const header = document.querySelector(".header");

const closedMenu = () => {
  menuButton.classList.add("toggle--open");
  menu.classList.remove("main-nav--close");
}

closedMenu();

//переключение меню
menuButton.addEventListener("click", () => {
  if (menuButton.classList.contains('toggle--open')) { // меню закрыто
    // body.classList.add("page__body--lock");
    menu.classList.add("nav--opened");
    menuButton.classList.remove("toggle--open");
    menuButton.classList.add("toggle--close");
    header.classList.add("header--menu-opened");
  } else if (menuButton.classList.contains("toggle--close")) { // меню закрыто
      // body.classList.remove("page__body--lock");
      menu.classList.remove("nav--opened");
      menuButton.classList.remove("toggle--close");
      menuButton.classList.add("toggle--open");
      header.classList.remove("header--menu-opened");
  }
});

//блокировка скролла
const scrollLock = () => {
  if (links && links.length > 0) {
    links.forEach(link => {
    link.addEventListener("click", () => {
      // body.classList.remove("page__body--lock");
    });
  });
  }
};

scrollLock();
