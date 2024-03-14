"use strict";

var dataJob = [{
  poste: "DEVELOPPEMENT WEB ET WEB MOBILE",
  company: "Humain BOOSTER",
  year: "2023-2024",
  skill: ["HTML5", "CSS3", "JavaScript", "Angular", "Design Responsif", "API RESTful", "Gestion de version (Git)", "Méthodologies Agiles"]
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
  skill: ["Conception de circuits", "Microcontrôleurs", "Disposition de PCB", "Traitement de signal", "Soudage", "Dépannage", "Logiciels CAO (AutoCAD)", "Utilisation d'oscilloscope"]
}, {
  poste: "BTS SYSTEME ELECTRONIQUE",
  company: "E.Branly",
  year: "2006-2008",
  skill: ["Conception de circuits", "Microcontrôleurs", "Disposition de PCB", "Traitement de signal", "Soudage", "Dépannage", "Logiciels CAO (AutoCAD)", "Utilisation d'oscilloscope"]
}];

function showUl(id) {
  console.log(id);
  var box = document.getElementById(id);
  var ulskills = box.getElementsByTagName("ul")[0];

  if (ulskills.style.display == "none") {
    ulskills.style.display = "flex";
  } else {
    ulskills.style.display = "none";
  }
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
  var imgArrow = document.createElement("img");
  imgArrow.src = "assets/svg/arrow-job.svg";
  var divYearCard = document.createElement("div");
  divYearCard.className = "yearCard";
  var ulskills = document.createElement("ul");
  ulskills.id = "ul_" + i;
  ulskills.className = "ulskill";
  ulskills.id = "ulskill_" + String(i);
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

  var divBox = document.createElement("div");
  divBox.className = "btnCompagny";
  var btnBox = document.createElement("button");
  btnBox.id = "btn_" + i;

  btnBox.onclick = function () {
    //const box = document.getElementById("box_" + i);
    var ulskills = document.getElementById("ul_" + i);

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
  box.id = "box_" + i;
  box.appendChild(bulletline);
  box.appendChild(divYearCard);
  listjobs.appendChild(box);
  i = i + 1;
}