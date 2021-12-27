const modalWindow = document.querySelector(".popup");
const closeButton = document.querySelector(".close-button");
const flashcards = document.getElementById("flashcards");
const virtualPiano = document.getElementById("virtual-piano");
const hamburgerMenu = document.querySelector(".hamburger__menu");
const portfolioNav = document.querySelector(".portfolio__menu");

flashcards.onclick = () => {
  modalWindow.classList.remove("hidden-popup");
  modalWindow.classList.add("show-popup");
}

virtualPiano.onclick = () => {
  modalWindow.classList.remove("hidden-popup");
  modalWindow.classList.add("show-popup");
}

hamburgerMenu.onclick = () => {
  const menuClose = document.querySelector(".hamburger__close");

  if (menuClose !== null) {
    hamburgerMenu.classList.remove("hamburger__close");
    hamburgerMenu.classList.add("hamburger__open");
    portfolioNav.classList.add("portfolio__menu--open");

  } else {
    hamburgerMenu.classList.remove("hamburger__open");
    hamburgerMenu.classList.add("hamburger__close");
    portfolioNav.classList.remove("portfolio__menu--open");
  }
}

closeButton.addEventListener("click", (evt)=> {
  evt.preventDefault();
  modalWindow.classList.remove("show-popup");
  modalWindow.classList.add("hidden-popup");
})