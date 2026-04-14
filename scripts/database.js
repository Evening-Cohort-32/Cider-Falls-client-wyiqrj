const database = {
  guests: [
    { id: 1, parkId: 5, name: "Alice Johnson" },
    { id: 2, parkId: 3, name: "James Smith" },
    { id: 3, parkId: 6, name: "Sophia Williams" },
    { id: 4, parkId: 2, name: "Michael Brown" },
    { id: 5, parkId: 5, name: "Emma Davis" },
    { id: 6, parkId: 4, name: "David Wilson" },
  ],
  locations: [
    {
      id: 1,
      serviceId: [1, 2, 3],
      name: "Chamfort River",
      location: "northeast",
    },
    {
      id: 2,
      serviceId: [4, 5, 6],
      name: "Lost Wolf Hiking Trail",
      location: "north",
    },
    { id: 3, serviceId: [5, 7, 8, 9], name: "Lodge", location: "northwest" },
    { id: 4, serviceId: [3, 4], name: "Gander River", location: "southwest" },
    { id: 5, serviceId: [7, 8, 9], name: "Campgrounds", location: "southern" },
    {
      id: 6,
      serviceId: [4, 5, 10],
      name: "Pine Bluff Trails",
      location: "southeast",
    },
  ],
  services: [
    { id: 1, name: "rafting" },
    { id: 2, name: "canoeing" },
    { id: 3, name: "fishing" },
    { id: 4, name: "hiking" },
    { id: 5, name: "picnicking" },
    { id: 6, name: "rock climbing" },
    { id: 7, name: "lodging" },
    { id: 8, name: "parking" },
    { id: 9, name: "information" },
    { id: 10, name: "zip lines" },
  ],
  locationServices: [
    {
      locationId: 1,
      locationName: "Chamfort River",
      serviceId: 1,
      serviceName: "rafting",
    },
    {
      locationId: 1,
      locationName: "Chamfort River",
      serviceId: 2,
      serviceName: "canoeing",
    },
    {
      locationId: 1,
      locationName: "Chamfort River",
      serviceId: 3,
      serviceName: "fishing",
    },
    {
      locationId: 2,
      locationName: "Lost Wolf Hiking Trail",
      serviceId: 4,
      serviceName: "hiking",
    },
    {
      locationId: 2,
      locationName: "Lost Wolf Hiking Trail",
      serviceId: 5,
      serviceName: "picnicking",
    },
    {
      locationId: 2,
      locationName: "Lost Wolf Hiking Trail",
      serviceId: 6,
      serviceName: "rock climbing",
    },
    {
      locationId: 3,
      locationName: "Lodge",
      serviceId: 5,
      serviceName: "picnicking",
    },
    {
      locationId: 3,
      locationName: "Lodge",
      serviceId: 7,
      serviceName: "lodging",
    },
    {
      locationId: 3,
      locationName: "Lodge",
      serviceId: 8,
      serviceName: "parking",
    },
    {
      locationId: 3,
      locationName: "Lodge",
      serviceId: 9,
      serviceName: "information",
    },
    {
      locationId: 4,
      locationName: "Gander River",
      serviceId: 3,
      serviceName: "fishing",
    },
    {
      locationId: 4,
      locationName: "Gander River",
      serviceId: 4,
      serviceName: "hiking",
    },
    {
      locationId: 5,
      locationName: "Campgrounds",
      serviceId: 7,
      serviceName: "lodging",
    },
    {
      locationId: 5,
      locationName: "Campgrounds",
      serviceId: 8,
      serviceName: "parking",
    },
    {
      locationId: 5,
      locationName: "Campgrounds",
      serviceId: 9,
      serviceName: "information",
    },
    {
      locationId: 6,
      locationName: "Pine Bluff Trails",
      serviceId: 4,
      serviceName: "hiking",
    },
    {
      locationId: 6,
      locationName: "Pine Bluff Trails",
      serviceId: 5,
      serviceName: "picnicking",
    },
    {
      locationId: 6,
      locationName: "Pine Bluff Trails",
      serviceId: 10,
      serviceName: "zip lines",
    },
  ],
};

//functions to getAreas, getServices, getGuests - return structured clone
export const getGuests = () => {
  return structuredClone(database.guests);
};
export const getLocations = () => {
  return structuredClone(database.locations);
};
export const getServices = () => {
  return structuredClone(database.services);
};
export const getLocationServices = () => {
  return structuredClone(database.locationServices);
};
