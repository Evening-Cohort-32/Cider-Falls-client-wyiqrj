import { renderLocations } from "./parkAreas.js";
import { listedServices } from "./Services.js";
import { guestList } from "./Guests.js";
/*import functions from parkAreas, Guests, and Services to populate webpage


get container element by id & */
const mainContainer = document.querySelector("#container");

const applicationHTML = `
<header class="header">
    <h1>Cider Falls</h1>
    <img src="https://logo-icons.com/cdn/shop/files/365-logo-1712247272.204color-8A9A5B.svg?v=1712759864&width=416" alt="Company logo" class="logo"></img>
</header>

<article class="services">
    ${listedServices()}
</article>

<h2>Areas</h2>
<section id="locationsAndGuests">  
    ${renderLocations()}

    <article class="guests">
        <h2>Current Guests</h2>
        ${guestList()}
    </article>
</section>
`;

mainContainer.innerHTML = applicationHTML;

//const container = document.getElementById("container");
//const areas = renderLocations();
//container.innerHTML = areas;
