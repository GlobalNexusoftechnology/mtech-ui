export interface Product {
  id: number;
  title: string;
  price: number;
};

export interface ProductState {
  loading: boolean;
  data: Product[];
  error: string | null;
};