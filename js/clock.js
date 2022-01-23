// #6 intervals clock 생성하기
// setInterval - Web API
// Date() - JS

const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); // padStart는 String만 취급
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 웹사이트가 load 되자마자 실행되도록 하기 위함
setInterval(getClock, 1000); // delay는 ms
