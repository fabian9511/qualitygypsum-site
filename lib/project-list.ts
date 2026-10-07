// Completed jobs pulled from the QGS SubTrade portal (archived projects).
// No customer (GC) names on purpose. Residential jobs list the neighbourhood only: no homeowner
// names or street numbers, because these are people's homes.
// Owner's own house and direct private homeowner jobs are left out on purpose.

export type ListedProject = {
  name: string;
  type: string;
  area: string;
};

export const commercialProjects: ListedProject[] = [
  { name: "Walmart, 130 Avenue SE", type: "Retail", area: "SE Calgary" },
  { name: "Walmart, Shawville", type: "Retail", area: "SE Calgary" },
  { name: "Bulk Barn, Country Hills", type: "Retail", area: "NE Calgary" },
  { name: "Pet Valu, Chestermere", type: "Retail", area: "Chestermere" },
  { name: "Inspired Cannabis, Lethbridge", type: "Retail", area: "Lethbridge" },
  { name: "Inspired Cannabis, Strathmore", type: "Retail", area: "Strathmore" },
  { name: "Cannabis store, Cochrane", type: "Retail", area: "Cochrane" },
  { name: "Mary Brown's, Medicine Hat", type: "Restaurant", area: "Medicine Hat" },
  { name: "Tim Hortons, Homestead", type: "Restaurant", area: "NE Calgary" },
  { name: "Red's Diner, Seton", type: "Restaurant", area: "SE Calgary" },
  { name: "Hello Nori, Bridgeland", type: "Restaurant", area: "NE Calgary" },
  { name: "Burger King, Cochrane", type: "Restaurant", area: "Cochrane" },
  { name: "West Springs Landing", type: "Commercial", area: "SW Calgary" },
  { name: "130 Avenue SE retail", type: "Commercial", area: "SE Calgary" },
  { name: "Avalon Seton", type: "Mixed use", area: "SE Calgary" },
  { name: "POD Marketing office", type: "Office", area: "Downtown Calgary" },
  { name: "ABADATA office", type: "Office", area: "NW Calgary" },
  { name: "EFC office renovation, Skyline Way", type: "Office", area: "NE Calgary" },
  { name: "EFC new office, North Cariboo", type: "Office", area: "NE Calgary" },
  { name: "Aero Drive industrial unit", type: "Demolition", area: "NE Calgary" },
  { name: "Lincoln Park demolition and drywall", type: "Commercial", area: "SW Calgary" },
  { name: "Alberta Family Clinic, Airdrie", type: "Clinic", area: "Airdrie" },
  { name: "FS8 Marda Loop", type: "Fitness studio", area: "SW Calgary" },
];

export const residentialProjects: ListedProject[] = [
  { name: "Home renovation, Bearspaw", type: "Renovation", area: "Rocky View County" },
  { name: "Home renovation, Springbank", type: "Renovation", area: "Rocky View County" },
  { name: "Home renovation, Balzac", type: "Renovation", area: "Rocky View County" },
  { name: "Home renovation, Springbank Hill", type: "Renovation", area: "SW Calgary" },
  { name: "Home renovation, Strathcona Park", type: "Renovation", area: "SW Calgary" },
  { name: "Home renovation, Haysboro", type: "Renovation", area: "SW Calgary" },
  { name: "Home renovation, Mission", type: "Renovation", area: "SW Calgary" },
  { name: "Home renovation, Shaganappi", type: "Renovation", area: "SW Calgary" },
  { name: "Basement development, Oakridge", type: "Basement", area: "SW Calgary" },
  { name: "Home renovation, Parkland", type: "Renovation", area: "SE Calgary" },
  { name: "Home renovation, Albert Park", type: "Renovation", area: "SE Calgary" },
  { name: "Basement repair, Bridgeland", type: "Basement", area: "NE Calgary" },
  { name: "Home renovation, Chestermere", type: "Renovation", area: "Chestermere" },
  { name: "Infill, Altadore", type: "Infill", area: "SW Calgary" },
  { name: "Bike storage room, Glenbrook", type: "Multi-family", area: "SW Calgary" },
  { name: "The Elements condo, Bankview", type: "Restoration", area: "SW Calgary" },
  { name: "Home restoration, Falconridge", type: "Restoration", area: "NE Calgary" },
  { name: "Lake home restoration, Chestermere", type: "Restoration", area: "Chestermere" },
];
