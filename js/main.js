const modalJanuary = document.querySelector("#modal-january");
const openJanuary = document.querySelector(".open-january");
const closeJanuary = document.querySelector(".close-january");

const modalMarch = document.querySelector("#modal-march");
const openMarch = document.querySelector(".open-march");
const closeMarch = document.querySelector(".close-march");

const modalSeptember = document.querySelector("#modal-september");
const openSeptember = document.querySelector(".open-september");
const closeSeptember = document.querySelector(".close-september");

openJanuary.addEventListener("click", () => {
  modalJanuary.showModal();
});

closeJanuary.addEventListener("click", () => {
  modalJanuary.close();
});

openMarch.addEventListener("click", () => {
  modalMarch.showModal();
});

closeMarch.addEventListener("click", () => {
  modalMarch.close();
});

openSeptember.addEventListener("click", () => {
  modalSeptember.showModal();
});

closeSeptember.addEventListener("click", () => {
  modalSeptember.close();
});


