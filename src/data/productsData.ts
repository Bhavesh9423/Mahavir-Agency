export interface Product {
  id: string;
  name: string;
  category: string;
  mainCategory: 'office' | 'college' | 'files' | 'art' | 'paper' | 'writing' | 'novelty';
  description: string;
  priceRetail: string;
  priceWholesale: string;
  minOrderQuantity: string;
  image: string;
  rating: number;
  inStock: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  features: string[];
}

export const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'college', label: 'College Stationery' },
  { id: 'office', label: 'Office Essentials' },
  { id: 'files', label: 'Files & Folders' },
  { id: 'writing', label: 'Pens & Pencils' },
  { id: 'paper', label: 'Paper & Printing' },
  { id: 'art', label: 'Art & Craft' },
  { id: 'novelty', label: 'Gifts & Novelties' },
];

export const PRODUCTS_DATA: Product[] = [
  // College & Professional
  {
    id: 'prod-1',
    name: 'Executive Hardbound Premium Notebook (A4 / Single Line)',
    category: 'Notebooks & Registers',
    mainCategory: 'college',
    description: 'High-GSM acid-free paper notebook crafted for smooth writing with fountain pens, gel pens, and pencils. Perfect for students and executives.',
    priceRetail: '₹140',
    priceWholesale: '₹92 / pc',
    minOrderQuantity: '20 Units',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    inStock: true,
    isPopular: true,
    features: ['70 GSM Extra White Paper', 'Waterproof Hardbound Cover', 'Ribbon Bookmark']
  },
  {
    id: 'prod-2',
    name: 'Complete Metal Geometry Box Set',
    category: 'Geometry Box',
    mainCategory: 'college',
    description: 'Precision metal compass, divider, protractor, scales, and eraser set engineered for accurate mathematical drawings.',
    priceRetail: '₹180',
    priceWholesale: '₹115 / pc',
    minOrderQuantity: '15 Units',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    inStock: true,
    isPopular: true,
    features: ['Anti-rust Metal Compass', 'Crystal Clear Acrylic Rulers', 'Sturdy Steel Storage Box']
  },
  {
    id: 'prod-3',
    name: 'Acrylic Painting & Color Palette Kit (24 Shades)',
    category: 'Colors & Art Items',
    mainCategory: 'art',
    description: 'Vibrant, fast-drying non-toxic acrylic colors ideal for canvas, wood, paper, and professional art projects.',
    priceRetail: '₹350',
    priceWholesale: '₹220 / kit',
    minOrderQuantity: '10 Kits',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    inStock: true,
    isNew: true,
    features: ['Rich Pigments', 'Water-resistant when dry', 'Includes 3 Synthetic Brushes']
  },
  {
    id: 'prod-4',
    name: 'Spiral College Graph & Spiral Note Pad Pack',
    category: 'Notebooks',
    mainCategory: 'college',
    description: 'Twin-wire spiral bound college notebook with micro-perforated pages for easy tear-out.',
    priceRetail: '₹120',
    priceWholesale: '₹78 / pc',
    minOrderQuantity: '25 Units',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    inStock: true,
    features: ['160 Pages 75 GSM', 'Polypropylene Spill Proof Cover', 'Pen Holder Loop']
  },

  // Writing Instruments
  {
    id: 'prod-5',
    name: 'Smooth Flow Liquid Ink Rollerball Pen Box (10 Pcs)',
    category: 'Pens',
    mainCategory: 'writing',
    description: 'Ultra-smooth 0.5mm tungsten carbide tip rollerball pens for effortless writing with quick-dry Japanese ink.',
    priceRetail: '₹250 / box',
    priceWholesale: '₹160 / box',
    minOrderQuantity: '10 Boxes',
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=800&auto=format&fit=crop',
    rating: 5.0,
    inStock: true,
    isPopular: true,
    features: ['0.5mm Precision Needle Tip', 'Smudge-proof Quick Dry Ink', 'Ergonomic Rubber Grip']
  },
  {
    id: 'prod-6',
    name: 'Dark HB Graphite Wooden Pencils (Box of 50)',
    category: 'Pencils',
    mainCategory: 'writing',
    description: 'Break-resistant bonded lead pencils ideal for writing, drawing, and standardized test optical scoring.',
    priceRetail: '₹200 / box',
    priceWholesale: '₹130 / box',
    minOrderQuantity: '10 Boxes',
    image: 'https://images.unsplash.com/photo-1520032525096-7bd04a94b5a2?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    inStock: true,
    features: ['Non-toxic Soft Wood', 'Bonded Lead resists breakage', 'Includes Sharpeners & Erasers']
  },
  {
    id: 'prod-7',
    name: 'Fluorescent Chisel Tip Highlighters (Pack of 5)',
    category: 'Highlighters',
    mainCategory: 'writing',
    description: 'Neon pastel highlighters that do not bleed through standard notebook or textbook paper.',
    priceRetail: '₹150 / pack',
    priceWholesale: '₹95 / pack',
    minOrderQuantity: '12 Packs',
    image: 'https://images.unsplash.com/photo-1595760780346-f972eb49709f?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    inStock: true,
    features: ['Dual Line Width (1mm & 4mm)', 'Fast Drying Anti-Smear', 'Anti-Dry Out Technology']
  },
  {
    id: 'prod-8',
    name: 'Permanent Refillable Whiteboard & Glass Markers',
    category: 'Whiteboard Accessories',
    mainCategory: 'office',
    description: 'Dry-erase whiteboard markers with intense low-odor ink that wipes off cleanly without ghosting.',
    priceRetail: '₹180 / set',
    priceWholesale: '₹110 / set',
    minOrderQuantity: '15 Sets',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    inStock: true,
    features: ['Wipes cleanly with magnetic duster', 'Bullet & Chisel options', 'Refillable ink reservoir']
  },

  // Office & Files
  {
    id: 'prod-9',
    name: 'Heavy Duty Box Lever Arch File Folder (80mm Spine)',
    category: 'Files & Folders',
    mainCategory: 'files',
    description: 'Industrial grade board filing folder with steel edge protector, metal finger ring, and index label pocket.',
    priceRetail: '₹160 / file',
    priceWholesale: '₹105 / file',
    minOrderQuantity: '20 Files',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    inStock: true,
    isPopular: true,
    features: ['Holds up to 500 Sheets', 'Rust-Proof Steel Mechanism', 'Spine Label for Indexing']
  },
  {
    id: 'prod-10',
    name: 'Polypropylene Expandable Display Book (40 Pockets)',
    category: 'Clip Files & Folders',
    mainCategory: 'files',
    description: 'Clear transparent sleeve presentation binder for certificates, project reports, and office documents.',
    priceRetail: '₹220',
    priceWholesale: '₹140',
    minOrderQuantity: '15 Units',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    inStock: true,
    features: ['Acid-free Archival Safe Poly', 'Anti-glare Clear Pockets', 'Durable Spine Spine Tag']
  },
  {
    id: 'prod-11',
    name: 'Scientific & Office Desktop Financial Calculator',
    category: 'Calculators',
    mainCategory: 'office',
    description: '12-digit dual solar/battery powered desktop calculator with tax calculation, check-and-correct, and big display.',
    priceRetail: '₹480',
    priceWholesale: '₹340',
    minOrderQuantity: '10 Units',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    inStock: true,
    isPopular: true,
    features: ['Dual Power (Solar + CR2032)', '112-step Check & Correct', 'Durable Keycap Print']
  },
  {
    id: 'prod-12',
    name: 'Heavy Duty Metal Stapler & 2-Hole Punch Set',
    category: 'Staplers & Punch Machines',
    mainCategory: 'office',
    description: 'All-metal construction stapler (24/6, 26/6 pins) paired with 20-sheet capacity paper hole puncher.',
    priceRetail: '₹390 / set',
    priceWholesale: '₹260 / set',
    minOrderQuantity: '10 Sets',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    inStock: true,
    features: ['Staples up to 30 sheets', 'Non-skid Rubber Base', 'Built-in Staple Remover']
  },

  // Paper & Printing
  {
    id: 'prod-13',
    name: 'Premium A4 Copier Paper 75/80 GSM Ream (500 Sheets)',
    category: 'Printer & A4 Paper',
    mainCategory: 'paper',
    description: 'High-whiteness, jam-free copy paper optimized for high-speed laser printers, inkjet, and photocopiers.',
    priceRetail: '₹290 / ream',
    priceWholesale: '₹210 / ream',
    minOrderQuantity: '10 Reams',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop',
    rating: 5.0,
    inStock: true,
    isPopular: true,
    features: ['102% Brightness Rating', 'Zero Paper Dust Jam Prevention', 'Double-sided Printing Capability']
  },
  {
    id: 'prod-14',
    name: 'Glossy Lamination Sheets (125 Micron A4 - Pack of 100)',
    category: 'Lamination Sheets',
    mainCategory: 'paper',
    description: 'Thermal heat lamination pouches for waterproofing ID cards, office documents, certificates, and photos.',
    priceRetail: '₹450 / pack',
    priceWholesale: '₹310 / pack',
    minOrderQuantity: '5 Packs',
    image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    inStock: true,
    features: ['Crystal Clear High Gloss Finish', 'Bubble-free Bonding', '100% Water & Tear Proof']
  },
  {
    id: 'prod-15',
    name: 'Universal Printer Ink Bottles & Toner Cartridge Refills',
    category: 'Printer Ink & Toners',
    mainCategory: 'paper',
    description: 'High-yield OEM equivalent dye ink and laser toner powder for crisp black text and rich vivid photo prints.',
    priceRetail: '₹380 / bottle',
    priceWholesale: '₹240 / bottle',
    minOrderQuantity: '8 Bottles',
    image: 'https://images.unsplash.com/photo-1612815150546-a6a260907f16?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    inStock: true,
    features: ['Up to 6000 pages yield per bottle', 'Anti-clogging formulation', 'Rich Deep Black Density']
  },

  // Novelty & Gifts
  {
    id: 'prod-16',
    name: 'Executive Metal Gift Pen & Leather Keychain Box Set',
    category: 'Gift Items & Novelties',
    mainCategory: 'novelty',
    description: 'Luxury engraved ballpoint pen with handcrafted leather keychain presented in a velvet magnetic gift box.',
    priceRetail: '₹550 / box',
    priceWholesale: '₹370 / box',
    minOrderQuantity: '5 Boxes',
    image: 'https://images.unsplash.com/photo-1585336261026-8f5786372969?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    inStock: true,
    isPopular: true,
    isNew: true,
    features: ['Custom Name Engraving Available', 'Refillable Parker-style Refill', 'Luxury Velvet Packaging']
  },
  {
    id: 'prod-17',
    name: 'Multi-Color Neon Sticky Notes Cube (400 Sheets)',
    category: 'Sticky Notes',
    mainCategory: 'office',
    description: 'Self-adhesive sticky note memo pads in vibrant neon yellow, pink, green, and blue colors for reminders.',
    priceRetail: '₹140',
    priceWholesale: '₹85',
    minOrderQuantity: '15 Cubes',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    inStock: true,
    features: ['Sticks firmly & peels cleanly', 'No residue left behind', 'Recycled Eco Paper']
  },
  {
    id: 'prod-18',
    name: 'Heavy Duty Office Cash & Accounting Ledger Register',
    category: 'Accounting Books & Registers',
    mainCategory: 'office',
    description: 'Hardcover bound ledger book with ledger ruling, index columns, and foil stamped spine for official bookkeeping.',
    priceRetail: '₹320',
    priceWholesale: '₹210',
    minOrderQuantity: '10 Registers',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    inStock: true,
    features: ['80 GSM Thread Bound Paper', 'Serial Numbered Pages', 'Gold Foil Title Embossing']
  }
];
