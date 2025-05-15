export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetFAQResponse {
  faqs: FAQItem[];
}
