const CardMaker = {
  makeCard: function() {
    const container = document.getElementById("container");
    const cardElm = document.createElement("div");

    cardElm.className = "card";
    cardElm.id = this.assignID();
    container.appendChild(cardElm);

    this.makeFrontMessage(cardElm);
    this.makeBodyMessage(cardElm);
    this.makeFooter(cardElm);
    this.addListener();
  },
  makeFrontMessage: function(cardElm) {
    const titleWrapper = document.createElement("div");
    const titleElm = document.createElement("h2");
    const titleNode = document.createTextNode(this.titleString);

    titleWrapper.className = "titleWrapper"
    titleElm.className = "titleElm";


    cardElm.appendChild(titleWrapper);
    titleWrapper.appendChild(titleElm);
    titleElm.appendChild(titleNode);
  },
  makeBodyMessage: function(cardElm) {
    const bodyWrapper = document.createElement("div");
    const bodyCopyElm = document.createElement("p");
    const bodyCopyNode = document.createTextNode(this.bodyCopy);

    bodyWrapper.className = "bodyWrapper";
    bodyCopyElm.className = "bodyCopy";

    cardElm.appendChild(bodyWrapper);
    bodyWrapper.appendChild(bodyCopyElm);
    bodyCopyElm.appendChild(bodyCopyNode);
  },
  makeFooter: function(cardElm) {
    const footerWrapper = document.createElement("div");
    const footerTextElm = document.createElement("p");
    const footerTextNode = document.createTextNode(`DLK Card Co. - Nashville - 2017`);

    footerWrapper.className = "footerWrapper";
    footerTextElm.className = "footerText";

    cardElm.appendChild(footerWrapper);
    footerWrapper.appendChild(footerTextElm);
    footerTextElm.appendChild(footerTextNode);
  },
  assignID: function() {
    let id = "Z";
    for (var i = 0; i < 5; i++) {
      num = Math.round(Math.random()*9);
      id += num.toString();
    }
    this.id = id;
    return id;
  },
  addListener: function() {
  }
};

//Refactor this to link this object to cardMaker
const BirthdayCard = Object.create();
