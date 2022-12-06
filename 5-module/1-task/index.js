function hideSelf() {
  hideSelfButton = document.querySelector('.hide-self-button'); // Найти
  hideSelfButton.addEventListener("click", () => hideSelfButton.hidden = true); // И перепрятать
};
