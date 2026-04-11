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
    { id: 1, serviceId: [], name: "Chamfort River", location: "northeast" },
    { id: 2, serviceId: [], name: "Lost Wolf Hiking Trail", location: "north" },
    { id: 3, serviceId: [], name: "Lodge", location: "northwest" },
    { id: 4, serviceId: [], name: "Gander River", location: "southwest" },
    { id: 5, serviceId: [], name: "Campgrounds", location: "southern" },
    { id: 6, serviceId: [], name: "Pine Bluff Trails", location: "southeast" },
  ],
};

//functions to getAreas, getServices, getGuests - return structured clone
