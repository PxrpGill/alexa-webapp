export type PriceItem = {
    code?: string;
    name: string;
    price: number | string;
    group?: string;
};

export type PriceCategory = {
    title: string;
    slug: string;
    items: PriceItem[];
};
