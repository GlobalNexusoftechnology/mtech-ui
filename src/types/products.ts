import { CategoriesEnum } from "@/data/category"

export interface ProductType {
  id: number;
  title: string;
  image: string;
  price: {
    amount: string;
    unit: string;
  };
  specs: {
    cooling: string;
    phase: string;
    capacity: string;
    usage: string;
  };
  tag: string;
  category: CategoriesEnum;
  buttonLabel: string;
}

export interface FullProductType extends ProductType {
  desc: string;
  sku:string,
  gallery: string[];
  specifications: string[][];
  keyFeatures: string[];
  badge: string;
}