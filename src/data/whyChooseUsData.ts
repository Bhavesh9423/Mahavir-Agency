export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
}

export const WHY_CHOOSE_US_DATA: BenefitItem[] = [
  {
    id: 'b-1',
    title: 'Premium Quality',
    description: 'We source only top-tier, high-GSM paper and precision-crafted stationery instruments.',
    iconName: 'Award',
    accentColor: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'b-2',
    title: 'Affordable Pricing',
    description: 'Direct manufacturer relationships guarantee maximum value for every customer.',
    iconName: 'BadgePercent',
    accentColor: 'from-amber-500 to-yellow-600'
  },
  {
    id: 'b-3',
    title: 'Wholesale Rates',
    description: 'Unbeatable tier pricing for bulk institutional, college, and commercial buyers.',
    iconName: 'TrendingDown',
    accentColor: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'b-4',
    title: 'Retail Sales',
    description: 'Friendly walk-in counter offering single items with premium service for students & individuals.',
    iconName: 'Store',
    accentColor: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'b-5',
    title: 'Bulk Orders',
    description: 'Specialized order processing with flexible payment plans and custom branding options.',
    iconName: 'PackageCheck',
    accentColor: 'from-violet-500 to-purple-600'
  },
  {
    id: 'b-6',
    title: 'Trusted Brand',
    description: 'Over decades of reputation built on integrity, genuine products, and customer trust.',
    iconName: 'ShieldCheck',
    accentColor: 'from-blue-600 to-cyan-500'
  },
  {
    id: 'b-7',
    title: 'Genuine Products',
    description: '100% authentic stationery from authorized brand distributors with quality seals.',
    iconName: 'CheckCircle2',
    accentColor: 'from-amber-600 to-orange-500'
  },
  {
    id: 'b-8',
    title: 'Fast Service',
    description: 'Swift order fulfillment, rapid inquiry responses, and express local delivery.',
    iconName: 'Zap',
    accentColor: 'from-yellow-500 to-amber-600'
  },
  {
    id: 'b-9',
    title: 'Wide Product Range',
    description: 'Over 7,000+ catalog items covering college, office, paper, art, and novelty needs.',
    iconName: 'Layers',
    accentColor: 'from-sky-500 to-blue-600'
  },
  {
    id: 'b-10',
    title: 'Customer Satisfaction',
    description: 'Dedicated support team ensuring every inquiry and purchase exceeds expectations.',
    iconName: 'Smile',
    accentColor: 'from-rose-500 to-pink-600'
  }
];
