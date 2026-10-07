export type Project = {
  slug: string;
  title: string;
  href: string;
  image: string;
  category: string;
  location?: string;
  size?: string;
  gc?: string;
  year?: string;
  excerpt: string;
  scope: string[];
  body: string[];
  gallery?: string[]; // extra site photos shown on the project page
};

// Content migrated from the original qualitygypsum.ca project pages.
// Slugs preserved exactly from the existing site's URL structure.
export const projects: Project[] = [
  {
    slug: "aldersyde-water-treatment-plant",
    title: "Aldersyde Water Treatment Plant",
    href: "/projects/aldersyde-water-treatment-plant/",
    image: "/images/projects/aldersyde-water-treatment-plant.webp",
    category: "Industrial",
    location: "Aldersyde, Alberta",
    year: "2026",
    excerpt: "Steel stud framing, drywall and fire-rated column wraps through a new water treatment plant south of Calgary.",
    scope: ["Steel stud framing", "Ceiling framing", "Drywall and taping", "Fire-rated column wraps", "Acoustical T-bar ceilings"],
    body: [
      "A new water treatment plant in Aldersyde, south of Calgary. Our crews framed the interior in steel stud from the slab up: tall walls through the process areas, rooms and corridors, and the ceiling framing above them, worked in and around the plant piping and mechanical.",
      "We boarded and taped the walls, built fire-rated wraps around the structural columns and bulkheads, and hung the T-bar ceilings in the occupied rooms. It is the kind of heavy commercial steel stud job our full-time crews are built for.",
    ],
    gallery: [
      "/images/projects/aldersyde-water-treatment-plant-2.webp",
      "/images/projects/aldersyde-water-treatment-plant-3.webp",
      "/images/projects/aldersyde-water-treatment-plant-4.webp",
      "/images/projects/aldersyde-water-treatment-plant-5.webp",
      "/images/projects/aldersyde-water-treatment-plant-6.webp",
      "/images/projects/aldersyde-water-treatment-plant-7.webp",
      "/images/projects/aldersyde-water-treatment-plant-8.webp",
      "/images/projects/aldersyde-water-treatment-plant-9.webp",
      "/images/projects/aldersyde-water-treatment-plant-10.webp",
      "/images/projects/aldersyde-water-treatment-plant-11.webp",
      "/images/projects/aldersyde-water-treatment-plant-12.webp",
      "/images/projects/aldersyde-water-treatment-plant-13.webp",
    ],
  },
  {
    slug: "wingstop-deerfoot-meadows",
    title: "Wingstop, Deerfoot Meadows",
    href: "/projects/wingstop-deerfoot-meadows/",
    image: "/images/projects/wingstop-deerfoot-meadows.webp",
    category: "Commercial",
    location: "Calgary, Alberta",
    year: "2026",
    excerpt: "Restaurant fit-out with a framed and boarded curved bulkhead over the dining room, steel stud walls and finished drywall throughout.",
    scope: ["Steel stud framing", "Curved drywall bulkhead", "Drywall and taping", "Ceilings and bulkheads"],
    body: [
      "A full restaurant fit-out in Deerfoot Meadows. Our crew framed the space in steel stud from an empty shell, including the curved bulkhead that wraps the dining room ceiling.",
      "The curve was framed in steel, boarded and finished smooth so the slatted feature ceiling and lighting could drop in clean. Walls and bulkheads were taped and finished paint-ready for the feature walls and graphics that went on after.",
    ],
    gallery: [
      "/images/projects/wingstop-deerfoot-meadows-2.webp",
      "/images/projects/wingstop-deerfoot-meadows-3.webp",
      "/images/projects/wingstop-deerfoot-meadows-4.webp",
      "/images/projects/wingstop-deerfoot-meadows-5.webp",
      "/images/projects/wingstop-deerfoot-meadows-6.webp",
      "/images/projects/wingstop-deerfoot-meadows-7.webp",
      "/images/projects/wingstop-deerfoot-meadows-8.webp",
      "/images/projects/wingstop-deerfoot-meadows-9.webp",
    ],
  },
  {
    slug: "pet-valu-langdon",
    title: "Pet Valu, Langdon",
    href: "/projects/pet-valu-langdon/",
    image: "/images/projects/pet-valu-langdon.webp",
    category: "Commercial",
    location: "Langdon, Alberta",
    year: "2026",
    excerpt: "New retail store: tall steel stud walls, drywall, bulkheads and taping, then a full resand and repaint before turnover.",
    scope: ["Steel stud framing", "Drywall and taping", "Bulkheads", "Painting"],
    body: [
      "A new Pet Valu store in Langdon. We framed the full-height walls in steel stud off scissor lifts, boarded and taped the sales floor, back of house and washroom, and built the bulkheads along the storefront.",
      "Before turnover we resanded the walls and repainted, including the dark band above 12 feet and a clean cut line where it meets the white. Walls were left ready for fixtures.",
    ],
    gallery: [
      "/images/projects/pet-valu-langdon-2.webp",
      "/images/projects/pet-valu-langdon-3.webp",
      "/images/projects/pet-valu-langdon-4.webp",
      "/images/projects/pet-valu-langdon-5.webp",
      "/images/projects/pet-valu-langdon-6.webp",
      "/images/projects/pet-valu-langdon-7.webp",
      "/images/projects/pet-valu-langdon-8.webp",
      "/images/projects/pet-valu-langdon-9.webp",
    ],
  },
  {
    slug: "radiant-health-calgary",
    title: "Radiant Health",
    href: "/projects/radiant-health-calgary/",
    image: "/images/projects/radiant-health-calgary.webp",
    category: "Tenant Improvement",
    location: "Calgary, Alberta",
    year: "2026",
    excerpt: "Clinic tenant improvement on Macleod Trail: steel stud partitions, drywall and acoustical T-bar ceilings through rooms and corridors.",
    scope: ["Steel stud partitions", "Drywall and taping", "Acoustical T-bar ceilings"],
    body: [
      "A clinic tenant improvement in an office floor on Macleod Trail SW. Our crew laid out and framed the new treatment rooms and corridors in steel stud, then boarded and taped every wall.",
      "We finished the job with acoustical T-bar ceilings throughout, cut in around lights, diffusers and sprinkler heads, so the clinic was ready for the trades that followed.",
    ],
    gallery: [
      "/images/projects/radiant-health-calgary-2.webp",
      "/images/projects/radiant-health-calgary-3.webp",
      "/images/projects/radiant-health-calgary-4.webp",
      "/images/projects/radiant-health-calgary-5.webp",
      "/images/projects/radiant-health-calgary-6.webp",
      "/images/projects/radiant-health-calgary-7.webp",
      "/images/projects/radiant-health-calgary-8.webp",
      "/images/projects/radiant-health-calgary-9.webp",
    ],
  },
  {
    slug: "mary-browns-west-springs",
    title: "Mary Brown's, West Springs",
    href: "/projects/mary-browns-west-springs/",
    image: "/images/projects/mary-browns-west-springs.webp",
    category: "Commercial",
    location: "Calgary, Alberta",
    year: "2026",
    excerpt: "Quick-service restaurant build-out: steel stud framing, drywall, kitchen bulkheads and the T-bar grid.",
    scope: ["Steel stud framing", "Drywall and taping", "Kitchen bulkheads", "T-bar ceiling grid"],
    body: [
      "A Mary Brown's restaurant in West Springs, SW Calgary. We framed the dining room, kitchen and washrooms in steel stud and boarded the walls and bulkheads around the kitchen hood line.",
      "Once the walls were taped we hung the T-bar grid for the dining room and front-of-house ceilings, working around the mechanical and the other trades on a tight restaurant schedule.",
    ],
    gallery: [
      "/images/projects/mary-browns-west-springs-2.webp",
      "/images/projects/mary-browns-west-springs-3.webp",
      "/images/projects/mary-browns-west-springs-4.webp",
      "/images/projects/mary-browns-west-springs-5.webp",
      "/images/projects/mary-browns-west-springs-6.webp",
      "/images/projects/mary-browns-west-springs-7.webp",
      "/images/projects/mary-browns-west-springs-8.webp",
      "/images/projects/mary-browns-west-springs-9.webp",
    ],
  },
  {
    slug: "hampton-hotel-calgary",
    title: "Hampton Hotel",
    href: "/projects/hampton-hotel-calgary/",
    image: "/images/projects/hampton-hotel-calgary.webp",
    category: "Renovations",
    location: "Calgary, Alberta",
    year: "2026",
    excerpt: "Lobby ceiling rework: opened ceilings, rebuilt drywall ceilings and bulkheads, patched and finished.",
    scope: ["Ceiling demolition", "Drywall ceilings and bulkheads", "Patching and taping"],
    body: [
      "Ceiling work in the lobby and main floor of a hotel in NE Calgary. Sections of the existing ceiling were opened up, then rebuilt.",
      "Our crew framed and boarded the new drywall ceilings and bulkheads, cut in the new diffusers and lights, and patched and taped everything back to a smooth finish ready for paint.",
    ],
    gallery: [
      "/images/projects/hampton-hotel-calgary-2.webp",
      "/images/projects/hampton-hotel-calgary-3.webp",
      "/images/projects/hampton-hotel-calgary-4.webp",
      "/images/projects/hampton-hotel-calgary-5.webp",
      "/images/projects/hampton-hotel-calgary-6.webp",
      "/images/projects/hampton-hotel-calgary-7.webp",
      "/images/projects/hampton-hotel-calgary-8.webp",
      "/images/projects/hampton-hotel-calgary-9.webp",
    ],
  },
  {
    slug: "vulcanpool",
    title: "Vulcan Pool",
    href: "/projects/vulcanpool/",
    image: "/images/projects/vulcanpool.webp",
    category: "Commercial",
    location: "Vulcan, Alberta",
    size: "Pool house: 3,875 sf (360 m²) · Pool deck: 14,745 sf (1,369 m²)",
    gc: "Ward Bros Construction Ltd",
    year: "2021",
    excerpt: "As the drywall contractor, we took on the insulation, spray foam, and drywall installation for this new aquatic facility.",
    scope: ["Insulation", "Spray foam", "Drywall installation"],
    body: [
      "This new project was completed in 2021. As the drywall contractor we took on the insulation, spray foam, and drywall installation.",
    ],
  },
  {
    slug: "workhub-new-office",
    title: "Workhub — New Office",
    href: "/projects/workhub-new-office/",
    image: "/images/projects/workhub-new-office.webp",
    category: "Tenant Improvement",
    location: "Calgary, Alberta",
    size: "32,000 sf",
    gc: "Workhub",
    year: "2024",
    excerpt: "A tenant improvement creating an open-space atmosphere — T-bar removal, new Level 4 drywall, and steel stud partitions.",
    scope: ["Acoustical ceiling removal", "Steel stud partitions", "Drywall to Level 4"],
    body: [
      "New project in 2024 as the drywall contractor. For this tenant improvement project, the owner wanted to create an open-space atmosphere, so we removed all the acoustical ceilings (T-bar) on both floors.",
      "As a result, we had to install and finish the new drywall to a Level 4. We then extended some existing partitions with steel stud and built new ones as well.",
    ],
  },
  {
    slug: "residential-drywall-projects",
    title: "Residential Drywall Projects",
    href: "/projects/residential-drywall-projects/",
    image: "/images/projects/residential-drywall-projects.webp",
    category: "Residential",
    location: "Calgary, Alberta",
    excerpt: "An extensive portfolio showcasing our craftsmanship in residential drywall installation and finishing across Calgary.",
    scope: ["Drywall installation", "Taping & finishing", "Custom finishes"],
    body: [
      "Welcome to our residential drywall projects — an extensive portfolio showcasing our exceptional craftsmanship in residential drywall installation.",
      "Whether you're looking for drywall installation for new construction or finishing services to give your interiors a polished look, our experienced team delivers top-quality results on every project — including custom drywall designs and smooth finishes that enhance the beauty and value of residential properties.",
    ],
  },
  {
    slug: "rvs",
    title: "Rocky View Schools",
    href: "/projects/rvs/",
    image: "/images/projects/rvs.webp",
    category: "Commercial",
    location: "Airdrie, Alberta",
    size: "10,000 sq ft",
    gc: "LEAR Construction",
    excerpt: "Drywall and acoustical ceiling work for Rocky View Schools, delivered to commercial standard.",
    scope: ["Steel stud framing", "Drywall", "Acoustical ceilings"],
    body: [
      "Rocky View Schools inspires a love of learning and community by engaging all learners through meaningful and challenging experiences, preparing them to understand, adapt, and successfully contribute to the changing global community.",
      "We were proud to contribute our drywall and ceiling scope to a learning environment built to last.",
    ],
  },
  {
    slug: "riverside-bungalow-school-no-2",
    title: "Riverside Bungalow School No. 2",
    href: "/projects/riverside-bungalow-school-no-2/",
    image: "/images/projects/riverside-bungalow-school-no-2.webp",
    category: "Renovations",
    location: "Calgary, Alberta",
    size: "18,000 sf",
    gc: "BSI Build",
    year: "2024",
    excerpt: "Breathing new life into an iconic Bridgeland landmark — transforming the Riverside Bungalow School into a daycare.",
    scope: ["Framing", "Drywall", "Finishing"],
    body: [
      "New project in 2024 as the drywall contractor for this huge renovation. Instead of fading into the past, we're breathing new life into this iconic landmark in the community of Bridgeland by transforming the Riverside Bungalow School into a daycare called Wee Wild Ones.",
      "Join us on this thrilling journey of renovation and revitalization!",
    ],
  },
  {
    slug: "eau-claire-athletic-club",
    title: "Eau Claire Athletic Club",
    href: "/projects/eau-claire-athletic-club/",
    image: "/images/projects/eau-claire-athletic-club.webp",
    category: "Tenant Improvement",
    location: "Calgary, Alberta",
    size: "Main Floor ±30,516 sf · Second ±17,201 sf · Third ±20,796 sf · Fourth ±13,294 sf",
    excerpt: "A major interior renovation of the Eau Claire Athletic Club — new mezzanine, fitness patio, and refreshed finishes throughout.",
    scope: ["Steel stud framing", "Drywall", "Acoustical ceilings", "Finishing"],
    body: [
      "The Eau Claire Athletic Club in Calgary is undergoing a major interior renovation to enhance its facilities and member experience. The exciting changes include:",
      "A new mezzanine expanding the club's usable space and offering new possibilities for fitness and recreation; a fitness patio providing members with a dedicated outdoor space for workouts; refreshed interiors with updated floor and wall finishes, modernized ceilings with new lighting designs, and stylish millwork throughout; and improved amenities including upgrades to the locker rooms, washrooms, and other essential spaces.",
    ],
  },
  {
    slug: "efc-warehouse",
    title: "EFC Warehouse",
    href: "/projects/efc-warehouse/",
    image: "/images/projects/efc-warehouse.webp",
    category: "Tenant Improvement",
    location: "Calgary, Alberta",
    size: "3,000 sf",
    gc: "EFC Developments Ltd",
    excerpt: "T-bar and drywall demolition for a new wood mezzanine, then full reinstatement, new acoustical ceiling, paint, and floor work.",
    scope: ["Demolition", "Drywall installation", "Acoustical ceilings", "Paint & floor"],
    body: [
      "We finished the T-bar and drywall demolition to make way for the installation of a wood mezzanine by the GC.",
      "Following this, we reinstalled the drywall and installed a new acoustical ceiling grid and tile. Finally, we completed the painting and floor work.",
    ],
  },
  {
    slug: "28-east-lake-warehouse",
    title: "28 East Lake Green NE, Warehouse",
    href: "/projects/28-east-lake-warehouse/",
    image: "/images/projects/28-east-lake-warehouse.webp",
    category: "Commercial",
    location: "Airdrie, Alberta",
    size: "Main Floor ±3,516 sq ft",
    gc: "Birchcliff Properties",
    excerpt: "Insulation and fire-rated drywall for a warehouse in Airdrie — installed to fire-rating codes throughout, including the attic space.",
    scope: ["Insulation", "Fire-rated drywall", "Commercial drywall"],
    body: [
      "We recently completed the insulation and drywall scope for a warehouse located in Airdrie, Alberta. Our team expertly handled the installation of fire-rated drywall in the attic space and throughout the warehouse, ensuring compliance with fire-rating codes and regulations.",
      "This project showcased our expertise in commercial drywall applications, demonstrating our ability to tackle large-scale installations with efficiency and precision.",
    ],
  },
  {
    slug: "custom-home-bridgeland",
    title: "Custom Home — Bridgeland",
    href: "/projects/custom-home-bridgeland/",
    image: "/images/projects/custom-home-bridgeland.webp",
    category: "Residential",
    location: "Calgary, Alberta",
    size: "2,800 sq ft",
    gc: "LD&A",
    excerpt: "The drywall phase for a custom home in Bridgeland, delivered in collaboration with LD&A to the highest residential standard.",
    scope: [
      "Drywall installation",
      "Taping to Level 4",
      "Level 5 ceiling finish",
      "Custom finishing around windows",
    ],
    body: [
      "As a leading drywall contractor, we completed the drywall phase for a custom home project in collaboration with LD&A.",
      "We're excited to have delivered our high-quality Calgary drywall services, showcasing our commitment to precision and excellence in every project.",
    ],
  },
  {
    slug: "seton-carwash",
    title: "Seton Carwash",
    href: "/projects/seton-carwash/",
    image: "/images/projects/seton-carwash.webp",
    category: "Commercial",
    location: "Calgary, Alberta",
    size: "2,800 sq ft",
    excerpt: "Drywall package for a new car wash in Seton, SE Calgary: steel stud framing, drywall, taping and acoustical ceilings.",
    scope: [
      "Exterior steel stud framing",
      "Drywall installation",
      "Taping to Level 4",
      "Acoustical ceilings",
      "Drywall boxes around piping",
    ],
    body: [
      "A new car wash in Seton, SE Calgary. Our crew handled the full drywall phase: steel stud framing, drywall and taping to Level 4.",
      "The ceilings were the tight part of this job. We hung the T-bar grid under a deck full of plumbing and ductwork, and built and finished drywall boxes around the piping so everything closed in clean.",
    ],
    gallery: [
      "/images/projects/seton-carwash-2.webp",
      "/images/projects/seton-carwash-3.webp",
      "/images/projects/seton-carwash-4.webp",
      "/images/projects/seton-carwash-5.webp",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

// Projects that show a given service, best first: jobs with a photo gallery,
// then the rest. Used on the service pages so each one links to real work.
const serviceMatch: Record<string, RegExp> = {
  "steel-stud-framing": /stud|framing|partition/i,
  insulation: /insulation|spray foam/i,
  drywall: /drywall|taping|level|bulkhead/i,
  "acoustical-ceilings": /t-bar|acoustical/i,
  "basement-development": /basement|suite/i,
};

// Hand-picked lead projects per service so the pages don't all show the same jobs.
const servicePicks: Record<string, string[]> = {
  "steel-stud-framing": ["aldersyde-water-treatment-plant", "wingstop-deerfoot-meadows", "pet-valu-langdon"],
  drywall: ["hampton-hotel-calgary", "wingstop-deerfoot-meadows", "seton-carwash"],
  "acoustical-ceilings": ["radiant-health-calgary", "seton-carwash", "mary-browns-west-springs"],
};

export function projectsForService(serviceSlug: string, limit = 3): Project[] {
  const picks = (servicePicks[serviceSlug] ?? [])
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p));
  if (picks.length >= limit) return picks.slice(0, limit);
  const re = serviceMatch[serviceSlug];
  let list = re ? projects.filter((p) => re.test(p.scope.join(" "))) : [];
  if (list.length === 0 && serviceSlug === "basement-development") {
    list = projects.filter((p) => p.category === "Residential");
  }
  return [...list]
    .sort((a, b) => Number(Boolean(b.gallery)) - Number(Boolean(a.gallery)))
    .slice(0, limit);
}
