"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("current-time");

  const updateTime = () => {
    const currentTimeMs = Date.now();
    if (timeElement) {
      timeElement.textContent = currentTimeMs;
    }
  };
  updateTime();

  setInterval(updateTime, 500);
});
