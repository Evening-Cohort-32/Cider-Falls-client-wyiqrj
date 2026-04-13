//import get services function from database
import { getServices, getLocations } from "./database.js"

const services = getServices()
const locations = getLocations()
//Event listener/function to match service to the parks
document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        const servicesId = clickTarget.dataset.id

        for (const service of services) {
            if (service.id === parseInt(serviceId)) {
                window.alert(`${servicesId} is provided in the folllowing parks: ${location.name}`)
            }
        }
    }
)

//function to create servicesHTML to display on webpage
export const listedServices = () => {
    let servicesHTML = "<ul>"

    for (const service of services) {
        servicesHTML += `<li data-id="${services.id}" data-name="${services.name}">${service.name}</li>`
    }

    servicesHTML += "</ul>"

    return servicesHTML
}