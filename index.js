"use strict";

const timeElement = document.getElementById("current-time");

const updateTime = () => {
  timeElement.innerHTML = '<span>Date.now()<span>';
}

updateTime();
setInterval(updateTime, 1000);
