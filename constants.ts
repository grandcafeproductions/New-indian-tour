import { ServiceItem, NewsItem, MaterialItem } from './types';

// Using consistent Picsum seeds to ensure the same images load every time
export const SERVICE_ITEMS: ServiceItem[] = [
  { id: 1, title: "Tours to India and Nepal", image: "https://picsum.photos/seed/india1/400/250" },
  { id: 2, title: "Visa to India", image: "https://picsum.photos/seed/stamp/400/250", isSpecial: true }, // Placeholder for logo
  { id: 3, title: "Ayurveda tours", image: "https://picsum.photos/seed/massage/400/250" },
  { id: 4, title: "For tourists", image: "https://picsum.photos/seed/sari/400/250" },
  { id: 5, title: "Our team", image: "https://picsum.photos/seed/people/400/250" },
  { id: 6, title: "Contacts and directions", image: "https://picsum.photos/seed/palace/400/250" },
  { id: 7, title: "News", image: "https://picsum.photos/seed/indianwoman/400/250" },
  { id: 8, title: "Stock", image: "https://picsum.photos/seed/jewelry/400/250" },
  { id: 9, title: "Reviews", image: "https://picsum.photos/seed/smile/400/250" },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    date: "23",
    monthYear: "October 2025",
    title: "INDIA INTRODUCES E-ARRIVAL CARD",
    description: "From 1 October 2025, the Bureau of Immigration, Ministry of Home Affairs of India launched the e-Arrival Card system for entry into the country.",
    image: "https://picsum.photos/seed/passport/400/300",
    tags: ["Bureau of Immigration"]
  },
  {
    id: 2,
    date: "25",
    monthYear: "December 2024",
    title: "THE BETHSAIDA HERMITAGE CHRISTMAS TREE",
    description: "An explanation from India Tour CEO Maria Dashkevich regarding the outbreak of the dangerous Nipah virus in Kerala.",
    image: "https://picsum.photos/seed/lights/400/300"
  },
  {
    id: 3,
    date: "01",
    monthYear: "November 2024",
    title: "THE FORMAT OF THE ETA ELECTRONIC TRAVEL AUTHORIZATION",
    description: "A new feature has been added that upon arrival at Delhi Airport, passengers can now undergo automated biometrics before passport control.",
    image: "https://picsum.photos/seed/tajmahal/400/300"
  }
];

export const MATERIAL_ITEMS: MaterialItem[] = [
  { id: 1, title: "TREATMENT IN INDIA", image: "https://picsum.photos/seed/ayurveda2/400/250" },
  { id: 2, title: "CLINICS IN INDIA", image: "https://picsum.photos/seed/doctors/400/250" },
  { id: 3, title: "PANCHAKARMA CLINICS", image: "https://picsum.photos/seed/nature/400/250" },
];