import { getLocations } from "./database.js";
import { getLocationServices } from "./database.js";

export const renderLocations = () => {
  let locationsHTML = `<h2>Areas</h2><section id="locations">`;
  let servicesString = "";
  let locations = getLocations();
  let locationServices = getLocationServices();

  for (const location of locations) {
    servicesString = "";
    for (const locationService of locationServices) {
      if (location.id === locationService.locationId) {
        servicesString += `${locationService.serviceName}, `;
      }
    }
    locationsHTML += `<div class="locationCard"><h3 class="areaName" data-type="location" data-location_id="${location.id}">${location.name}</h3><p class="servicesText">Services: ${servicesString}</p></div>`;
  }
  locationsHTML += `</section>`;
  return locationsHTML;
};
//event listener/function that says displays how many guests are in area when area is clicked

