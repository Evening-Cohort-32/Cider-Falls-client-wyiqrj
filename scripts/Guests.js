//import getGuests from database

import { getGuests } from "./database.js";
import { getLocations } from "./database.js";

//function that creates guestHTML that we can display on webpage

export const guestList = () => {
  const guests = getGuests();
  const locations = getLocations();

  let park = "";

  let guestHTML = "<ul>";

  for (const guest of guests) {
    for (const location of locations) {
      if (guest.parkId === location.id) {
        park = location.name;
      }
    }
    guestHTML += `<li data-type="guest" data-parkId="${guest.parkId}" data-name="${guest.name}">${guest.name} (${park})</li>`;
  }

  guestHTML += `</ul>
  <label for="guests">Choose guest name: </label>
  <select name="guests" id="guests">`;

  for (const guest of guests) {
    guestHTML += `<option value="${guest.name}">${guest.name}</option>`;
  }

  guestHTML += `</select> <br><br>
  <label for="locations">Choose location:</label>
  <select name="locations" id="locations">`;

  for (const location of locations) {
    guestHTML += `<option value="${location.id}">${location.name}</option>`;
  }

  guestHTML += `</select><input type="submit" value="Submit">`;

  return guestHTML;
};
