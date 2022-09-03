import { ReactNode, createContext } from "react";

export interface ProductProps {
  children: ReactNode;
}

export interface ProducProviderData {
  product: IProduct[];
  search: string;
  setSearch: (data: string) => void;
  cardDestaquePosition: IProduct[];
  arrayFilter: IProduct[];
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
  userId: number;
  category: string;
}
