var nV = new Vue({
  el: '#app',
  data: {
    profesional: [
      {
        type: [
          { name: "Réalisation vidéos interactives",
          description: "Sur le click, prend un chemin.",
            projects: [
              {
                image: "images/Compass.png",
                name: "Société Compass, sur la RGPD",
                link:"http://elearning.sydo.fr/Compass_RGPD_Grand/"
              },
              {
                image: "images/tilkee.png",
                name: "Société Tilkee",
                link:"https://www.tilkee.fr/presentation-video"
              }
            ]
          },
          { name: "Accompagnement jeux pédagogiques",
          description: "Création de petit jeux sur mesure.",
            projects: [
              {
                image: "images/tinder.png",
                name: "Ipsen",
                link: "http://elearning.sydo.fr/papi/"
              },
              {
                image: "images/papi.png",
                name: "Ipsen - premier essai"
              },
              {
                image: "images/ruscus.png",
                name: "Pierre Fabre",
                link:"http://elearning.sydo.fr/pierre_fabre/"
              },
              {
                image: "images/capsule.png",
                name: "Capsule pédagogique, projet interne",
                link:"http://elearning.sydo.fr/Capsule_pedagogique/"
              }
            ]
          },
          { name: "Coopération sur l’adaptation d’une raspberry Pi",
          description: "Mise en place des différents serveurs",
          description2: "Intéractions:",
            projects: [
              {
                image: "images/Compass.png",
                name: "Casse-brick"
              },
              {
                image: "images/tilkee.png",
                name: "Quiz"
              },
              {
                image: "images/tilkee.png",
                name: "Sondage"
              },
              {
                image: "images/tilkee.png",
                name: "Nuage de mots"
              }
            ]
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

 console.log(nV.profesional[0].type[0].projects)
