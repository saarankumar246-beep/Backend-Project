import { images } from '../assets/images'

export const navLinks = [
  { label: 'Discover', path: '/' },
  { label: 'Market Trends', path: '/listings' },
  { label: 'Saved', path: '/dashboard' },
  { label: 'Concierge', path: '/auth' }
]

export const footerColumns = [
  {
    title: 'Company',
    links: ['About Us', 'Our Story', 'Careers']
  },
  {
    title: 'Services',
    links: ['Property Management', 'Valuation', 'Investments']
  },
  {
    title: 'Support',
    links: ['Help Center', 'Contact Us']
  }
]

export const homeCards = [
  {
    id: 1,
    title: 'The Obsidian Pavilion',
    price: '$4,250,000',
    location: 'Beverly Hills, California',
    beds: 5,
    baths: 6,
    area: '6,500 ft²',
    status: ['FOR SALE', 'FEATURED'],
    image: images.home1
  },
  {
    id: 2,
    title: 'Azure Bay View',
    price: '$2,180,000',
    location: 'Miami Beach, Florida',
    beds: 3,
    baths: 3,
    area: '3,200 ft²',
    status: ['FOR SALE'],
    image: images.home2
  },
  {
    id: 3,
    title: 'The Sky Garden Loft',
    price: '$12,500/mo',
    location: 'Tribeca, New York',
    beds: 2,
    baths: 2,
    area: '2,100 ft²',
    status: ['FOR RENT'],
    image: images.home3
  }
]

export const listingProperties = [
  {
    id: 1,
    title: 'The Obsidian Vista',
    price: '$8,450,000',
    location: '90210 Beverly Hills, CA',
    beds: 8,
    baths: 7,
    area: '8,200 sqft',
    image: images.listing1,
    badge: 'Villa'
  },
  {
    id: 2,
    title: 'Azure Bay Estate',
    price: '$12,200,000',
    location: 'Star Island, Miami Beach, FL',
    beds: 8,
    baths: 10,
    area: '14,500 sqft',
    image: images.listing2,
    badge: 'Villa'
  },
  {
    id: 3,
    title: 'Pinecrest Retreat',
    price: '$5,900,000',
    location: 'Red Mountain, Aspen, CO',
    beds: 4,
    baths: 4,
    area: '4,100 sqft',
    image: images.listing3,
    badge: 'Villa'
  },
  {
    id: 4,
    title: 'The Sky Loft',
    price: '$4,200,000',
    location: 'Tribeca, Manhattan, NY',
    beds: 3,
    baths: 3,
    area: '3,500 sqft',
    image: images.listing4,
    badge: 'Apartment'
  },
  {
    id: 5,
    title: 'Dune Scape Villa',
    price: '$7,100,000',
    location: 'Scottsdale, AZ',
    beds: 6,
    baths: 6,
    area: '6,800 sqft',
    image: images.listing5,
    badge: 'Villa'
  },
  {
    id: 6,
    title: 'Lakeside Sanctuary',
    price: '$9,800,000',
    location: 'Lake Tahoe, NV',
    beds: 5,
    baths: 5,
    area: '5,200 sqft',
    image: images.listing6,
    badge: 'Villa'
  }
]

export const dashboardStats = [
  { label: 'Total Properties', value: '1,284', diff: '+12%' },
  { label: 'Total Leads', value: '4,592', diff: '+8%' },
  { label: 'Active Users', value: '912', diff: '+15%' },
  { label: 'Revenue', value: '$1.4M', diff: '+24%' }
]

export const recentLeads = [
  { id: 1, initials: 'JD', name: 'Jane Doe', phone: '+1 (555) 012-3456', property: 'The Glass Pavilion', date: 'Oct 24, 2024', status: 'New' },
  { id: 2, initials: 'MK', name: 'Marcus Kane', phone: '+1 (555) 098-7654', property: 'Penthouse B - Skyline', date: 'Oct 23, 2024', status: 'Contacted' },
  { id: 3, initials: 'SW', name: 'Sarah Weber', phone: '+1 (555) 234-5678', property: 'Emerald Gardens Villa', date: 'Oct 22, 2024', status: 'Closed' },
  { id: 4, initials: 'RT', name: 'Robert Tusk', phone: '+1 (555) 345-6789', property: 'Neo-Classic Estate', date: 'Oct 21, 2024', status: 'New' }
]

