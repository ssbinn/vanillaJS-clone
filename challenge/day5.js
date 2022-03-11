const colors = ["#2E88D5", "#904FAD", "#EEBC10"];

const title = document.querySelector("h2");
title.style.color = "white";

const backColor = document.querySelector("body");

function handleBackgroundColor() {
  if (window.innerWidth < 600) {
    backColor.style.backgroundColor = colors[0];
  } else if (window.innerWidth >= 600 && window.innerWidth < 900) {
    backColor.style.backgroundColor = colors[1];
  } else {
    backColor.style.backgroundColor = colors[2];
  }
}

window.addEventListener("resize", handleBackgroundColor);
