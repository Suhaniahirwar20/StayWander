const listings = [
  {
    title: "Cozy Beachfront Cottage",

    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    },

    price: 1500,

    rating: 4.8,
    reviews: 126,

    category: "Beach",
    propertyType: "Cottage",

    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,

    amenities: [
      "Wifi",
      "Kitchen",
      "Parking",
      "Air Conditioning",
      "Beach Access",
    ],

    featured: true,
    isAvailable: true,

    location: "Malibu",
    country: "United States",

    latitude: 34.0259,
    longitude: -118.7798,
  },

  {
    title: "Modern Loft in Downtown",

    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },

    price: 1200,

    rating: 4.6,
    reviews: 94,

    category: "City",
    propertyType: "Apartment",

    maxGuests: 3,
    bedrooms: 1,
    bathrooms: 1,

    amenities: ["Wifi", "Kitchen", "TV", "Air Conditioning", "Parking"],

    featured: false,
    isAvailable: true,

    location: "New York City",
    country: "United States",

    latitude: 40.7128,
    longitude: -74.006,
  },

  {
    title: "Mountain Retreat",

    description:
      "Unplug and unwind in this peaceful mountain cabin surrounded by breathtaking alpine scenery.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    },

    price: 1000,

    rating: 4.9,
    reviews: 173,

    category: "Mountains",
    propertyType: "Cabin",

    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,

    amenities: ["Wifi", "Fireplace", "Mountain View", "Parking", "Kitchen"],

    featured: true,
    isAvailable: true,

    location: "Aspen",
    country: "United States",

    latitude: 39.1911,
    longitude: -106.8175,
  },

  {
    title: "Historic Villa in Tuscany",

    description:
      "Experience the timeless charm of Tuscany in this beautifully restored historic villa surrounded by vineyards.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },

    price: 2500,

    rating: 4.9,
    reviews: 212,

    category: "Luxury",
    propertyType: "Villa",

    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,

    amenities: ["Wifi", "Pool", "Kitchen", "Parking", "Breakfast"],

    featured: true,
    isAvailable: true,

    location: "Florence",
    country: "Italy",

    latitude: 43.7696,
    longitude: 11.2558,
  },

  {
    title: "Secluded Treehouse Getaway",

    description:
      "Live among the treetops in this unique treehouse retreat and reconnect with nature.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },

    price: 800,

    rating: 4.7,
    reviews: 108,

    category: "Forest",
    propertyType: "Treehouse",

    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,

    amenities: ["Wifi", "Balcony", "Forest View", "Parking", "Kitchen"],

    featured: false,
    isAvailable: true,

    location: "Portland",
    country: "United States",

    latitude: 45.5152,
    longitude: -122.6784,
  },
  {
    title: "Beachfront Paradise",

    description:
      "Wake up to the sound of waves and enjoy direct access to a pristine sandy beach in this tropical getaway.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
    },

    price: 2000,

    rating: 4.9,
    reviews: 198,

    category: "Beach",
    propertyType: "Villa",

    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,

    amenities: ["Wifi", "Beach Access", "Pool", "Kitchen", "Air Conditioning"],

    featured: true,
    isAvailable: true,

    location: "Cancun",
    country: "Mexico",

    latitude: 21.1619,
    longitude: -86.8515,
  },

  {
    title: "Rustic Cabin by the Lake",

    description:
      "Spend peaceful mornings fishing, kayaking, and relaxing beside a crystal-clear lake surrounded by pine forests.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    },

    price: 900,

    rating: 4.7,
    reviews: 142,

    category: "Lakefront",
    propertyType: "Cabin",

    maxGuests: 5,
    bedrooms: 2,
    bathrooms: 1,

    amenities: ["Lake View", "Wifi", "Kitchen", "Parking", "Fireplace"],

    featured: false,
    isAvailable: true,

    location: "Lake Tahoe",
    country: "United States",

    latitude: 39.0968,
    longitude: -120.0324,
  },

  {
    title: "Luxury Penthouse with City Views",

    description:
      "Experience luxury living with breathtaking skyline views from this modern penthouse in downtown Los Angeles.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    },

    price: 3500,

    rating: 4.8,
    reviews: 167,

    category: "Luxury",
    propertyType: "Apartment",

    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,

    amenities: ["Wifi", "Pool", "Gym", "Air Conditioning", "Parking"],

    featured: true,
    isAvailable: true,

    location: "Los Angeles",
    country: "United States",

    latitude: 34.0522,
    longitude: -118.2437,
  },

  {
    title: "Ski-In/Ski-Out Chalet",

    description:
      "Enjoy world-class skiing with direct slope access and cozy evenings by the fireplace.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    },

    price: 3000,

    rating: 4.9,
    reviews: 183,

    category: "Mountains",
    propertyType: "Chalet",

    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,

    amenities: ["Mountain View", "Fireplace", "Wifi", "Parking", "Kitchen"],

    featured: true,
    isAvailable: true,

    location: "Verbier",
    country: "Switzerland",

    latitude: 46.0964,
    longitude: 7.228,
  },

  {
    title: "Safari Lodge in the Serengeti",

    description:
      "Experience unforgettable wildlife adventures while staying in a luxury safari lodge overlooking the savannah.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    },

    price: 4000,

    rating: 5.0,
    reviews: 241,

    category: "Forest",
    propertyType: "Resort",

    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,

    amenities: ["Breakfast", "Pool", "Wifi", "Wildlife Tours", "Parking"],

    featured: true,
    isAvailable: true,

    location: "Serengeti National Park",
    country: "Tanzania",

    latitude: -2.3333,
    longitude: 34.8333,
  },
  {
    title: "Historic Canal House",

    description:
      "Stay in a beautifully restored canal house and experience the charm of Amsterdam's historic waterways.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    },

    price: 1800,

    rating: 4.8,
    reviews: 157,

    category: "City",
    propertyType: "Townhouse",

    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,

    amenities: ["Wifi", "Kitchen", "Canal View", "Heating", "TV"],

    featured: false,
    isAvailable: true,

    location: "Amsterdam",
    country: "Netherlands",

    latitude: 52.3676,
    longitude: 4.9041,
  },

  {
    title: "Private Island Retreat",

    description:
      "Escape to your own private island with crystal-clear waters, white sandy beaches, and unmatched luxury.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
    },

    price: 10000,

    rating: 5.0,
    reviews: 289,

    category: "Luxury",
    propertyType: "Villa",

    maxGuests: 10,
    bedrooms: 5,
    bathrooms: 5,

    amenities: ["Private Beach", "Pool", "Wifi", "Breakfast", "Airport Pickup"],

    featured: true,
    isAvailable: true,

    location: "Fiji",
    country: "Fiji",

    latitude: -17.7134,
    longitude: 178.065,
  },

  {
    title: "Charming Cottage in the Cotswolds",

    description:
      "Relax in a picturesque English countryside cottage surrounded by rolling hills and charming villages.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60",
    },

    price: 1200,

    rating: 4.7,
    reviews: 121,

    category: "Forest",
    propertyType: "Cottage",

    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,

    amenities: ["Wifi", "Fireplace", "Kitchen", "Garden", "Parking"],

    featured: false,
    isAvailable: true,

    location: "Cotswolds",
    country: "United Kingdom",

    latitude: 51.833,
    longitude: -1.8433,
  },

  {
    title: "Historic Brownstone in Boston",

    description:
      "Step back in time while enjoying modern comforts in this elegant historic brownstone.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60",
    },

    price: 2200,

    rating: 4.8,
    reviews: 165,

    category: "City",
    propertyType: "Townhouse",

    maxGuests: 5,
    bedrooms: 3,
    bathrooms: 2,

    amenities: ["Wifi", "Kitchen", "Heating", "TV", "Parking"],

    featured: false,
    isAvailable: true,

    location: "Boston",
    country: "United States",

    latitude: 42.3601,
    longitude: -71.0589,
  },

  {
    title: "Beachfront Bungalow in Bali",

    description:
      "Relax in a tropical beachfront bungalow surrounded by palm trees and breathtaking ocean views.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
    },

    price: 1800,

    rating: 4.9,
    reviews: 214,

    category: "Beach",
    propertyType: "Bungalow",

    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,

    amenities: [
      "Beach Access",
      "Pool",
      "Wifi",
      "Breakfast",
      "Air Conditioning",
    ],

    featured: true,
    isAvailable: true,

    location: "Bali",
    country: "Indonesia",

    latitude: -8.3405,
    longitude: 115.092,
  },
  {
    title: "Mountain View Cabin in Banff",

    description:
      "Wake up to breathtaking mountain views and fresh alpine air in this cozy cabin nestled in the heart of Banff National Park.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
    },

    price: 1500,

    rating: 4.9,
    reviews: 176,

    category: "Mountains",
    propertyType: "Cabin",

    maxGuests: 5,
    bedrooms: 2,
    bathrooms: 2,

    amenities: ["Mountain View", "Fireplace", "Wifi", "Kitchen", "Parking"],

    featured: true,
    isAvailable: true,

    location: "Banff",
    country: "Canada",

    latitude: 51.1784,
    longitude: -115.5708,
  },

  {
    title: "Art Deco Apartment in Miami",

    description:
      "Experience the glamour of Miami in this stylish Art Deco apartment located just minutes from the beach.",

    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?auto=format&fit=crop&w=800&q=60",
    },

    price: 1600,

    rating: 4.7,
    reviews: 138,

    category: "City",
    propertyType: "Apartment",

    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,

    amenities: ["Wifi", "Air Conditioning", "Kitchen", "TV", "Parking"],

    featured: false,
    isAvailable: true,

    location: "Miami",
    country: "United States",

    latitude: 25.7617,
    longitude: -80.1918,
  },

  {
    title: "Tropical Villa in Phuket",

    description:
      "Escape to a luxurious tropical villa featuring a private pool, lush gardens, and easy access to Phuket's beautiful beaches.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60",
    },

    price: 3000,

    rating: 4.9,
    reviews: 225,

    category: "Beach",
    propertyType: "Villa",

    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,

    amenities: [
      "Private Pool",
      "Wifi",
      "Breakfast",
      "Air Conditioning",
      "Beach Access",
    ],

    featured: true,
    isAvailable: true,

    location: "Phuket",
    country: "Thailand",

    latitude: 7.8804,
    longitude: 98.3923,
  },

  {
    title: "Historic Castle in Scotland",

    description:
      "Live like royalty in this magnificent Scottish castle surrounded by rolling hills and centuries of history.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
    },

    price: 4000,

    rating: 5.0,
    reviews: 261,

    category: "Luxury",
    propertyType: "Castle",

    maxGuests: 12,
    bedrooms: 6,
    bathrooms: 5,

    amenities: ["Fireplace", "Garden", "Breakfast", "Parking", "Wifi"],

    featured: true,
    isAvailable: true,

    location: "Scottish Highlands",
    country: "United Kingdom",

    latitude: 57.12,
    longitude: -4.71,
  },

  {
    title: "Desert Oasis in Dubai",

    description:
      "Experience unmatched luxury in the heart of the desert with stunning skyline views, premium amenities, and world-class hospitality.",

    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
    },

    price: 5000,

    rating: 4.9,
    reviews: 243,

    category: "Luxury",
    propertyType: "Resort",

    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,

    amenities: ["Pool", "Spa", "Gym", "Wifi", "Airport Pickup"],

    featured: true,
    isAvailable: true,

    location: "Dubai",
    country: "United Arab Emirates",

    latitude: 25.2048,
    longitude: 55.2708,
  },
];

export default listings ;
