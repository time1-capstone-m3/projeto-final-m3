import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/interfaces";
import { CardContainer } from "./style";
import { BiLocationPlus } from "react-icons/bi";

const ItemProfile = () => {
  const { product } = useContext(ProductContext);
  const id = localStorage.getItem("@id");

  const productUser = product.filter((elem) => String(elem.userId) == id);
  const productRecebido = product.filter((elem) => elem.isDonatedTo == id);

  console.log(productRecebido);

  return (
    <>
      {productRecebido.map((elem) => {
        return (
          <CardContainer key={elem.id}>
            <div className="div-img">
              <img
                className="imgProduct"
                src={elem.image}
                alt="imagem do produto"
              />
            </div>
            <div
              className={elem.condition === "Novo" ? "div-text" : "div-text-1"}
            >
              <p className="title3">{elem.name}</p>
              <p className="state title2">{elem.condition}</p>
              <div className="div-loc-icon">
                <p className="title2">{elem.state}</p>
                <BiLocationPlus size={21} />
              </div>
            </div>
          </CardContainer>
        );
      })}
    </>
  );
};

export default ItemProfile;
