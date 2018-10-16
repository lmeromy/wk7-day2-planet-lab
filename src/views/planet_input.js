const PubSub = require('../helpers/pub_sub.js');

const PlanetInput = function (element) {
  this.element = element;

};

PlanetInput.prototype.bindEvents = function () {
  // console.log(this.element);
  PubSub.subscribe('SolarSystem:all-planets-ready', (event) => {
    const allPlanets = event.detail;

    for(let i = 0; i < allPlanets.length; i++){
      this.element[i].addEventListener('click', (event) => {
        // console.log('planet test:', i);
        PubSub.publish('PlanetInput:clicked-planet-index', i)
      })
    }
  });


};


module.exports = PlanetInput;
