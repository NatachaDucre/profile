var nV = new Vue({
  el: '#app',
  data: {
    profesional: [
      {
        type: [
          { name: "Réalisation vidéos interactives",
            projects: [
              {
                image: "images/walk.jpg",
                name: "Société Compass, sur la RGPD"
              },
              {
                image: "images/walk.jpg",
                name: "Société Tilkee",
                link:"https://www.tilkee.fr/presentation-video"
              }
            ],
            description: "Sur le click, prend un chemin.",
          },
          { name: "Réalisation vidéos interactives",
            projects: [
              {
                image: "images/walk.jpg",
                name: "Société Compass, sur la RGPD"
              },
              {
                image: "images/walk.jpg",
                name: "Société Tilkee",
                link:"https://www.tilkee.fr/presentation-video"
              }
            ],
            description: "Sur le click, prend un chemin.",
          },
        ],
      }
    ],
    myProjects: [
      {image: "images/walk.jpg", title: "TRAFIC DE DOGS", date: "Novembre 2017", description: "Site de prise en charge des animaux sur le modèle d'Airbnb. Travail en équipe réalisé en 5 jour.", link:"http://traficdedogs.herokuapp.com/"},
      {image: "images/lovify.png", title: "LOVIFY", date: "Decembre 2017", description: "Site de rencontre. Et si vous laissiez vos goûts musicaux guider vos rencontres ?\n", link:"http://www.lovify.top/"},
      {image: "images/challenge.png", title: "CHALLENGE TOGETHER", date: "2017", description: "Application de défs collectifs pour oser sortir de nos habitudes et réduire notre impact sur l'environnement.", link:"http://www.lovify.top/"},
    ]
  }
});

 console.log(nV.profesional[0].type)
