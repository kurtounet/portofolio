"use strict";

var menuBurger = document.getElementById("menu-burger");
var menuLateral = document.getElementById("menu-de-navigation");
var menuClose = document.getElementById("menu-close");

function closeMenu() {
  menuLateral.className = "";
}

menuBurger.addEventListener("click", function () {
  menuLateral.classList.add("open-menu");
});
menuClose.addEventListener("click", function () {
  closeMenu();
});
/*
linkClick.addEventListener("click", () => {
  closeMenu();
});*/