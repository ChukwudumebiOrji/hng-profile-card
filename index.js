"use strict";

const timeElement = document.getElementById("current-time");



const updateTime = () => {
  const now = new Date()
  const currentTime = now.toLocaleTimeString();
  timeElement.textContent = currentTime
}

updateTime();
setInterval(updateTime, 1000);
