export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Wholesale Supply',
    description: 'Bulk distribution of genuine stationery stock directly to retail shops, dealers, and educational suppliers at competitive rates.',
    iconName: 'Boxes',
    badge: 'Wholesale Tier'
  },
  {
    id: 'srv-2',
    title: 'Retail Store',
    description: 'A modern physical and online store where students, teachers, and walk-in shoppers can purchase single items with expert advice.',
    iconName: 'ShoppingBag',
    badge: 'Retail Walk-In'
  },
  {
    id: 'srv-3',
    title: 'Bulk Orders & Contracts',
    description: 'Specialized corporate & institutional procurement packages with scheduled batch deliveries, custom billing, and credit terms.',
    iconName: 'Truck',
    badge: 'B2B Procurement'
  },
  {
    id: 'srv-4',
    title: 'Academy & Institutional Programs',
    description: 'Complete study material kits, answer sheets, art materials, and classroom whiteboard accessories.',
    iconName: 'GraduationCap',
    badge: 'Institutional'
  },
  {
    id: 'srv-5',
    title: 'College & University Stationery',
    description: 'Engineering drawing tools, spiral project notebooks, graph sheets, calculators, and dissertation binding supplies.',
    iconName: 'BookOpen',
    badge: 'Higher Ed'
  },
  {
    id: 'srv-6',
    title: 'Office & Corporate Supply',
    description: 'Lever arch files, copier paper reams, printer ink, toners, desk organizers, desktop calculators, and sticky notes.',
    iconName: 'Building2',
    badge: 'Corporate'
  },
  {
    id: 'srv-7',
    title: 'Custom Branding & Gifts',
    description: 'Personalized corporate gift boxes, embossed executive diaries, custom logo pens, and novelty promotional giveaways.',
    iconName: 'Gift',
    badge: 'Custom Print'
  },
  {
    id: 'srv-8',
    title: 'Doorstep Express Delivery',
    description: 'Reliable, safe, and fast doorstep shipping for office, college, and commercial orders with real-time dispatch tracking.',
    iconName: 'Zap',
    badge: 'Fast Dispatch'
  }
];
