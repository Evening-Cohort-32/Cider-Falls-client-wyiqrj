import { getLocations, getLocationServices, getGuests } from "./database.js";

export const renderLocations = () => {
  let locationsHTML = `<h2>Areas</h2><section id="locations">`;
  let servicesString = "";
  const locations = getLocations();
  const locationServices = getLocationServices();

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

document.addEventListener("click", (clickEvent) => {
  const clickTarget = clickEvent.target;
  const guests = getGuests();
  let guestNumber = 0;
  if (clickTarget.dataset.type === "location") {
    for (const guest of guests) {
      if (clickTarget.dataset.location_id === guest.parkId) {
        guestNumber++;
      }
    }
    window.alert(`There are ${guestNumber} guests in this area.`);
  }
});
//event listener/function that says displays how many guests are in area when area is clicked
