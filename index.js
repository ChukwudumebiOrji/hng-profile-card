"use strict";

function renderTime() {
    var timeElement = document.getElementById("current-time");

    if (timeElement) {
        var ms = Date.now();
        timeElement.textContent = ms;
        timeElement.setAttribute("datetime", new Date(ms).toISOString());
    }
}

window.addEventListener("DOMContentLoaded", function() {
    renderTime();
    setInterval(renderTime, 500);
});
