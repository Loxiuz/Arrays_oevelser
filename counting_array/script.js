"use strict";

window.addEventListener("load", start);

const array = [];
let counter = 0;

function start() {
  setInterval(arrayCounter, 1000);
}

function arrayCounter() {
  if (array.unshift(counter) == 10) {
    array.pop();
  }
  console.log(array);
  counter++;
}
