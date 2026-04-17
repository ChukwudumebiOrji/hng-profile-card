"use strict";

const timeElement = document.getElementById("current-time");

console.log(timeElement)
console.log(Date.now())

const updateTime = () => {
  timeElement.textContent = ${Date.now()};
}

updateTime();
setInterval(updateTime, 1000);
