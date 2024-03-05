"use strict";

pathImgs = "assets/imgs";
var dataTech = {
  Langages: {
    titre: "Langages de programmation",
    obj: ["python", "php", "javascript", "html5", "css3"]
  },
  Frameworks: {
    titre: "Frameworks et bibliothèques",
    obj: ["angular", "symfony", "wordpress"],
    objfuture: ["react", "vue.js", "nextjs"]
  },
  Outils: {
    titre: "Outils de développement",
    obj: ["git", "docker", "vscode"]
  },
  Database: {
    titre: "Base de données",
    obj: ["mysql", "mariadb", "postgresql", "mongodb", "sqlite"]
  },
  Gestion_project: {
    titre: "Méthodologies et outils de gestion de projet",
    obj: ["agile", "scrum", "kanban", "trello"]
  },
  UI_UX: {
    titre: "Conception d'interfaces utilisateur UI/UX",
    obj: ["figma"]
  }
}; // Supposition que techList est correctement sélectionné
// Cette ligne sélectionne l'élément HTML avec l'ID 'divTechno'
// et le stocke dans la variable 'techList'.
// Cet élément servira à afficher la liste des technologies.

var divTechno = document.getElementById("divTechno"); // Itération sur DATA pour générer dynamiquement la liste
// Cette boucle for..in parcourt chaque catégorie présente dans l'objet DATA.

for (var category in dataTech) {
  console.log(category);
  var card = document.createElement("div");
  card.className = "card-tech";
  var ulTechItems = document.createElement("ul");
  var cardtitre = document.createElement("h3");
  cardtitre.textContent = dataTech[category].titre;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = dataTech[category].obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var tech = _step.value;
      console.log(tech);
      var imgTech = document.createElement("img");
      imgTech.src = pathSvg + tech + ".svg";
      imgTech.className = "techsvg";
      imgTech.alt = tech;
      var pTech = document.createElement("p");
      pTech.textContent = tech.toUpperCase();
      var liTechCategory = document.createElement("li");
      liTechCategory.appendChild(imgTech);
      liTechCategory.appendChild(pTech);
      ulTechItems.appendChild(liTechCategory);
      card.appendChild(cardtitre);
      card.appendChild(ulTechItems);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  divTechno.appendChild(card);
}