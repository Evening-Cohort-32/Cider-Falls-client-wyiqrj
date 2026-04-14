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
