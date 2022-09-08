/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
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
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [productMain, setProductMain] = useState<IProduct>({} as IProduct);

  const [productDonate, setProductDonate] = useState<IProduct>({} as IProduct);

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
      (product.name.toLowerCase().includes(search.toLocaleLowerCase()) &&
        product.isDonated === false) ||
      (product.category
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase()) &&
        product.isDonated === false)
  );

  useEffect(() => {
    const cardPosition = product.filter((elem) => elem.id === 1);
    setcardDestaquePosition(cardPosition);
  }, [product]);

  async function createProduct(
    formData: IProductForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    try {
      setLoading(true);
      const token = localStorage.getItem("@token");

      const newFormData = {
        ...formData,
        state: user?.state,
        isDonated: false,
        userId: `${user?.id}`,
      };

      const response = await api.post("/products", newFormData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProduct([...product, response.data]);
      toast.success("Desapego adicionado com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Algo deu errado!");
    } finally {
      setLoading(false);
    }
  }

  const addProduct = (id: string | null) => {
    const userId = localStorage.getItem("@id");
    const token = localStorage.getItem("@token");

    console.log(userId, token);

    const body = {
      isDonated: "true",
      isDonatedTo: userId,
    };

    api
      .patch(`/products/${id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    toast.success("Aproveite seu produto!");
    navigate("/");
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        search,
        setSearch,
        cardDestaquePosition,
        createProduct,
        loading,
        setLoading,
        arrayFilter,
        productMain,
        setProductMain,
        addProduct,
        productDonate,
        setProductDonate,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
