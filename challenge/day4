// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const superEventHandler = {
  handleMouseover: function () {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  handleMouseout: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  handleResize: function () {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },
  handleContextmenu: function () {
    title.innerText = "That was a right click!";
    title.style.color = colors[4];
  }
};

const title = document.querySelector("h2");

title.addEventListener("mouseover", superEventHandler.handleMouseover);
title.addEventListener("mouseout", superEventHandler.handleMouseout);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContextmenu);
