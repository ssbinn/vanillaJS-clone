const clockTitle = document.querySelector(".js-clock");

function Dday() {
  const dday = new Date("2022,11,25");
  const today = new Date();

  const gap = dday.getTime() - today.getTime();

  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hour = Math.floor(gap / (1000 * 60 * 60)) % 24;
  const min = Math.floor(gap / (1000 * 60)) % 60;
  const sec = Math.floor((gap / 1000) % 60);

  clockTitle.innerText = `${day}일 ${hour}시간 ${min}분 ${sec}초`;
}

Dday();
setInterval(Dday, 1000);
