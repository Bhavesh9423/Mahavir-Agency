export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  rating: number;
  comment: string;
  avatar: string;
  clientType: 'College Director' | 'Office Manager' | 'Retail Customer' | 'Art Director' | 'Govt Purchaser';
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Prof. Rajesh Sharma',
    role: 'Academy Director',
    organization: 'Excel Training Institute',
    rating: 5,
    comment: 'Mahavir Agency has been supplying our institute with exam answer sheets, notebooks, study kits, and whiteboard markers for over 7 years. Their wholesale rates and punctual delivery before academic terms are unmatched.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    clientType: 'College Director'
  },
  {
    id: 'test-2',
    name: 'Priya Mehta',
    role: 'Procurement Head',
    organization: 'Apex Financial Services Ltd.',
    rating: 5,
    comment: 'We buy all our corporate office supplies—lever arch files, A4 paper reams, printer ink, desktop calculators, and sticky notes—from Mahavir Agency. Genuine quality and super quick service!',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    clientType: 'Office Manager'
  },
  {
    id: 'test-3',
    name: 'Anand Verma',
    role: 'Managing Director',
    organization: 'Verma Engineering College',
    rating: 5,
    comment: 'The quality of drawing paper, graph notebooks, and technical pens supplied for our engineering students is outstanding. Highly recommended for bulk educational procurement.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    clientType: 'Govt Purchaser'
  },
  {
    id: 'test-4',
    name: 'Kavita Patel',
    role: 'Senior Graphic Designer & Artist',
    organization: 'Creative Studio',
    rating: 5,
    comment: 'As an artist, finding authentic acrylic paints, canvas boards, and fine liners at wholesale rates was difficult until I discovered Mahavir Agency. Their novelty and art collection is brilliant!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    clientType: 'Art Director'
  }
];
