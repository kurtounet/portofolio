pathImgs = "assets/imgs";
let dataTech = {
  Langages: {
    titre: "Langages de programmation",
    obj: ["python", "php", "javascript", "html5", "css3", "sass"],
  },
  Frameworks: {
    titre: "Frameworks et bibliothèques",
    obj: ["angular", "symfony", "wordpress"],
    objfuture: ["react", "vue.js", "nextjs"],
  },
  Outils: {
    titre: "Outils de développement",
    obj: ["git", "docker", "vscode"],
  },
  Database: {
    titre: "Base de données",
    obj: ["mysql", "mariadb", "postgresql", "mongodb", "sqlite"],
  },
  Gestion_project: {
    titre: "Méthodologies et outils de gestion de projet",
    obj: ["agile", "scrum", "kanban", "trello"],
  },
  UI_UX: {
    titre: "Conception d'interfaces utilisateur UI/UX",
    obj: ["figma"],
  },
};
const divTechno = document.getElementById("divTechno");
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
    imgTech.src = pathSvg + tech + ".svg";
    imgTech.className = "techsvg";
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
