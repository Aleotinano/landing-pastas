export interface Group {
  name: string;
  quantity: string;
  description: string;
  varieties: readonly Variety[];
}

export interface Variety {
  name: string;
  price: number;
}
