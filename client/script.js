import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

const form = document.querySelector("form");
const chatContainer = document.querySelector("#chat_container");

let loadInterval;

function loader(el) {
  el.textContent = "";

  loadInterval = setInterval(() => {
    el.textContent += ".";

    if (el.textContent === "...") {
      el.textContent = "";
    }
  }, 300);
}

function typeText(el, text) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      el.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  });
}
