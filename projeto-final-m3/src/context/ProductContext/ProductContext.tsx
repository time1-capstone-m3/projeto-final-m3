import { useEffect, useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
