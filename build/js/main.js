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

const loginLinks = document.querySelectorAll(".login");
const modal = document.querySelector(".modal");
const page =  document.querySelector(".page__body");
const email = document.querySelector("input[type=email]");

const removeClass = () => {
  modal.classList.remove("modal--opened");
  page.classList.remove("page__body--lock");
}

const getAllClass = (str) => {
  const space = " ";
  return str.split(space);
}

loginLinks.forEach(login => {
  login.addEventListener("click", () => {

    modal.classList.add("modal--opened");
    body.classList.add("page__body--lock");
    email.focus();
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape" || evt.key === "Esc") {
      if (modal.classList.contains("modal--opened")) {
        modal.classList.remove("modal--opened");
      }
    }
  });
})

modal.addEventListener("click", (evt) => {
  const allClasses = getAllClass(evt.target.className);

  const currentClass = allClasses.some(element => {
    return element === "modal";
  });

  if (currentClass) {
    removeClass();
  }
});

new Swiper('.shop-swiper', {
  navigation: {
    nextEl: '.shop-button--next',
    prevEl: '.shop-button--prev',
  },
  pagination: {
    el: '.shop-pagination',
    clickable: true,
  },
  breakpoints: {
    360: {
    slidesPerView: 1,
    },
  },
  spaceBetween: 20,
  loop: true,
});

new Swiper('.youtube-swiper', {
  breakpoints: {
    360: {
    slidesPerView: 2,
    },
    940: {
      slidesPerView: 3,
    }
  },
  spaceBetween: 20,
  loop: true,
});

new Swiper('.articles-swiper', {
  breakpoints: {
    360: {
    slidesPerView: 2,
    },
    940: {
      slidesPerView: 3,
    }
  },
  spaceBetween: 20,
  loop: true,
});

new Swiper('.partners-swiper', {
  breakpoints: {
    360: {
    slidesPerView: 4,
    },
    940: {
      slidesPerView: 6,
    }
  },
  spaceBetween: 20,
  loop: true,
});
