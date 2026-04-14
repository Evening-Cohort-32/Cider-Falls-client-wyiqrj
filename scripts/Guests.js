//import getGuests from database

import { getGuests } from "./database.js"

//function that creates guestHTML that we can display on webpage

export const guestList = () => {
    const guests = getGuests()

    let guestHTML = "<ul>"

    for (const guest of guests) {
        guestHTML += `<li>${guest.name}</li>`
    }

    guestHTML += "</ul>"

    return guestHTML

}

