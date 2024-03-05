"use strict";

var dataJob = [{
  poste: "DEVELOPPEMENT WEB ET WEB MOBILE",
  company: "Humain BOOSTER",
  year: "2023-2024",
  skill: ["HTML5", "CSS3", "JavaScript", "Angular", "Design Responsif", "API RESTful", "Gestion de version (Git)",, "Méthodologies Agiles"]
}, {
  poste: "FACTEUR (INTERIM)",
  company: "La Poste",
  year: "2022-2023",
  skill: ["Écoute active", "Empathie", "Définition d'objectifs", "Analyse comportementale", "Résolution de conflits", "Techniques de communication", "Stratégies de motivation", "Planification du développement personnel"]
}, {
  poste: "AIDE A DOMICILE (INTERIM)",
  company: "Maxi Aide, ADMR",
  year: "2015-2022",
  skill: ["Écoute active", "Empathie", "Définition d'objectifs", "Analyse comportementale", "Résolution de conflits", "Techniques de communication", "Stratégies de motivation", "Planification du développement personnel"]
}, {
  poste: " FORMATION: PRATICIEN PNL",
  company: "Psynapse",
  year: "2014",
  skill: ["Écoute active", "Empathie", "Définition d'objectifs", "Analyse comportementale", "Résolution de conflits", "Techniques de communication", "Stratégies de motivation", "Planification du développement personnel"]
}, {
  poste: "FORMATION: HYPNOSE ERICKSONIENNE",
  company: "Psynapse",
  year: "2013",
  skill: ["Écoute active", "Empathie", "Définition d'objectifs", "Analyse comportementale", "Résolution de conflits", "Techniques de communication", "Stratégies de motivation", "Planification du développement personnel"]
}, {
  poste: "BRANCARDIER",
  company: "clinique du val d'ouest",
  year: "2010-2015",
  skill: ["Conception de circuits", "Microcontrôleurs", "Disposition de PCB", "Traitement de signal", "Soudage", "Dépannage", "Logiciels CAO (AutoCAD)", "Utilisation d'oscilloscope", "Conception d'alimentation électrique", "Protocoles de communication (I2C, SPI)"]
}, {
  poste: "BTS SYSTEME ELECTRONIQUE",
  company: "E.Branly",
  year: "2006-2008",
  skill: ["Conception de circuits", "Microcontrôleurs", "Disposition de PCB", "Traitement de signal", "Soudage", "Dépannage", "Logiciels CAO (AutoCAD)", "Utilisation d'oscilloscope", "Conception d'alimentation électrique", "Protocoles de communication (I2C, SPI)"]
}];

function showPopup(id) {
  var b = "box" + id;
  var box = document.getElementById(b);
  console.log(box); //box.classList.add("open-box");

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

var listjobs = document.getElementById("list-jobs");
var i = 0;

for (var job in dataJob) {
  var year = document.createElement("p");
  year.className = "year";
  year.textContent = dataJob[job].year;
  var card = document.createElement("div");
  card.className = "job-card";
  var poste = document.createElement("h3");
  poste.textContent = dataJob[job].poste;
  var company = document.createElement("p");
  company.textContent = dataJob[job].company;
  var divYearCard = document.createElement("div");
  divYearCard.className = "yearCard";
  var ulskills = document.createElement("ul");
  ulskills.className = "ulskill";
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = dataJob[job].skill[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var sk = _step.value;
      var liskills = document.createElement("li");
      liskills.textContent = sk;
      ulskills.appendChild(liskills);
      console.log(sk);
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

  card.appendChild(poste);
  card.appendChild(company);
  card.appendChild(ulskills);
  divYearCard.appendChild(year);
  divYearCard.appendChild(year);
  divYearCard.appendChild(year);
  divYearCard.appendChild(card);
  var bullet = document.createElement("div");
  bullet.className = "bullet";
  var line = document.createElement("div");
  line.className = "line";
  var bulletline = document.createElement("div");
  bulletline.className = "flex-col-center";
  bulletline.appendChild(bullet);
  bulletline.appendChild(line);
  var box = document.createElement("div");
  box.className = "box";
  box.id = i++; // Define the onclick event handler properly

  box.onclick = function () {
    showPopup(this.id); // Passing the box's ID to the showPopup function
  };

  box.appendChild(bulletline);
  box.appendChild(divYearCard);
  listjobs.appendChild(box);
}