//import getGuests from database

import { getGuests, getLocations } from "./database.js";

//function that creates guestHTML that we can display on webpage

export const guestList = () => {
  const guestsArray = getGuests();
  const locationsArray = getLocations();

  let park = "";

  let guestHTML = "<ul>";

  for (const guest of guestsArray) {
    for (const location of locationsArray) {
      if (guest.parkId === location.id) {
        park = location.name;
      }
    }
    guestHTML += `<li data-type="guest" data-parkId="${guest.parkId}" data-name="${guest.name}" id="${guest.id}">${guest.name} (${park})</li>`;
  }

  guestHTML += `</ul>
  <form id="guestForm">
  <label for="guests">Choose guest name: </label>
  <select name="guests" id="guests">`;

  for (const guest of guestsArray) {
    guestHTML += `<option value="${guest.id}">${guest.name}</option>`;
  }

  guestHTML += `</select> <br><br>
  <label for="locations">Choose location:</label>
  <select name="locations" id="locations">`;

  for (const location of locationsArray) {
    guestHTML += `<option value="${location.id}">${location.name}</option>`;
  }

  guestHTML += `</select><input type="submit" value="Submit" id="submit_button" data-type="submit">
  </form>`;

  return guestHTML;
};

let submitButton = document.getElementById("submit_button");

document.addEventListener("click", (clickEvent) => {
  clickEvent.preventDefault();
  let clickTarget = clickEvent.target;
  const guestForm = document.getElementById("guestForm");
  let guestsArray = getGuests();
  let locationsArray = getLocations();

  if (clickTarget.dataset.type === "submit") {
    window.alert("Guest location changed.");
    const data = new FormData(guestForm);
    const values = Object.fromEntries(data.entries());
    let guestIndex = parseInt(values.guests) - 1;
    let locationIndex = parseInt(values.locations) - 1;

    let guestObject = guestsArray[guestIndex];
    let locationObject = locationsArray[locationIndex];
    let guestListElement = document.getElementById(`${values.guests}`);

    guestListElement.innerHTML = `${guestObject.name} (${locationObject.name})`;

    console.log(database.guests[guestIndex].parkId);
    console.log(values.locations);
  }
});
