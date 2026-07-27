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
};

// Content migrated from the original qualitygypsum.ca project pages.
// Slugs preserved exactly from the existing site's URL structure.
export const projects: Project[] = [
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
    slug: "custom-homes-bridgeland",
    title: "Seton Carwash",
    href: "/projects/custom-homes-bridgeland/",
    image: "/images/projects/custom-homes-bridgeland.webp",
    category: "Commercial",
    location: "Calgary, Alberta",
    size: "2,800 sq ft",
    gc: "Telsec",
    excerpt: "The drywall phase for the Seton Car Wash, delivered in partnership with Telsec — steel stud, drywall, taping, and ceilings.",
    scope: [
      "Exterior steel stud framing",
      "Drywall installation",
      "Taping to Level 4",
      "Acoustical ceilings",
    ],
    body: [
      "We've just wrapped up the drywall phase for the Seton Car Wash, a project where we partnered with Telsec.",
      "We're thrilled to have provided our high-quality Calgary drywall services, once again demonstrating our commitment to precision and excellence.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