export const propertyDetail = {
  title: 'The Obsidian Sanctuary: Architectural Masterpiece',
  address: '742 Evergreen Terrace, Beverly Hills, CA 90210',
  price: '$12,450,000',
  mortgage: '$62,000/mo',
  tags: ['FEATURED', 'NEW LISTING'],
  images: [
    images.detailHero,
    images.detailSecondary,
    images.detailDetail1,
    images.detailDetail2,
    images.listing2
  ],
  beds: 6,
  baths: 8,
  sqft: '14,200 sqft',
  lot: '2.4 Acres',
  description: `Welcome to The Obsidian Sanctuary, a residence that transcends traditional luxury. Conceived by world-renowned architects, this property stands as a testament to the harmony between brutalist structural integrity and the soft fluidity of natural California landscapes. The residence is perched high in the prestigious enclave of Beverly Hills, the home offers 270-degree views of the Los Angeles basin, stretching from the glittering downtown skyline to the Pacific horizon.

Upon entry through the triple-height glass foyer, the space immediately breathes with an atmosphere of curated calm. The main level is designed for both grand-scale entertaining and intimate reflection. A 60-foot infinity edge reflection pool slices through the living pavilion, creating a seamless visual bridge between the interior marble floors and the sky beyond. Every material has been sourced with surgical precision: imported Belgian basalt stone, hand-milled white oak panels, and aerospace-grade structural steel.

The culinary suite is a masterpiece of form and function. It features a dual-kitchen configuration—a presentation kitchen for social hosting and a professional-grade catering scullery hidden behind concealed pivot doors. Equipped with Gaggenau 400 series appliances and a custom-crafted Adarestone marble island, it is the heartbeat of the home. Adjacent, the wine cellar holds over 2,500 bottles in a temperature-controlled vault that doubles as a sculptural installation behind floor-to-ceiling UV-protected glass.

The master retreat occupies its own wing, offering a sanctuary of unparalleled privacy. It features a private terrace, a fireplace carved from a single block of limestone, and dual spa-inspired bathrooms that rival any five-star resort. The walk-in dressing rooms are built with boutique-style display lighting and automated organization systems. Additional amenities include a subterranean 12-car gallery, a private cinema with Dolby Atmos sound, and a wellness floor comprising a gym, sauna, and cryotherapy chamber.

Outdoor living is elevated to an art form. Multiple levels of terraced gardens lead to a primary pool deck featuring an oversized hot tub, an outdoor kitchen with wood-fired oven, and several fire-lit peristyle lounges designed for the ultimate golden hour experience. This is not just a house; it is a legacy asset for the discerning curator of fine living.`,
  nearby: {
    score: '94 / 100 (Excellent)',
    transit: 'Very Walkable'
  }
}

export const recommendedProperties = [
  {
    id: 'r1',
    title: 'The Geometrica Ridge',
    price: '$8,900,000',
    location: '445 Hillcrest Way, Beverly Hills',
    beds: 5,
    baths: 6,
    area: '8,200',
    image: images.recommended1
  },
  {
    id: 'r2',
    title: 'Azure Waters Estate',
    price: '$10,200,000',
    location: '1200 Canyon Dr, Beverly Hills',
    beds: 7,
    baths: 8,
    area: '11,500',
    image: images.recommended2
  },
  {
    id: 'r3',
    title: 'The Zenith Pavilion',
    price: '$15,750,000',
    location: '980 Bel Air Rd, Los Angeles',
    beds: 10,
    baths: 10,
    area: '16,400',
    image: images.recommended3
  }
]

export const sidebarItems = [
  { label: 'Overview', path: '/dashboard' },
  { label: 'Properties', path: '/listings' },
  { label: 'Leads', path: '/dashboard' },
  { label: 'Analytics', path: '/dashboard' },
  { label: 'Settings', path: '/dashboard' }
]

export const propertyCategories = ['Residential Estate', 'Modern Villa', 'City Apartment', 'Commercial Property']

export const amenities = ['Infinity Pool', 'Home Theater', 'Wine Cellar', 'Smart Automation']
