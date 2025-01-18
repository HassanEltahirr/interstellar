export interface Section {
  title: string;
  content: string;
}

export interface Link {
  title: string;
  url: string;
}

export interface Phenomenon {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  sections: Section[];
  links: Link[];
  isFeatured: boolean;
  image?: string; // Optional image property
}