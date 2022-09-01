import { useEffect, useState } from "react";
import { ProductProps, ProductContext, IProduct } from "./interfaces";

function ProductProvider({ children }: ProductProps) {
  const [product, setProduct] = useState<IProduct[]>([]);
  const [cardDestaquePosition, setcardDestaquePosition] = useState<IProduct[]>(
    []
  );

  useEffect(() => {
    fetch(`https://json-server-time1-m3.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => setProduct(response))
      .catch((err) => console.log(err));
  }, []);

  const cardDestaque = () => {
    if (cardDestaquePosition) {
      const cardPosition = product.filter((elem) => elem.id === 1);
      setcardDestaquePosition(cardPosition);
    }
  };

  return (
    <ProductContext.Provider value={{ product, cardDestaque }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
