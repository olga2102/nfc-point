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
