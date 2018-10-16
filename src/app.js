const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetInput = require('./views/planet_input.js');
const DisplayPlanetInfo = require('./views/display_planet_info.js');


document.addEventListener('DOMContentLoaded', () => {

  const menuItems = document.querySelectorAll('li.planet-menu-item')
  const planetInput = new PlanetInput(menuItems);
  planetInput.bindEvents();

  const infoDiv = document.querySelector(".planet-details");
  const displayPlanetInfo = new DisplayPlanetInfo(infoDiv);
  displayPlanetInfo.bindEvents();


  const planetsDataModel = new SolarSystem(planetsData);
  // console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();




});
