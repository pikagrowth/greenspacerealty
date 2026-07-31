import { Project } from '../types';

export const projects: Project[] = [
  {
    title: "Shravan Siddhant",
    slug: "shravan-siddhant",
    category: "Residential",
    status: "Ongoing",
    mandateType: "Sole Selling Mandate",
    location: "Old Panvel, Navi Mumbai",
    priceRange: "[PENDING-FROM-CLIENT: Starting Price e.g., ₹45L*]",
    configuration: "[PENDING-FROM-CLIENT: Configurations e.g., 1 & 2 BHK]",
    fastSelling: true,
    description: "Located in the established and well-connected node of Old Panvel, Shravan Siddhant is a premium mixed-use development designed for modern living and thriving businesses. Currently marketed by Greenspace Realty under an exclusive sole-selling mandate, this project offers a blend of residential comfort and commercial viability, surrounded by excellent social infrastructure, schools, and transport links.",
    highlights: [
      "80 thoughtfully designed residential flats",
      "15 premium retail shops for local businesses",
      "2 dedicated commercial units",
      "Prime location in Old Panvel with robust connectivity",
      "Exclusive sole-selling project by Greenspace Realty"
    ],
    images: [
      "/images/projects/shravan-siddhant-1.jpeg",
      "/images/projects/shravan-siddhant-2.jpeg",
      "/images/projects/shravan-siddhant-3.jpeg"
    ]
  },
  // Placeholders for other categories to demonstrate the filters in the UI
  {
    title: "Karanjade Prime Land Plot",
    slug: "karanjade-prime-land",
    category: "Land",
    status: "Available",
    mandateType: "Land Listing",
    location: "Sector 4, Karanjade",
    priceRange: "[PENDING-FROM-CLIENT: Price per sq.ft or total]",
    configuration: "Clear Title NA Plot",
    fastSelling: false,
    description: "A highly sought-after clear title NA plot located in the rapidly appreciating node of Karanjade. With the upcoming Navi Mumbai International Airport driving infrastructure development in the vicinity, this plot represents a golden opportunity for long-term investors or developers looking to launch a boutique residential project.",
    highlights: [
      "CIDCO transfer plot",
      "Close proximity to upcoming airport",
      "Ideal for residential development or pure investment",
      "Rigorous title check completed by our team"
    ],
    images: [
      "/images/projects/land-placeholder-1.jpeg"
    ]
  }
];