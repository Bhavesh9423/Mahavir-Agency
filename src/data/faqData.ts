export interface FAQItem {
  id: string;
  category: 'Wholesale' | 'Retail' | 'Delivery' | 'Bulk Orders' | 'Payment';
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Wholesale',
    question: 'Do you offer special wholesale pricing for colleges and corporate offices?',
    answer: 'Yes! Mahavir Agency & Novelty specializes in bulk wholesale pricing. Institutions, colleges, coaching academies, and corporate offices receive discounted tier pricing depending on order quantities and recurring supply contracts.'
  },
  {
    id: 'faq-2',
    category: 'Bulk Orders',
    question: 'What is the Minimum Order Quantity (MOQ) for wholesale orders?',
    answer: 'MOQ varies by product line. For example, A4 copier paper reams have an MOQ of 10 reams, while custom notebooks have an MOQ of 20 units. Retail customers can purchase single units anytime at our store.'
  },
  {
    id: 'faq-3',
    category: 'Delivery',
    question: 'Do you provide doorstep delivery for bulk and institutional orders?',
    answer: 'Absolutely. We offer fast doorstep delivery across the city and surrounding commercial hubs for bulk orders. Same-day or next-day delivery options are available for urgent corporate requests.'
  },
  {
    id: 'faq-4',
    category: 'Retail',
    question: 'Can individual students and retail customers purchase directly from the store?',
    answer: 'Yes! Our retail counter welcomes students, parents, teachers, and walk-in shoppers. You get access to the same genuine, top-quality stationery brands at competitive retail prices.'
  },
  {
    id: 'faq-5',
    category: 'Payment',
    question: 'What payment options do you accept for retail and wholesale transactions?',
    answer: 'We accept Cash, UPI (Google Pay, PhonePe, Paytm), Credit/Debit Cards, NEFT/RTGS Bank Transfers, and official Purchase Orders (PO) for verified corporate accounts.'
  },
  {
    id: 'faq-6',
    category: 'Bulk Orders',
    question: 'Can we request custom branding or logo printing on notebooks and pens?',
    answer: 'Yes, we provide custom printing and embossing for corporate diaries, executive notebooks, gift pens, and novelty promotional kits for corporate events and institutional milestones.'
  }
];
