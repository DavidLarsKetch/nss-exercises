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
  },
  makeBodyMessage: function(cardElm) {
  },
  makeFooter: function(cardElm) {
  },
  assignID: function() {
  },
  addListener: function() {
  }
};

//Refactor this to link this object to cardMaker
const BirthdayCard = Object.create();
