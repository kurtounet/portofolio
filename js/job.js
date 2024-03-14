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

function showUl(id) {
  console.log(id);
  const box = document.getElementById(id);
  const ulskills = box.getElementsByTagName("ul")[0];

  if (ulskills.style.display == "none") {
    ulskills.style.display = "flex";
  } else {
    ulskills.style.display = "none";
  }
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

  const imgArrow = document.createElement("img");
  imgArrow.src = "assets/svg/arrow-job.svg";

  const divYearCard = document.createElement("div");
  divYearCard.className = "yearCard";

  let ulskills = document.createElement("ul");
  ulskills.id = "ul_" + i;
  ulskills.className = "ulskill";
  ulskills.id = "ulskill_" + String(i);

  for (const sk of dataJob[job].skill) {
    const liskills = document.createElement("li");
    liskills.textContent = sk;
    ulskills.appendChild(liskills);
    console.log(sk);
  }
  const divBox = document.createElement("div");
  divBox.className = "btnCompagny";

  const btnBox = document.createElement("button");
  btnBox.id = "btn_" + i;
  btnBox.onclick = function () {
    //const box = document.getElementById("box_" + i);
    const ulskills = document.getElementById("ul_" + i);

    if (ulskills.style.display == "none") {
      ulskills.style.display = "flex";
    } else {
      ulskills.style.display = "none";
    }
  };

  divBox.appendChild(company);
  divBox.appendChild(btnBox);

  card.appendChild(poste);
  card.appendChild(divBox);
  card.appendChild(ulskills);

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
  box.id = "box_" + i;

  box.appendChild(bulletline);
  box.appendChild(divYearCard);

  listjobs.appendChild(box);
  i = i + 1;
}
