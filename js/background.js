// #8 랜덤 배경 나타내기 - JS에서 이미지를 만들고 HTML에 추가하기 

const images = ["0.jpg"];

const choseImage = images[Math.floor(Math.random() * images.length)];  // 0~10 사이의 float값, ex) floor(5.9999) -> 5

const image = document.createElement("img"); // JS에서 HTML element 생성, tagName은 "img"

image.src = `img/${choseImage}`; // img 파일임, 이 코드는 <img src="img/0.jpg"/> 와 같음

document.body.appendChild(image); // image를 HTML body에 추가하기