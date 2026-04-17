"use strict";

const timeElement = document.getElementById("current-time");

const updateTime = () => {
  timeElement.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);
