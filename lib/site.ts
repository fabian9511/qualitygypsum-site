export const site = {
  name: "Quality Gypsum Services Ltd.",
  shortName: "Quality Gypsum",
  domain: "https://qualitygypsum.ca",
  tagline: "Drywall Contractor in Calgary",
  mission: "We don't just build walls; we build relationships.",
  phone: "(403) 809-2908",
  phoneHref: "tel:+14038092908",
  email: "info@qualitygypsum.ca",
  emailHref: "mailto:info@qualitygypsum.ca",
  address: "4975 130 Ave SE, Calgary, Alberta",
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 4:00 PM" },
    { day: "Saturday – Sunday", time: "Closed" },
  ],
  experienceYears: "10+",
  serviceAreas: [
    "Calgary",
    "Airdrie & Balzac",
    "Cochrane",
    "Chestermere",
    "Okotoks",
    "High River",
  ],
  social: {
    facebook: "https://facebook.com/qualitygypsumservices",
    instagram: "https://instagram.com/qualitygypsumservices",
  },
  clients: [
    { name: "IDEAL Insulation & Roofing", logo: "/images/clients/ideal.webp", url: "https://idealinsulation.com/" },
    { name: "EFC Developments", logo: "/images/clients/efc.webp", url: "https://efcdev.ca/" },
    { name: "LD&A", logo: "/images/clients/lda.webp", url: "https://lynndonaldson.ca/" },
    { name: "Oldstreet Development", logo: "/images/clients/oldstreet.webp", url: "https://www.oldstreet.ca/" },
    { name: "5054 Contractors", logo: "/images/clients/f5054.webp", url: "https://5054contractors.com/" },
  ],
};

// Primary navigation — hrefs preserve the exact existing URL structure.
export const mainNav = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "Steel Stud Framing", href: "/services/steel-stud-framing/" },
      { label: "Insulation & Sprayfoam", href: "/services/insulation/" },
      { label: "Drywall & Taping", href: "/services/drywall/" },
      { label: "Acoustical Ceilings (T-Bar)", href: "/services/acoustical-ceilings/" },
      { label: "Basement Development", href: "/services/basement-development/" },
      { label: "T-Bar Calculator", href: "/services/t-bar-calculator/" },
    ],
  },
  { label: "Projects", href: "/projects/" },
  { label: "Blog", href: "/blog/" },
  { label: "Work with Us", href: "/work-with-us/" },
  { label: "Contact", href: "/contact-us/" },
];

export const values = [
  {
    key: "Quality",
    title: "Quality",
    body: "We're all about doing it right. Every project, every time.",
  },
  {
    key: "Be Real",
    title: "Be Real",
    body: "Honesty is our policy. We're straightforward, admit our mistakes, and find solutions.",
  },
  {
    key: "Trust",
    title: "Trust",
    body: "Trust is our foundation. We earn your confidence through reliability, safety, and delivering on our promises.",
  },
  {
    key: "Lifestyle",
    title: "Lifestyle",
    body: "Team well-being means better results for clients — through work-life balance and room to grow.",
  },
];
