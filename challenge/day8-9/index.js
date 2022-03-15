// 2022.03.15
const maxInput = document.querySelector("#max-form input");
const userInput = document.querySelector("#user-form input");
const btn = document.querySelector("#user-form button");

const result = document.querySelector("#result");
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");

const HIDDEN_CLASSNAME = "hidden";

function handleSubmit(event) {
  const maxNum = maxInput.value; //40
  const userNum = userInput.value; //17
  const machineNum = Math.floor(Math.random() * maxNum + 1); // 0 <= machineNum <= maxNum (if maxNum=40, 39 + 1)

  event.preventDefault();

  if (machineNum === userNum) {
    win.classList.remove(HIDDEN_CLASSNAME);
    lose.classList.add(HIDDEN_CLASSNAME);
    paintResult(userNum, machineNum);
  } else {
    win.classList.add(HIDDEN_CLASSNAME);
    lose.classList.remove(HIDDEN_CLASSNAME);
    paintResult(userNum, machineNum);
  }
}

function paintResult(userNum, machineNum) {
  result.innerText = `You chose: ${userNum}, the machine chose: ${machineNum}.`;
  result.classList.remove(HIDDEN_CLASSNAME);
}

btn.addEventListener("submit", handleSubmit);
