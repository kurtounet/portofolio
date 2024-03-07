let dataJob = [
  {
    poste: "DEVELOPPEMENT WEB ET WEB MOBILE",
    company: "Humain BOOSTER",
    year: "2023-2024",
    skill: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Angular",
      "Design Responsif",
      "API RESTful",
      "Gestion de version (Git)",
      "Méthodologies Agiles",
    ],
  },
  {
    poste: "FACTEUR (INTERIM)",
    company: "La Poste",
    year: "2022-2023",
    skill: [
      "Écoute active",
      "Empathie",
      "Définition d'objectifs",
      "Analyse comportementale",
      "Résolution de conflits",
      "Techniques de communication",
      "Stratégies de motivation",
      "Planification du développement personnel",
    ],
  },
  {
    poste: "AIDE A DOMICILE (INTERIM)",
    company: "Maxi Aide, ADMR",
    year: "2015-2022",
    skill: [
      "Écoute active",
      "Empathie",
      "Définition d'objectifs",
      "Analyse comportementale",
      "Résolution de conflits",
      "Techniques de communication",
      "Stratégies de motivation",
      "Planification du développement personnel",
    ],
  },
  {
    poste: " FORMATION: PRATICIEN PNL",
    company: "Psynapse",
    year: "2014",
    skill: [
      "Écoute active",
      "Empathie",
      "Définition d'objectifs",
      "Analyse comportementale",
      "Résolution de conflits",
      "Techniques de communication",
      "Stratégies de motivation",
      "Planification du développement personnel",
    ],
  },
  {
    poste: "FORMATION: HYPNOSE ERICKSONIENNE",
    company: "Psynapse",
    year: "2013",
    skill: [
      "Écoute active",
      "Empathie",
      "Définition d'objectifs",
      "Analyse comportementale",
      "Résolution de conflits",
      "Techniques de communication",
      "Stratégies de motivation",
      "Planification du développement personnel",
    ],
  },
  {
    poste: "BRANCARDIER",
    company: "clinique du val d'ouest",
    year: "2010-2015",
    skill: [
      "Conception de circuits",
      "Microcontrôleurs",
      "Disposition de PCB",
      "Traitement de signal",
      "Soudage",
      "Dépannage",
      "Logiciels CAO (AutoCAD)",
      "Utilisation d'oscilloscope",
    ],
  },
  {
    poste: "BTS SYSTEME ELECTRONIQUE",
    company: "E.Branly",
    year: "2006-2008",
    skill: [
      "Conception de circuits",
      "Microcontrôleurs",
      "Disposition de PCB",
      "Traitement de signal",
      "Soudage",
      "Dépannage",
      "Logiciels CAO (AutoCAD)",
      "Utilisation d'oscilloscope",
    ],
  },
];

function showPopup(id) {
  let b = "box" + id;
  const box = document.getElementById(b);
  console.log(box);
  //box.classList.add("open-box");
  /*
  function closeMenu() {
    box.className = "";
  }

  menuBurger.addEventListener("click", () => {
   
  });

  menuClose.addEventListener("click", () => {
    closeMenu();
  });
  
  const popup = document.getElementById("divPopup");
  let titre = document.getElementById("h3");
  titre = dataJob[id].titre;
  let company = document.getElementById("p");
  company = dataJob[id].company;
  let year = document.getElementById("p");
  year = dataJob[id].year;
  let ulskills = document.createElement("ul");
  for (const sk of dataJob[id].skill) {
    const liskills = document.createElement("li");
    liskills.textContent = sk;
    ulskills.appendChild(liskills);
    console.log(sk);
  }
  popup.appendChild(titre);
  popup.appendChild(company);
  popup.appendChild(year);
  popup.appendChild(ulskills);
  popup.style.display = "block";
  */
}

const listjobs = document.getElementById("list-jobs");
let i = 0;
for (const job in dataJob) {
  const year = document.createElement("p");
  year.className = "year";
  year.textContent = dataJob[job].year;

  const card = document.createElement("div");
  card.className = "job-card";

  const poste = document.createElement("h3");
  poste.textContent = dataJob[job].poste;

  const company = document.createElement("p");
  company.textContent = dataJob[job].company;

  const divYearCard = document.createElement("div");
  divYearCard.className = "yearCard";

  let ulskills = document.createElement("ul");
  ulskills.className = "ulskill";

  for (const sk of dataJob[job].skill) {
    const liskills = document.createElement("li");
    liskills.textContent = sk;
    ulskills.appendChild(liskills);
    console.log(sk);
  }
  card.appendChild(poste);
  card.appendChild(company);
  card.appendChild(ulskills);

  divYearCard.appendChild(year);
  divYearCard.appendChild(year);
  divYearCard.appendChild(year);
  divYearCard.appendChild(card);

  const bullet = document.createElement("div");
  bullet.className = "bullet";
  const line = document.createElement("div");
  line.className = "line";

  const bulletline = document.createElement("div");
  bulletline.className = "flex-col-center";
  bulletline.appendChild(bullet);
  bulletline.appendChild(line);

  const box = document.createElement("div");
  box.className = "box";
  box.id = i++;
  // Define the onclick event handler properly
  box.onclick = function () {
    showPopup(this.id); // Passing the box's ID to the showPopup function
  };

  box.appendChild(bulletline);
  box.appendChild(divYearCard);

  listjobs.appendChild(box);
}
