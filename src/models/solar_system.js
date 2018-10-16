const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.publish('SolarSystem:all-planets-ready', this.planets);
  // console.log('What is this:', this.planets);

  PubSub.subscribe('PlanetInput:clicked-planet-index', (event) => {
    const selectedIndex = event.detail;
    this.publishPlanetDetails(selectedIndex);

    // console.log('from solar system:', selectedIndex);

  })
};

SolarSystem.prototype.publishPlanetDetails = function (planetIndex) {
  const selectedPlanet = this.planets[planetIndex];
  // console.log("planet is ", selectedPlanet)
  PubSub.publish('SolarSystem:planet-details', selectedPlanet);

};


module.exports = SolarSystem;
