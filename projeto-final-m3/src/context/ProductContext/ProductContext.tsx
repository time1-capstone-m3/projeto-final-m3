import { useEffect, useState } from "react";
import api from "../../services/api";
import { ProductProps, ProductContext, IProduct } from "./interfaces";

function ProductProvider({ children }: ProductProps) {
  const [product, setProduct] = useState<IProduct[]>([]);
  const [cardDestaquePosition, setcardDestaquePosition] = useState<IProduct[]>(
    []
  );

  const [search, setSearch] = useState("");

  const arrayFilter = product.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      product.category.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [product]);

  useEffect(() => {
    const cardPosition = product.filter((elem) => elem.id === 1);
    setcardDestaquePosition(cardPosition);
  }, [product]);

  return (
    <ProductContext.Provider
      value={{
        product,
        cardDestaquePosition,
        search,
        setSearch,
        arrayFilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
