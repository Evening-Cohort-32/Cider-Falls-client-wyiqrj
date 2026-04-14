import { renderLocations } from "./parkAreas.js";
import { listedServices } from "./Services.js";
import { guestList } from "./Guests.js";
/*import functions from parkAreas, Guests, and Services to populate webpage


get container element by id & */
const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>Cider Falls</h1>
<article class="services">
    <h2>Park Services:</h2>
    ${listedServices()}
</article>
<article class="details">
    <section class="detail--column list details__areas">
        ${renderLocations()}
    </section>
</article>
<article class="guests">
    <h3>Current Guests</h3>
    ${guestList}
</article>
`;

mainContainer.innerHTML = applicationHTML;

//const container = document.getElementById("container");
//const areas = renderLocations();
//container.innerHTML = areas;
