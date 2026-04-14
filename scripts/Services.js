//import get services function from database
import { getServices, getLocations } from "./database.js"

const services = getServices()
const locations = getLocations()
//Event listener/function to match service to the parks
document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        const serviceId = clickTarget.dataset.id
        const serviceName = clickTarget.dataset.name

        if (serviceId) {
            //Find parks that provide the clicked service
            const matchingLocations = locations.filter(location =>
                location.serviceId.includes(parseInt(serviceId))
            )
            //Generate a message with the names of the matching locations
        if (matchingLocations.length > 0) {
            const locationNames = matchingLocations.map(location => location.name).join(", ");
                window.alert(`${serviceName} is provided in the following parks: ${locationNames}`)
            }
        }
    }
)

//function to create servicesHTML to display on webpage
export const listedServices = () => {
    let servicesHTML = "Park services: "
    
    const serviceLinks = services.map(service => 
        `<span data-id="${service.id}" data-name="${service.name}">${service.name}</span>`
    )
    
    servicesHTML += serviceLinks.join(", ")

    return `<p>${servicesHTML}</p>`
}