export interface GalleryItem {
  id: string;
  title: string;
  category: 'Showroom' | 'Office Supply' | 'School Gear' | 'Paper Stock' | 'Luxury Pens';
  image: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Mahavir Agency Grand Wholesale Showroom',
    category: 'Showroom',
    image: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?q=80&w=1200&auto=format&fit=crop',
    description: 'Our spacious multi-floor showroom displaying over 10,000+ school, college, and corporate stationery items.'
  },
  {
    id: 'gal-2',
    title: 'Bulk A4 & Copier Paper Stock Warehouse',
    category: 'Paper Stock',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1200&auto=format&fit=crop',
    description: 'Pallets of high-whiteness A4 copier reams ready for immediate wholesale distribution to businesses and institutions.'
  },
  {
    id: 'gal-3',
    title: 'Luxury Executive Writing Instruments',
    category: 'Luxury Pens',
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=1200&auto=format&fit=crop',
    description: 'Exclusive display of metallic rollerballs, fountain pens, and corporate gift boxed sets.'
  },
  {
    id: 'gal-4',
    title: 'School Art & Craft Activity Material Display',
    category: 'School Gear',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop',
    description: 'Comprehensive section dedicated to paints, chart papers, geometry kits, and project materials.'
  },
  {
    id: 'gal-5',
    title: 'Corporate Office Filing & Organizer Hub',
    category: 'Office Supply',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    description: 'Lever arch files, display folders, desktop organizers, and calculators for modern office desks.'
  },
  {
    id: 'gal-6',
    title: 'Premium Hardbound Notebooks & Registers',
    category: 'School Gear',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop',
    description: 'Custom ruling, thread-bound notebooks and accounting registers for academic and business records.'
  }
];
