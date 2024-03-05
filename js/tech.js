// Correct DATA structure and placement
pathSvg = "assets/svg/logo-tech";
pathImgs = "assets/imgs";
let dataTech = {
  Langages: {
    titre: "Langages de programmation",
    obj: ["python", "php", "javascript", "html_5", "css", "sql", "C"],
  },
  Frameworks: {
    titre: "Frameworks et bibliothèques",
    obj: ["Angular", "Symfony"],
    objfuture: ["React", "Vue.js", "TensorFlow", "PyTorch", "Keras"],
  },
  Outils: {
    titre: "Outils de développement",
    obj: ["Git", "Docker", "VSCode", "Jupyter Notebook"],
  },
  Database: {
    titre: "Base de données",
    obj: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB", "SQLite"],
  },
  Gestion_project: {
    titre: "Méthodologies et outils de gestion de projet",
    obj: ["Agile", "Scrum", "Kanban", "Trello"],
  },
  UI_UX: {
    titre: "Conception d'interfaces utilisateur UI/UX",
    obj: ["Figma"],
  },
};

// Supposition que techList est correctement sélectionné
// Cette ligne sélectionne l'élément HTML avec l'ID 'divTechno'
// et le stocke dans la variable 'techList'.
// Cet élément servira à afficher la liste des technologies.

const divTechno = document.getElementById("divTechno");

// Itération sur DATA pour générer dynamiquement la liste
// Cette boucle for..in parcourt chaque catégorie présente dans l'objet DATA.
for (const category in dataTech) {
  console.log(category);
  const card = document.createElement("div");
  card.className = "card-tech";
  const ulTechItems = document.createElement("ul");
  const cardtitre = document.createElement("h3");
  cardtitre.textContent = dataTech[category].titre;
  for (const tech of dataTech[category].obj) {
    console.log(tech);

    const imgTech = document.createElement("img");
    imgTech.src = "assets/imgs/logo-technologies/angular.png";
    imgTech.alt = tech;
    const pTech = document.createElement("p");
    pTech.textContent = tech.toUpperCase();
    const liTechCategory = document.createElement("li");

    liTechCategory.appendChild(imgTech);
    liTechCategory.appendChild(pTech);
    ulTechItems.appendChild(liTechCategory);
    card.appendChild(cardtitre);
    card.appendChild(ulTechItems);
  }
  divTechno.appendChild(card);
}
