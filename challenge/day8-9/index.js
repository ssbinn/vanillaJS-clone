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

// -----------------------------------------------------------------------------
const generateInput = document.querySelector("#given-num");
const playForm = document.querySelector("#play-form");
const playInput = document.querySelector("#play-form input");
const hiddenDiv = document.querySelector("div");
const hiddenProgress = document.querySelector(".hidden h3:first-child");
const hiddenResult = document.querySelector(".hidden h3:last-child");

const HIDDEN = "hidden";

function negNumberValidator(num) {
  if (num === null) return false;
  return num >= 0;
}

function isValueInRange(value, maxNum) {
  return value >= 0 && value <= maxNum;
}

function showGameResult(guessNum, maxNum) {
  hiddenDiv.classList.remove(HIDDEN);
  // console.log("Guess Num: " + guessNum, "Max Num: " + maxNum);
  const machineChose = Math.floor(Math.random() * (parseInt(maxNum, 10) + 1));
  hiddenProgress.innerHTML = `You Chose: ${guessNum}, the machine chose: ${machineChose}`;
  if (guessNum === machineChose) {
    hiddenResult.innerHTML = `You Win!`;
  } else {
    hiddenResult.innerHTML = `You Lost!`;
  }
}

function playGame(value, maxNum) {
  if (isValueInRange(value, maxNum)) {
    showGameResult(value, maxNum);
  } else {
    alert("The guessing number should be in the range of number.");
  }
}

function submitListener(event) {
  event.preventDefault();
  if (negNumberValidator(generateInput.value)) {
    const guessNum = parseInt(playInput.value, 10);
    const maxNum = parseInt(generateInput.value, 10);
    playGame(guessNum, maxNum);
  } else {
    alert("The range should be non-empty and positive.");
    console.log(generateInput.value);
  }
}

playForm.addEventListener("submit", submitListener);

