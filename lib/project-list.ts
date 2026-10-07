// Completed jobs pulled from the QGS SubTrade portal (archived projects).
// Residential jobs list the neighbourhood and builder only: no homeowner
// names or street numbers, because these are people's homes.
// Owner's own house and direct private homeowner jobs are left out on purpose.

export type ListedProject = {
  name: string;
  type: string;
  area: string;
  gc?: string;
};

export const commercialProjects: ListedProject[] = [
  { name: "Hampton Hotel", type: "Hotel", area: "NE Calgary", gc: "Elite Trade Painting" },
  { name: "Walmart, 130 Avenue SE", type: "Retail", area: "SE Calgary", gc: "Theodore Builders" },
  { name: "Walmart, Shawville", type: "Retail", area: "SE Calgary", gc: "Theodore Builders" },
  { name: "Bulk Barn, Country Hills", type: "Retail", area: "NE Calgary", gc: "Theodore Builders" },
  { name: "Pet Valu, Langdon", type: "Retail", area: "Langdon", gc: "Theodore Builders" },
  { name: "Pet Valu, Chestermere", type: "Retail", area: "Chestermere", gc: "Theodore Builders" },
  { name: "Inspired Cannabis, Lethbridge", type: "Retail", area: "Lethbridge", gc: "Theodore Builders" },
  { name: "Inspired Cannabis, Strathmore", type: "Retail", area: "Strathmore", gc: "Theodore Builders" },
  { name: "Cannabis store, Cochrane", type: "Retail", area: "Cochrane", gc: "Theodore Builders" },
  { name: "Wingstop, Deerfoot Meadows", type: "Restaurant", area: "SE Calgary", gc: "Theodore Builders" },
  { name: "Mary Brown's, Medicine Hat", type: "Restaurant", area: "Medicine Hat", gc: "Theodore Builders" },
  { name: "Mary Brown's, West Springs", type: "Restaurant", area: "SW Calgary", gc: "BUILD IT Calgary" },
  { name: "Tim Hortons, Homestead", type: "Restaurant", area: "NE Calgary", gc: "BUILD IT Calgary" },
  { name: "Red's Diner, Seton", type: "Restaurant", area: "SE Calgary", gc: "BUILD IT Calgary" },
  { name: "Hello Nori, Bridgeland", type: "Restaurant", area: "NE Calgary", gc: "BUILD IT Calgary" },
  { name: "Burger King, Cochrane", type: "Restaurant", area: "Cochrane", gc: "Versatile Developments" },
  { name: "West Springs Landing", type: "Commercial", area: "SW Calgary", gc: "Versatile Developments" },
  { name: "130 Avenue SE retail", type: "Commercial", area: "SE Calgary", gc: "Versatile Developments" },
  { name: "Avalon Seton", type: "Mixed use", area: "SE Calgary", gc: "Avalon Industries" },
  { name: "POD Marketing office", type: "Office", area: "Downtown Calgary", gc: "LD&A" },
  { name: "ABADATA office", type: "Office", area: "NW Calgary", gc: "BUILD IT Calgary" },
  { name: "EFC office renovation, Skyline Way", type: "Office", area: "NE Calgary", gc: "EFC Developments" },
  { name: "EFC new office, North Cariboo", type: "Office", area: "NE Calgary", gc: "EFC Developments" },
  { name: "Aero Drive industrial unit", type: "Demolition", area: "NE Calgary", gc: "EFC Developments" },
  { name: "Lincoln Park demolition and drywall", type: "Commercial", area: "SW Calgary", gc: "FWD Construction" },
  { name: "Alberta Family Clinic, Airdrie", type: "Clinic", area: "Airdrie" },
  { name: "Radiant Health", type: "Clinic", area: "SW Calgary", gc: "Statera Contracting" },
  { name: "FS8 Marda Loop", type: "Fitness studio", area: "SW Calgary", gc: "LD&A" },
];

export const residentialProjects: ListedProject[] = [
  { name: "Home renovation, Bearspaw", type: "Renovation", area: "Rocky View County", gc: "LD&A" },
  { name: "Home renovation, Springbank", type: "Renovation", area: "Rocky View County", gc: "LD&A" },
  { name: "Home renovation, Balzac", type: "Renovation", area: "Rocky View County", gc: "TD Renovation & Construction" },
  { name: "Home renovation, Springbank Hill", type: "Renovation", area: "SW Calgary", gc: "LD&A" },
  { name: "Home renovation, Strathcona Park", type: "Renovation", area: "SW Calgary", gc: "LD&A" },
  { name: "Home renovation, Haysboro", type: "Renovation", area: "SW Calgary", gc: "LD&A" },
  { name: "Home renovation, Mission", type: "Renovation", area: "SW Calgary", gc: "LD&A" },
  { name: "Home renovation, Shaganappi", type: "Renovation", area: "SW Calgary", gc: "LD&A" },
  { name: "Basement development, Oakridge", type: "Basement", area: "SW Calgary", gc: "LD&A" },
  { name: "Home renovation, Parkland", type: "Renovation", area: "SE Calgary", gc: "LD&A" },
  { name: "Home renovation, Albert Park", type: "Renovation", area: "SE Calgary", gc: "LD&A" },
  { name: "Basement repair, Bridgeland", type: "Basement", area: "NE Calgary", gc: "LD&A" },
  { name: "Home renovation, Chestermere", type: "Renovation", area: "Chestermere", gc: "LD&A" },
  { name: "Infill, Altadore", type: "Infill", area: "SW Calgary", gc: "Old Street Developments" },
  { name: "Bike storage room, Glenbrook", type: "Multi-family", area: "SW Calgary", gc: "Old Street Developments" },
  { name: "The Elements condo, Bankview", type: "Restoration", area: "SW Calgary", gc: "First General" },
  { name: "Home restoration, Falconridge", type: "Restoration", area: "NE Calgary", gc: "First General" },
  { name: "Lake home restoration, Chestermere", type: "Restoration", area: "Chestermere", gc: "First General" },
];
