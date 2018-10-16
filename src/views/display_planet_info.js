const PubSub = require('../helpers/pub_sub.js');

const DisplayPlanetInfo = function(container){
  this.container = container;
};

DisplayPlanetInfo.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:planet-details', (event) => {
    const planet = event.detail;
    this.render(planet);
  })
};

DisplayPlanetInfo.prototype.gravity_fn = function (planet) {
  if(planet.gravity < 1){
    return 'Low Gravity! Weeee!'
  }
  else if (planet.gravity === 1) {
    return 'Earth gravity...duh!'
  }else{
    return 'High Gravity!!! Waaaaow!'
  }
};

DisplayPlanetInfo.prototype.render = function (planet) {
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `${planet.name} has ${planet.moons} moons. Neato! Guess what...${planet.name} has ${this.gravity_fn(planet)} `;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);

  const planetImage = document.createElement('img');
  planetImage.src = planet.image;
  planetImage.alt = `${planet.name} image`;
  planetImage.classList.add('planet-image');
  this.container.appendChild(planetImage);
};

module.exports = DisplayPlanetInfo;
