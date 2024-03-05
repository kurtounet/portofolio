"use strict";

// Correct DATA structure and placement
var DATA = {
  Langages: {
    titre: "Langages de programmation",
    obj: ["Python", "PHP", "JavaScript", "HTML/CSS", "SQL", "C"]
  },
  Frameworks: {
    titre: "Frameworks et bibliothèques",
    obj: ["Angular", "Symfony"],
    objfuture: ["React", "Vue.js", "TensorFlow", "PyTorch", "Keras"]
  },
  Outils: {
    titre: "Outils de développement",
    obj: ["Git", "Docker", "VSCode", "Jupyter Notebook"]
  },
  Database: {
    titre: "Base de données",
    obj: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB", "SQLite"]
  },
  Gestion_project: {
    titre: "Méthodologies et outils de gestion de projet",
    obj: ["Agile", "Scrum", "Kanban", "Trello"]
  },
  UI_UX: {
    titre: "Conception d'interfaces utilisateur UI/UX",
    obj: ["Figma"]
  }
}; // Supposition que techList est correctement sélectionné
// Cette ligne sélectionne l'élément HTML avec l'ID 'divTechno' 
// et le stocke dans la variable 'techList'.
// Cet élément servira à afficher la liste des technologies.

var techList = document.getElementById("divTechno"); // Itération sur DATA pour générer dynamiquement la liste
// Cette boucle for..in parcourt chaque catégorie présente dans l'objet DATA.

var _loop = function _loop(category) {
  // Crée un nouvel élément 'li' pour la catégorie de technologie 
  //en cours et le stocke dans 'techCategory'.
  var techCategory = document.createElement("li"); // Définit le texte de cet élément 'li' pour afficher le 
  //titre de la catégorie suivi d'un deux-points.

  techCategory.textContent = DATA[category].titre + ": "; // Crée un nouvel élément 'ul' qui contiendra la liste des technologies pour cette catégorie.

  var techItems = document.createElement("ul"); // Parcourt chaque technologie dans la catégorie en cours et crée un élément 'li' pour chacune.

  DATA[category].obj.forEach(function (tech) {
    var item = document.createElement("li"); // Crée un nouvel élément 'li' pour la technologie.

    item.textContent = tech; // Définit le texte de l'élément 'li' pour afficher le nom de la technologie.

    techItems.appendChild(item); // Ajoute l'élément 'li' à la liste 'ul' des technologies.
  }); // Vérifie si la catégorie en cours contient des technologies futures ('objfuture').

  if (DATA[category].objfuture) {
    // Gère les technologies futures si présentes
    // Parcourt chaque technologie future dans la catégorie en cours et crée un élément 'li' pour chacune.
    DATA[category].objfuture.forEach(function (tech) {
      var item = document.createElement("li"); // Crée un nouvel élément 'li' pour la technologie future.

      item.textContent = tech + " (future)"; // Ajoute "(future)" au nom de la technologie pour indiquer qu'elle est future.

      techItems.appendChild(item); // Ajoute l'élément 'li' à la liste 'ul' des technologies.
    });
  } // Ajoute la liste 'ul' des technologies à l'élément 'li' de la catégorie.


  techCategory.appendChild(techItems); // Ajoute l'élément 'li' de la catégorie à l'élément principal 'techList' qui est affiché dans le document.

  techList.appendChild(techCategory);
};

for (var category in DATA) {
  _loop(category);
}