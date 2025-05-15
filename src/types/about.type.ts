export interface SocialMediaLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

export interface Company {
  id: number;
  companyName: string;
  companyDescription: string;
  visionStatement: string;
  visionMotto: string;
  phoneNumber: string;
  email: string;
  address: string;
  socialMediaLinks: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetAbout {
  data: Company[];
}
