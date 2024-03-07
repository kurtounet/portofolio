"use strict";

var linkClick = document.getElementsByClassName("link");
var divProjet = document.getElementById("article-projet");
var dataProject = [{
  id: 1,
  titre: " MeatBio",
  description: "Site Web pour une boucherie Bio, lors de ma validation de web static",
  image: "assets/imgs/project.jpg",
  langages: [html, css, js],
  page: "https://kurtounet.github.io/interoWebStatic/"
}, {
  id: 2,
  titre: " Mon projet 2",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium. \n  Error iste, vel dolorum ipsa minus nihil voluptatem neque quibusdam ducimus, accusamus \n  ipsum atque assumenda, officia consequatur? Recusandae, porro quibusdam!",
  image: "assets/imgs/project.jpg",
  langages: [html, css, js],
  page: "assets/imgs/email.svg"
}, {
  id: 3,
  titre: " Mon projet 3",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium. \n  Error iste, vel dolorum ipsa minus nihil voluptatem neque quibusdam ducimus, accusamus \n  ipsum atque assumenda, officia consequatur? Recusandae, porro quibusdam!",
  image: "assets/imgs/project.jpg",
  langages: [html, css, js],
  page: "assets/imgs/email.svg"
}, {
  id: 4,
  titre: " Mon projet 4",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium. \n  Error iste, vel dolorum ipsa minus nihil voluptatem neque quibusdam ducimus, accusamus \n  ipsum atque assumenda, officia consequatur? Recusandae, porro quibusdam!",
  image: "assets/imgs/project.jpg",
  langages: [html, css, js],
  page: "assets/imgs/email.svg"
}, {
  id: 5,
  titre: " Mon projet 5",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium. \n  Error iste, vel dolorum ipsa minus nihil voluptatem neque quibusdam ducimus, accusamus \n  ipsum atque assumenda, officia consequatur? Recusandae, porro quibusdam!",
  image: "assets/imgs/project.jpg",
  langages: [html, css, js],
  page: "assets/imgs/email.svg"
}, {
  id: 6,
  titre: " Mon projet 6",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium. \n  Error iste, vel dolorum ipsa minus nihil voluptatem neque quibusdam ducimus, accusamus \n  ipsum atque assumenda, officia consequatur? Recusandae, porro quibusdam!",
  image: "assets/imgs/project.jpg",
  langages: [html, css, js],
  page: "assets/imgs/email.svg"
}]; // Parcours de chaque clé dans le JSON et création de la liste des technologies

var _loop = function _loop(project) {
  var cardProject = document.createElement("article");
  cardProject.classList.add("card-projet"); // title

  var titleProject = document.createElement("h3");
  titleProject.textContent = dataProject[project].titre;
  console.log(titleProject); // description

  var descriptionProject = document.createElement("p");
  descriptionProject.textContent = dataProject[project].description; // link

  var pageProject = document.createElement("a");
  pageProject.href = dataProject[project].page;
  pageProject.textContent = "Voir le projet"; //   image

  var imgProject = document.createElement("img");
  imgProject.setAttribute("src", dataProject[project].page);
  imgProject.src = dataProject[project].image;
  imgProject.alt = dataProject[project].titre; //   technologies

  var langages = document.createElement("ul");
  dataProject[project].langages.forEach(function (tech) {
    //   image
    var item = document.createElement("li");
    var imgProject = document.createElement("img");
    imgProject.classList.add("logo-techno-card");
    imgProject.src = tech;
    imgProject.alt = dataProject[project].titre;
    item.appendChild(imgProject);
    langages.appendChild(item);
  });
  cardProject.appendChild(imgProject);
  cardProject.appendChild(titleProject);
  cardProject.appendChild(descriptionProject);
  cardProject.appendChild(langages);
  cardProject.appendChild(pageProject);
  divProjet.appendChild(cardProject);
};

for (var project in dataProject) {
  _loop(project);
}