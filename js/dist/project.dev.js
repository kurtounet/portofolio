"use strict";

var project = "assets/imgs/project.jpg";
var html = "assets/imgs/HTML5_logo.svg";
var css = "assets/imgs/CSS_logo.svg";
var js = "assets/imgs/javascript_logo.svg";
var angular = "assets/imgs/angular_logo.svg";
var github = "assets/imgs/github_logo.svg";
var symfony = "assets/imgs/symfony_icon.svg";
var linkedin = "assets/imgs/LinkedIn_icon.svg";
var email = "assets/imgs/email.svg";
var linkClick = document.getElementsByClassName("link");
var divProjet = document.getElementById("article-projet");
var dataProject = [{
  "id": 1,
  "titre": " Mon projet 1",
  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium. \n  Error iste, vel dolorum ipsa minus nihil voluptatem neque quibusdam ducimus, accusamus \n  ipsum atque assumenda, officia consequatur? Recusandae, porro quibusdam!",
  "image": "assets/imgs/project.jpg",
  "langages": [html, css, js, symfony, angular, github],
  "page": "assets/imgs/email.svg"
}, {
  "id": 2,
  "titre": " Mon projet 2",
  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium. \n  Error iste, vel dolorum ipsa minus nihil voluptatem neque quibusdam ducimus, accusamus \n  ipsum atque assumenda, officia consequatur? Recusandae, porro quibusdam!",
  "image": "assets/imgs/project.jpg",
  "langages": [html, css, js],
  "page": "assets/imgs/email.svg"
}, {
  "id": 2,
  "titre": " Mon projet 2",
  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium. \n  Error iste, vel dolorum ipsa minus nihil voluptatem neque quibusdam ducimus, accusamus \n  ipsum atque assumenda, officia consequatur? Recusandae, porro quibusdam!",
  "image": "assets/imgs/project.jpg",
  "langages": [html, css, js],
  "page": "assets/imgs/email.svg"
}, {
  "id": 2,
  "titre": " Mon projet 2",
  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium. \n  Error iste, vel dolorum ipsa minus nihil voluptatem neque quibusdam ducimus, accusamus \n  ipsum atque assumenda, officia consequatur? Recusandae, porro quibusdam!",
  "image": "assets/imgs/project.jpg",
  "langages": [html, css, js],
  "page": "assets/imgs/email.svg"
}, {
  "id": 2,
  "titre": " Mon projet 2",
  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium. \n  Error iste, vel dolorum ipsa minus nihil voluptatem neque quibusdam ducimus, accusamus \n  ipsum atque assumenda, officia consequatur? Recusandae, porro quibusdam!",
  "image": "assets/imgs/project.jpg",
  "langages": [html, css, js],
  "page": "assets/imgs/email.svg"
}, {
  "id": 2,
  "titre": " Mon projet 2",
  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium. \n  Error iste, vel dolorum ipsa minus nihil voluptatem neque quibusdam ducimus, accusamus \n  ipsum atque assumenda, officia consequatur? Recusandae, porro quibusdam!",
  "image": "assets/imgs/project.jpg",
  "langages": [html, css, js],
  "page": "assets/imgs/email.svg"
}]; // Parcours de chaque clé dans le JSON et création de la liste des technologies

var _loop = function _loop(_project) {
  var cardProject = document.createElement("article");
  cardProject.classList.add("card-projet"); // title

  var titleProject = document.createElement("h3");
  titleProject.textContent = dataProject[_project].titre;
  console.log(titleProject); // description

  var descriptionProject = document.createElement("p");
  descriptionProject.textContent = dataProject[_project].description; // link

  var pageProject = document.createElement("a");
  pageProject.href = dataProject[_project].page;
  pageProject.textContent = "Voir le projet"; //   image

  var imgProject = document.createElement("img");
  imgProject.src = dataProject[_project].image;
  imgProject.alt = dataProject[_project].titre; //   technologies

  var langages = document.createElement("ul");

  dataProject[_project].langages.forEach(function (tech) {
    //   image
    var item = document.createElement("li");
    var imgProject = document.createElement("img");
    imgProject.classList.add("logo-techno-card");
    imgProject.src = tech;
    imgProject.alt = dataProject[_project].titre;
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

for (var _project in dataProject) {
  _loop(_project);
}