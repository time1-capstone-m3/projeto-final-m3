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

  const [userProduct, setUserProduct] = useState<IProduct[]>([]);
  const [filter, setFilter] = useState(true);
  const [filterProduct, setFilterProduct] = useState<any>([]);

  const [productUser, setProductUser] = useState<IProduct[]>([]);
  const [productDashboard, setProductDashboard] = useState<IProduct[]>([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProduct(res.data);
        setProductDashboard(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const arrayFilter = productDashboard.filter(
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
      setProductDashboard([...productDashboard, response.data]);
      toast.success("Desapego adicionado com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Algo deu errado!");
    } finally {
      setLoading(false);
    }
  }

  function filterItem(itemFilter: any) {
    setFilter(itemFilter);
    console.log(itemFilter);
  }

  /*  useEffect(() => {
    const newFilter = product.filter((elem) => elem.isDonated === filter);
    setFilterProduct(newFilter);
  }, [product, filter]);

  useEffect(() => {
    const id = localStorage.getItem("@id");
    console.log(id);

    const filter = product.filter((elem) => elem.userId === String(id));
    console.log(filter);
    setUserProduct(filter);
  }, []); */

  const addProduct = (product: IProduct) => {
    /* const userId = localStorage.getItem("@id");
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
      .catch((err) => console.log(err)); */

    const filter = productDashboard.filter((elem) => elem.id !== product.id);
    setProductDashboard(filter);
    setProductUser([...productUser, product]);
    toast.success("Parabéns!");
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
        filterItem,
        filterProduct,
        userProduct,
        addProduct,
        productDashboard,
        setProductDashboard,
        productUser,
        setProductUser,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
