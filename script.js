"use strict";

const mainContainer = document.getElementById("main-container");
const listContainer = document.getElementById("list-container");
const buttons = document.querySelectorAll("button");

mainContainer.style.border = "1px solid black";
mainContainer.style.padding = "50px";

buttons[0].addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = "New Item";

  li.addEventListener("click", () => {
    li.classList.add("highlight");
  });
  listContainer.appendChild(li);
});

buttons[1].addEventListener("click", () => {
  const listOfLi = document.querySelectorAll("li");
  for (let i = 0; i < listOfLi.length; i++) {
    listOfLi[i].innerText = "Updated Item";
  }
});

buttons[2].addEventListener("click", () => {
  const listOfLi = document.querySelectorAll("li");
  const lastItem = listOfLi.length - 1;
  listOfLi[lastItem].remove();
});
