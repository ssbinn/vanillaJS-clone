- 백그라운드 컬러를 두 가지 이상의 색상으로 변경
- linear-gradient와 backgroundImage
- backgroundImage와 backgroundColor
- 백틱 활용

css에서 gradient는 한 방향에서 다른 방향으로 색이 변화하는 효과를 줄 때 쓰는 속성.
색상이 아닌, 크기가 없는 이미지라서 backgroundImage 속성을 사용하는 건가?


```javascript
const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const btn = document.querySelector("button");
const body = document.querySelector("body");

function onClickHandler() {
  let color1 = colors[Math.floor(Math.random() * colors.length)];  //0 <= color1 <= 17
  let color2 = colors[Math.floor(Math.random() * colors.length)];  //0 <= color2 <= 17

  body.style.backgroundImage = `linear-gradient(0.25turn, ${color1}, ${color2})`;  //backgroundColor 쓰면 안됨
}

btn.addEventListener("click", onClickHandler);
```
