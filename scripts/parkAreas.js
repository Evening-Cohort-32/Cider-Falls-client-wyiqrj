import { getLocations } from "./database.js";
import { getServices } from "./database.js";
//import getAreas function from database

//function that creates areasHTML that we can display on webpage
export const renderLocations = () => {
  let locationsHTML = "";
  let servicesString = "";
  let locations = getLocations();
  let services = getServices();

  for (const location of locations) {
    locationsHTML += `<div class="locationCard"><h3>${location.name}</h3><p>Services: ${servicesString}</p></div>`;
  }
  return locationsHTML;

  // services a location provides is found in locations.serviceId array.
  //for item of serviceId array, if item === services.id, servicesString += `services[${services.id}-1].name`
};
//event listener/function that says displays how many guests are in area when area is clicked
