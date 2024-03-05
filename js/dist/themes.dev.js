"use strict";

function lightModeChange() {
  var body = document.body;
  body.classList.toggle('light-mode');
  var modeToggleBtn = document.getElementById('modeToggle');

  if (body.classList.contains('light-mode')) {
    modeToggleBtn.textContent = '🌙';
  } else {
    modeToggleBtn.textContent = '☀️';
  }
}