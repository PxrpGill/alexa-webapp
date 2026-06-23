export type PriceItem = {
  code?: string;
  name: string;
  price: number | string;
};

export type PriceCategory = {
  title: string;
  slug: string;
  items: PriceItem[];
};
