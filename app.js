const url = "https://api.adviceslip.com/advice";
const adviceId = document.querySelector(".advice__id");
const adviceText = document.querySelector(".advice__text");
const fetchButton = document.querySelector(".advice__dice");

const fetchAdvice = async () => {
  const response = await fetch(url);
  const adviceObj = await response.json();
  const { id, advice } = adviceObj.slip;
  console.log(id, advice);
  adviceId.textContent = id;
  adviceText.textContent = `"${advice}"`;
};

window.addEventListener("DOMContentLoaded", fetchAdvice);

fetchButton.addEventListener("click", fetchAdvice);
