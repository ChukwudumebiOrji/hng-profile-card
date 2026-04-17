"use strict";

const timeElement = document.getElementById("current-time");

function updateTime() {
  timeElement.innerHTML = '<span>Date.now()<span>';
}

updateTime();
setInterval(updateTime, 1000);
