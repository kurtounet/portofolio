"use strict";

var menuBurger = document.getElementById("menu-burger");
var menuLateral = document.getElementById("menu-de-navigation");
var menuClose = document.getElementById("menu-close");
var linkClick = document.getElementsByClassName("link");
var divtechno = document.getElementById("divTechno");

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
// Sélection de l'élément ul où les technologies seront affichées

var techList = document.getElementById("divTechno"); // Parcours de chaque clé dans le JSON et création de la liste des technologies

var _loop = function _loop(category) {
  var techCategory = document.createElement("li");
  techCategory.textContent = category + ": ";
  var techItems = document.createElement("ul");
  technologiesJSON[category].forEach(function (tech) {
    var item = document.createElement("li");
    item.textContent = tech;
    techItems.appendChild(item);
  });
  techCategory.appendChild(techItems);
  techList.appendChild(techCategory);
};

for (var category in technologiesJSON) {
  _loop(category);
}

var DATA = [{
  Langages_de_programmation: {
    titre: "Langages_de_programmation",
    obj: ["Python", "PHP", "JavaScript", "HTML/CSS", "SQL", "C"]
  },
  langages: {
    titre: "Langages_de_programmation",
    obj: ["Django", "Flask", "Spring Boot", "React", "Angular", "Vue.js", "TensorFlow", "PyTorch", "Keras"]
  },
  Frameworks_et_bibliothèques: {
    titre: "Frameworks et bibliothèques",
    obj: ["Angular", "Symfony"],
    objfuture: ["React", "Vue.js", "TensorFlow", "PyTorch", "Keras"]
  },
  Outils: {
    titre: ["Outils de développement"],
    obj: ["Git", "Docker", "VSCode", "Jupyter Notebook"]
  },
  database: {
    titre: ["Base de données"],
    obj: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB", "SQLite"]
  },
  gestion_project: {
    titre: ["Méthodologies et outils de gestion de projet"],
    obj: ["Agile", "Scrum", "Kanban", "Trello"]
  },
  UI_UX: {
    titre: ["Conception d'interfaces utilisateur UI/UX"],
    obj: ["Figma"]
  }
}];