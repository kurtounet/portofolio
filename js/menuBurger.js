const menuBurger = document.getElementById("menu-burger");
const menuLateral = document.getElementById("menu-de-navigation");
const menuClose = document.getElementById("menu-close");

function closeMenu() {
  menuLateral.className = "";
}

menuBurger.addEventListener("click", () => {
  menuLateral.classList.add("open-menu");
});

menuClose.addEventListener("click", () => {
  closeMenu();
});
/*
linkClick.addEventListener("click", () => {
  closeMenu();
});*/