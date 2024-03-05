const project = "assets/imgs/project.jpg";
const html = "assets/imgs/HTML5_logo.svg";
const css = "assets/imgs/CSS_logo.svg";
const js = "assets/imgs/javascript_logo.svg";
const angular = "assets/imgs/angular_logo.svg";
const github = "assets/imgs/github_logo.svg";
const symfony = "assets/imgs/symfony_icon.svg";
const linkedin = "assets/imgs/LinkedIn_icon.svg";
const email = "assets/imgs/email.svg"

const linkClick = document.getElementsByClassName("link");
const divProjet = document.getElementById("article-projet");
let dataProject = [{
    "id": 1,
    "titre": " Mon projet 1",
    "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium. 
  Error iste, vel dolorum ipsa minus nihil voluptatem neque quibusdam ducimus, accusamus 
  ipsum atque assumenda, officia consequatur? Recusandae, porro quibusdam!`,
    "image": "assets/imgs/project.jpg",
    "langages": [html, css, js, symfony, angular, github],
    "page": "assets/imgs/email.svg"
  },
  {
    "id": 2,
    "titre": " Mon projet 2",
    "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium. 
  Error iste, vel dolorum ipsa minus nihil voluptatem neque quibusdam ducimus, accusamus 
  ipsum atque assumenda, officia consequatur? Recusandae, porro quibusdam!`,
    "image": "assets/imgs/project.jpg",
    "langages": [html, css, js],
    "page": "assets/imgs/email.svg"
  },
  {
    "id": 2,
    "titre": " Mon projet 2",
    "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium. 
  Error iste, vel dolorum ipsa minus nihil voluptatem neque quibusdam ducimus, accusamus 
  ipsum atque assumenda, officia consequatur? Recusandae, porro quibusdam!`,
    "image": "assets/imgs/project.jpg",
    "langages": [html, css, js],
    "page": "assets/imgs/email.svg"
  },
  {
    "id": 2,
    "titre": " Mon projet 2",
    "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium. 
  Error iste, vel dolorum ipsa minus nihil voluptatem neque quibusdam ducimus, accusamus 
  ipsum atque assumenda, officia consequatur? Recusandae, porro quibusdam!`,
    "image": "assets/imgs/project.jpg",
    "langages": [html, css, js],
    "page": "assets/imgs/email.svg"
  },
  {
    "id": 2,
    "titre": " Mon projet 2",
    "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium. 
  Error iste, vel dolorum ipsa minus nihil voluptatem neque quibusdam ducimus, accusamus 
  ipsum atque assumenda, officia consequatur? Recusandae, porro quibusdam!`,
    "image": "assets/imgs/project.jpg",
    "langages": [html, css, js],
    "page": "assets/imgs/email.svg"
  },
  {
    "id": 2,
    "titre": " Mon projet 2",
    "description": `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, accusantium. 
  Error iste, vel dolorum ipsa minus nihil voluptatem neque quibusdam ducimus, accusamus 
  ipsum atque assumenda, officia consequatur? Recusandae, porro quibusdam!`,
    "image": "assets/imgs/project.jpg",
    "langages": [html, css, js],
    "page": "assets/imgs/email.svg"
  }
]
// Parcours de chaque clé dans le JSON et création de la liste des technologies


for (const project in dataProject) {
  const cardProject = document.createElement("article");
  cardProject.classList.add("card-projet");
  // title
  const titleProject = document.createElement("h3");
  titleProject.textContent = dataProject[project].titre;
  console.log(titleProject);
  // description
  const descriptionProject = document.createElement("p");
  descriptionProject.textContent = dataProject[project].description;
  // link
  const pageProject = document.createElement("a");
  pageProject.href = dataProject[project].page;
  pageProject.textContent = "Voir le projet";
  //   image
  const imgProject = document.createElement("img");
  imgProject.src = dataProject[project].image;
  imgProject.alt = dataProject[project].titre;
  //   technologies
  const langages = document.createElement("ul");

  dataProject[project].langages.forEach(
    function (tech) {
      //   image
      const item = document.createElement("li");
      const imgProject = document.createElement("img");
      imgProject.classList.add("logo-techno-card");
      imgProject.src = tech;
      imgProject.alt = dataProject[project].titre;
      item.appendChild(imgProject);
      langages.appendChild(item);
    }
  )

  cardProject.appendChild(imgProject);
  cardProject.appendChild(titleProject);
  cardProject.appendChild(descriptionProject);
  cardProject.appendChild(langages);
  cardProject.appendChild(pageProject);
  divProjet.appendChild(cardProject);
}