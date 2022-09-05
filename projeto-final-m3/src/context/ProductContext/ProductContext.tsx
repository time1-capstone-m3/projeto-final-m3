import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { UserContext } from "../UserContext/UserContext";
import {
  ProductProps,
  ProductContext,
  IProduct,
  IProductForm,
} from "./interfaces";

function ProductProvider({ children }: ProductProps) {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
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

  // const cardDestaque = () => {
  //   if (cardDestaquePosition) {
  //     const cardPosition = product.filter((elem) => elem.id === 1);
  //     setcardDestaquePosition(cardPosition);
  //   }
  // };
  useEffect(() => {
    const cardPosition = product.filter((elem) => elem.id === 1);
    setcardDestaquePosition(cardPosition);
  }, [product]);

  const [filterAll, setFilterAll] = useState(true);
  const [filterPcs, setFilterPcs] = useState(false);
  const [filterSmartphones, setFilterSmartphone] = useState(false);
  const [filterAcessorios, setFilterAcessorios] = useState(false);
  const [filterOutros, setFilterOutros] = useState(false);

  const handleFilter = () => {
    if (filterPcs) {
      return product.filter(({ category }) => category === "Computadores");
    }
    if (filterSmartphones) {
      return product.filter(({ category }) => category === "Smartphones");
    }
    if (filterAcessorios) {
      return product.filter(({ category }) => category === "Acessórios");
    }
    if (filterOutros) {
      return product.filter(({ category }) => category === "Outros");
    }
    if (filterAll) {
      return product;
    }
  };

  async function createProduct(
    formData: IProductForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    try {
      console.log("formData", formData);
      setLoading(true);
      const token = JSON.parse(localStorage.getItem("@token") || "");
      console.log("token", token);
      //   api.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await api.post("/products", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const desapego = { ...response.data, userId: `${user?.id}` };
      console.log("desapego", desapego);
      setProduct([...product, desapego]);
      toast.success("Desapego adicionado com sucesso!");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ProductContext.Provider
      value={{
        product,
        cardDestaquePosition,
        handleFilter,
        setFilterAll,
        setFilterPcs,
        setFilterSmartphone,
        setFilterAcessorios,
        setFilterOutros,
        createProduct,
        loading,
        setLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
