import { renderLocations } from "./parkAreas.js";
/*import functions from parkAreas, Guests, and Services to populate webpage


get container element by id & */

const container = document.getElementById("container");
const areas = renderLocations();
container.innerHTML = areas;
