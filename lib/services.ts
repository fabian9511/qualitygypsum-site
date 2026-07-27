export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  href: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  image: string;
  intro: string[];
  features: { title: string; body: string }[];
  featuresLabel?: string;
};

export const services: Service[] = [
  {
    slug: "steel-stud-framing",
    title: "Steel Stud Framing",
    shortTitle: "Steel Stud Framing",
    href: "/services/steel-stud-framing/",
    excerpt:
      "The foundational step for interior walls and ceilings — durable, stable, and fire-resistant framing built to engineering standards.",
    metaTitle: "Steel Stud Framing | Quality Gypsum Services | Calgary",
    metaDescription:
      "Professional steel stud framing in Calgary — shop drawings to installation. Durable, straight, fire-resistant framing built to engineering standards.",
    hero: "Precision steel stud framing for commercial and residential builds.",
    image: "/images/track-fastening.jpg",
    intro: [
      "Steel stud framing is the foundational step in constructing interior walls and ceilings across residential and commercial buildings. It's known for its durability, stability, and fire resistance.",
      "From engineered shop drawings to final inspection, our crews deliver dead-straight framing that meets code and sets every trade that follows up for success.",
    ],
    featuresLabel: "Our framing process",
    features: [
      {
        title: "Engineering Shop Drawings",
        body: "We produce precise shop drawings for steel stud framing, ensuring every detail aligns with engineering standards before a single stud is cut.",
      },
      {
        title: "Layout & Measurement",
        body: "Detailed layout and measurement, marking the exact locations for steel studs as per the architectural plans.",
      },
      {
        title: "Steel Stud Installation",
        body: "Our expert team installs steel studs with precision, creating a durable and perfectly aligned framework.",
      },
      {
        title: "Blocking & Bridging",
        body: "Added reinforcement strengthens walls and provides secure attachment points for fixtures and heavy items.",
      },
      {
        title: "Final Inspection",
        body: "A thorough final inspection ensures every component meets safety standards before we hand off to the next trade.",
      },
    ],
  },
  {
    slug: "insulation",
    title: "Insulation & Sprayfoam",
    shortTitle: "Insulation",
    href: "/services/insulation/",
    excerpt:
      "Comfortable, energy-efficient, soundproofed spaces — spray foam, loosefill, batts, and mineral wool tailored to your project.",
    metaTitle: "Insulation & Spray Foam | Quality Gypsum Services | Calgary",
    metaDescription:
      "Spray foam, loosefill, fiberglass batt, and Rockwool insulation in Calgary. Energy-efficient, soundproofed, code-compliant installation.",
    hero: "The right insulation for a comfortable, efficient, quiet space.",
    image: "/images/framing-inspect.jpg",
    intro: [
      "When it comes to creating a comfortable, energy-efficient, and soundproofed environment, the right insulation is essential. We provide tailored solutions for every project need.",
    ],
    featuresLabel: "Insulation we install",
    features: [
      {
        title: "Spray Foam Installation",
        body: "Available in two densities: 1/2 lb open-cell foam for indoor air sealing and noise reduction, and 2 lb closed-cell foam for moisture resistance and structural support inside and out.",
      },
      {
        title: "Loosefill Insulation",
        body: "Blown cellulose or fiberglass for attics, wall cavities, and hard-to-reach spaces — complete coverage that fills gaps traditional batts can't reach.",
      },
      {
        title: "Standard Insulation",
        body: "Fiberglass batts and rolls installed between studs, joists, and rafters for maximum energy efficiency.",
      },
      {
        title: "Rockwool & Roxul",
        body: "Mineral wool insulation for superior fire resistance, sound absorption, and thermal performance.",
      },
    ],
  },
  {
    slug: "drywall",
    title: "Drywall & Taping",
    shortTitle: "Drywall & Taping",
    href: "/services/drywall/",
    excerpt:
      "Premium drywall installation and finishing — from prep and hanging to Level 5 finishes and pre-occupancy touch-ups.",
    metaTitle: "Drywall Contractor in Calgary | Quality Gypsum Services",
    metaDescription:
      "Top-rated drywall installation, taping, and finishing in Calgary. Level 4 and Level 5 finishes, texture, sanding, priming, and touch-ups.",
    hero: "Premium drywall installation and finishing across Calgary.",
    image: "/images/drywall-measure.jpg",
    intro: [
      "Looking for top-notch drywall services in Calgary? You've found the right place. Our experienced team specializes in delivering premium-quality drywall solutions.",
      "We take pride in our reputation for the best craftsmanship on projects throughout Calgary and Alberta. Our team understands the importance of timeliness — we prioritize clear communication and adherence to deadlines.",
    ],
    featuresLabel: "What we deliver",
    features: [
      { title: "Drywall Prep (IPD's)", body: "Full preparation so hanging and finishing go right the first time." },
      { title: "Count & Light Marking", body: "Accurate board counts and light marking to plan the job precisely." },
      { title: "Drywall Installation", body: "Clean, square, professional installation on walls and ceilings." },
      { title: "Taping — Level 4", body: "Standard high-quality taped and finished surface, ready for paint." },
      { title: "Texture & Knockdown", body: "Knockdown and custom ceiling textures applied to spec." },
      { title: "Level 5 Finish", body: "The highest smooth finish for flat ceilings and high-light areas." },
      { title: "Sanding & Priming", body: "Meticulous sanding and priming for a flawless final surface." },
      { title: "Pre-Occupancy Touch-ups", body: "Final touch-ups so the space is move-in ready." },
    ],
  },
  {
    slug: "acoustical-ceilings",
    title: "Acoustical Ceilings (T-Bar)",
    shortTitle: "Acoustical Ceilings",
    href: "/services/acoustical-ceilings/",
    excerpt:
      "Expert T-bar grid and tile installation — custom ceilings, clouds, and clean layouts that meet industry standards.",
    metaTitle: "Acoustical Ceilings & T-Bar | Quality Gypsum Services | Calgary",
    metaDescription:
      "Acoustical ceiling grid and tile (T-bar) installation in Calgary. Custom T-bar ceilings, clouds, and precise grid layouts to industry standards.",
    hero: "Acoustical ceiling grid and tile, installed right.",
    image: "/images/plans-review.jpg",
    intro: [
      "If you're looking for top-notch installation of acoustical ceiling grid and tiles — also known as T-bar — look no further. We combine precise installation with quality workmanship while staying compliant with industry standards.",
    ],
    featuresLabel: "Ceiling systems we build",
    features: [
      {
        title: "Custom T-Bar Ceilings",
        body: "Versatile design solutions for any space, balancing elegance and practicality around lighting, air conditioning, and aesthetic preferences.",
      },
      {
        title: "Tile Placement",
        body: "Tiles carefully fit within the grid for a clean finished surface, with a wide range of materials and designs to meet acoustic requirements.",
      },
      {
        title: "Grid Installation",
        body: "Our specialists ensure the grid is perfectly aligned and securely attached — the structural foundation of the ceiling system.",
      },
      {
        title: "Custom Ceiling Clouds",
        body: "Suspended features that deliver aesthetic and acoustic benefits, available in various shapes and sizes for open or high-ceilinged rooms.",
      },
    ],
  },
  {
    slug: "basement-development",
    title: "Basement Development",
    shortTitle: "Basement Development",
    href: "/services/basement-development/",
    excerpt:
      "Legal suites and finished living space, built to commercial standards by full-time drywall and steel stud crews.",
    metaTitle: "Basement Development in Calgary | Quality Gypsum Services",
    metaDescription:
      "Basement development in Calgary built to commercial standards. Legal secondary suites and finished basements — framed, boarded, and finished right.",
    hero: "Basement development in Calgary, built to commercial standards.",
    image: "/images/layout-laser.jpg",
    intro: [
      "We frame and finish commercial buildings across Calgary — and we apply the same crews and standards to residential basements. Legal suites or living space, built once and built right.",
      "Most basement outfits are one truck and whoever they found that week. QGS runs commercial drywall and steel stud crews full time. Steel stud framing that's dead straight, our own employees on site, drywall taped and sanded to level.",
    ],
    featuresLabel: "How we work",
    features: [
      {
        title: "Legal Secondary Suite",
        body: "Purpose-built for rental income and compliant with City of Calgary requirements: separate entrances, egress windows, fire separation, and code-compliant framing.",
      },
      {
        title: "Finished Basement",
        body: "Rec rooms, bedrooms, bathrooms, home offices, gyms, or wet bars — finished to Level 4 or 5 drywall standards.",
      },
      {
        title: "On-Site Measure",
        body: "We measure on site with no obligation, then provide a fixed written scope quote with no price changes.",
      },
      {
        title: "Frame to Finish",
        body: "Frame, rough-in, board, and finish — followed by a walkthrough, inspection sign-off, and clean handoff.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
