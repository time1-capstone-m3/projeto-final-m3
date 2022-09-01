import { createContext, ReactNode, useEffect, useState } from "react";

interface ProductProps {
  children: ReactNode;
}

interface ProducProviderData {
  product: IProduct[];
}

export const ProductContext = createContext<ProducProviderData>(
  {} as ProducProviderData
);

interface IProduct {
  condition: string;
  id: number;
  image: string;
  isDonated: string;
  name: string;
  state: string;
  userId: number;
}

function ProductProvider({ children }: ProductProps) {
  const [product, setProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch(`https://json-server-time1-m3.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => setProduct(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;