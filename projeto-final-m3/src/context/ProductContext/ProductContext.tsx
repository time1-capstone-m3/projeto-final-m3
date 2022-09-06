import { useEffect, useState } from "react";
import api from "../../services/api";
import { ProductProps, ProductContext, IProduct } from "./interfaces";

function ProductProvider({ children }: ProductProps) {
  const [product, setProduct] = useState<IProduct[]>([]);
  const [cardDestaquePosition, setcardDestaquePosition] = useState<IProduct[]>(
    []
  );

  const [search, setSearch] = useState("");

  const [productMain, setProductMain] = useState<IProduct>({} as IProduct);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [product]);

  const arrayFilter = product.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      product.category.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  // console.log(arrayFilter);

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
        productMain,
        setProductMain,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
