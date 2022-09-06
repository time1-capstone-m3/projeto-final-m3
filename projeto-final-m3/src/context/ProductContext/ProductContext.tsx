<<<<<<< HEAD
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
=======
import { useEffect, useState } from "react";
import api from "../../services/api";
import { ProductProps, ProductContext, IProduct } from "./interfaces";

function ProductProvider({ children }: ProductProps) {
>>>>>>> e102865db44a75c94f50a95d5794e2e8b4910291
  const [product, setProduct] = useState<IProduct[]>([]);
  const [cardDestaquePosition, setcardDestaquePosition] = useState<IProduct[]>(
    []
  );

<<<<<<< HEAD
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

=======
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

>>>>>>> e102865db44a75c94f50a95d5794e2e8b4910291
  return (
    <ProductContext.Provider
      value={{
        product,
        cardDestaquePosition,
<<<<<<< HEAD
        handleFilter,
        setFilterAll,
        setFilterPcs,
        setFilterSmartphone,
        setFilterAcessorios,
        setFilterOutros,
        createProduct,
        loading,
        setLoading,
=======
        search,
        setSearch,
        arrayFilter,
>>>>>>> e102865db44a75c94f50a95d5794e2e8b4910291
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
