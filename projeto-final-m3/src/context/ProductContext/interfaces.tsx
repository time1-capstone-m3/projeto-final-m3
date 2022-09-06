import { ReactNode, createContext } from "react";

export interface ProductProps {
  children: ReactNode;
}

export interface ProducProviderData {
  product: IProduct[];
  search: string;
  setSearch: (data: string) => void;
  cardDestaquePosition: IProduct[];
  createProduct: (
    formData: IProductForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  arrayFilter: IProduct[];
  productMain: IProduct;
  setProductMain: (data: IProduct) => void;
}

export const ProductContext = createContext<ProducProviderData>(
  {} as ProducProviderData
);

export interface IProduct {
  condition: string;
  id: number;
  image: string;
  isDonated: boolean;
  name: string;
  state: string;
  userId: string;
  category: string;
  description: string;
}

export interface IProductForm {
  name: string;
  description: string;
  image: string;
  state: string;
  category: string;
  condition?: string;
}
