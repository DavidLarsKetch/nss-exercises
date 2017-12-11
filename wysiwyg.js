const famousContinentals = [
  {
    expertise: "Epistemology",
    name: "Edmund Husserl",
    bio: "Mathematician turned philosopher, Husserl began the Phenomenological movement.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Edmund_Husserl_1910s.jpg",
    lifespan: {
      birth: 1859,
      death: 1938
    }
  },
  {
    expertise: "Ethics",
    name: "Max Scheler",
    bio: "A contemporary of Husserl's, Scheler envisioned a form of Phenomenology that both complemented and competed with Husserl's",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Scheler_max.jpg",
    lifespan: {
      birth: 1874,
      death: 1928
    }
  },
  {
    expertise: "Ontology",
    name: "Martin Heidegger",
    bio: "Husserl's protege, Heidegger took Phenomenology into uncharted territory.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Heidegger_4_%281960%29_cropped.jpg",
    lifespan: {
      birth: 1889,
      death: 1976
    }
  },
  {
    expertise: "Existentialism",
    name: "Jean-Paul Sartre",
    bio: "Often considered the seminal existentialist thinker, Sartre used Phenomenology to describe and discuss the existential and political situation of humankind.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Sartre_1967_crop.jpg",
    lifespan: {
      birth: 1905,
      death: 1980
    }
  },
  {
    expertise: "Epistemology",
    name: "Maurice Merleau-Ponty",
    bio: "A Frenchman, Merleau-Ponty applied Husserl's insights to a more psychologically informed perspective.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Maurice_Merleau-Ponty.jpg",
    lifespan: {
      birth: 1908,
      death: 1961
    }
  }
];

const printPhilosophers = arr => {
  const target = document.getElementById("container");
  arr.forEach(item => target.appendChild(createElms(item)));
  addListeners();
}

const createElms = data => {
  const wrapper = document.createElement("div");
  wrapper.id = data.name.toLowerCase().match(/\w+$/);
  wrapper.className = "philosopher";

  const header = document.createElement("h3");
  header.className = "philosopher-head";
  const headerTextNode = document.createTextNode(`${data.name}, Expertise: ${data.expertise}`);
  header.appendChild(headerTextNode);
  wrapper.appendChild(header);

  const body = document.createElement("div");
  body.className = "philosopher-body";
  const bioElm = document.createElement("div");
  const bioTextNode = document.createTextNode(`${data.bio}`);
  body.appendChild(bioElm);
  bioElm.appendChild(bioTextNode);

  const bodyImg = document.createElement("img");
  bodyImg.src = data.image;
  body.appendChild(bodyImg);
  wrapper.appendChild(body);

  const footer = document.createElement("h4");
  footer.className = "philosopher-foot";
  const footerTextNode = document.createTextNode(`${data.lifespan.birth} - ${data.lifespan.death}`);
  footer.appendChild(footerTextNode);
  wrapper.appendChild(footer);
  return wrapper;
}
printPhilosophers(famousContinentals);
