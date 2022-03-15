// 2022.03.15

const maxNum = document.querySelector("#max-number input");
const userNum = document.querySelector("#user-number input");
const playBnt = document.querySelector("#user-number button");

const result = document.querySelector("#result");
const choose = document.querySelector("#result #choose");
const winOrLose = document.querySelector("#result #win-lose");

const getRandomNum = localStorage.getItem("randomN");
const getUserNum = localStorage.getItem("userN");

function handleSubmit(event) {
  event.preventDefault();

  const machineNum = Math.floor(Math.random() * maxNum.value) + 1; // 0 <= machineNum <= maxNum (if maxNum=40, 39 + 1)
  localStorage.setItem("randomN", machineNum);
  localStorage.setItem("userN", userNum.value);

  if (getRandomNum != null && getUserNum != null) {
    result.classList.remove("hidden");
  }
  choose.innerText = `You chose: ${userNum.value}, the machine chose: ${machineNum}.`;
  if (machineNum === userNum.value) {
    winOrLose.innerText = "You won!";
  } else {
    winOrLose.innerText = "You lost!";
  }
}

playBnt.addEventListener("submit", handleSubmit);
