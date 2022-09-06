import { ReactNode, createContext } from "react";

export interface ProductProps {
  children: ReactNode;
}

export interface ProducProviderData {
  product: IProduct[];
  search: string;
  setSearch: (data: string) => void;
  cardDestaquePosition: IProduct[];
<<<<<<< HEAD
  createProduct: (
    formData: IProductForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
=======
  arrayFilter: IProduct[];
>>>>>>> e102865db44a75c94f50a95d5794e2e8b4910291
}

export const ProductContext = createContext<ProducProviderData>(
  {} as ProducProviderData
);

export interface IProduct {
  condition: string;
  id: number;
  image: string;
  isDonated: string;
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
}
