import { ReactNode, createContext } from "react";

export interface ProductProps {
  children: ReactNode;
}

export interface ProducProviderData {
  product: IProduct[];
  handleFilter: () => void;
  setFilterAll: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterPcs: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterSmartphone: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterAcessorios: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterOutros: React.Dispatch<React.SetStateAction<boolean>>;
  cardDestaquePosition: IProduct[];
  createProduct: (
    formData: IProductForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
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
