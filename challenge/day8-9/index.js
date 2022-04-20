const maxNum = document.querySelector("#max-number input");
const userNum = document.querySelector("#guess-number input");
const playBtn = document.querySelector("#guess-number button");

const answer = document.querySelector("#answer");
const choose = document.querySelector("#answer #choose");
const winOrLose = document.querySelector("#answer #win-lose");

const getMachineNum = localStorage.getItem("machineN");
const getUserNum = localStorage.getItem("userN");

function handleSubmit(event) {
  event.preventDefault(); // 새로고침 방지

  // 입력 값이 없는 경우
  if (maxNum.value === "" || userNum.value === "") {
    alert("값을 입력하세요.");
    return false;
  }

  // 입력 범위에 음수가 포함되는 경우
  if (maxNum.value < 0 || userNum.value < 0) {
    alert("입력한 숫자 범위에 음수가 포함되어 절대값을 반환하도록 하겠습니다.");
    maxNum.value = Math.abs(maxNum.value);
    userNum.value = Math.abs(userNum.value);
  }

  // 조건: 0 <= machineNum <= maxNum
  const machineNum = Math.floor(
    Math.random() * (parseInt(maxNum.value, 10) + 1)
  ); // if maxNum = 40, 0 <= machineNum <= 40
  localStorage.setItem("machineN", machineNum);
  localStorage.setItem("userN", userNum.value);

  if (getMachineNum != null && getUserNum != null) {
    answer.classList.remove("hidden");
  }
  choose.innerText = `You chose: ${userNum.value}, the machine chose: ${machineNum}.`;
  // console.log(typeof machineNum); // number
  // console.log(typeof userNum.value); //string
  if (machineNum === parseInt(userNum.value, 10)) {
    winOrLose.innerText = "You won!";
  } else {
    winOrLose.innerText = "You lost!";
  }
}

playBtn.addEventListener("click", handleSubmit);

---
// 비교 분석해보기
  
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


