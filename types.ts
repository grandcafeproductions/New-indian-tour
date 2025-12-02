export interface ServiceItem {
  id: number;
  title: string;
  image: string;
  isSpecial?: boolean;
}

export interface NewsItem {
  id: number;
  date: string;
  monthYear: string;
  title: string;
  description: string;
  image: string;
  tags?: string[];
}

export interface MaterialItem {
  id: number;
  title: string;
  image: string;
}