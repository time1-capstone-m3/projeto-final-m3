import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/interfaces";
import { CardContainer } from "./style";
import { BiLocationPlus } from "react-icons/bi";

const ItemProfile = () => {

  const { userProduct, filterProduct } = useContext(ProductContext);
  // console.log(userProduct)
  return (
    <>
    {(filterProduct.length > 0 ? filterProduct : userProduct).map((elem: any, id: any) => {
          return (
            <CardContainer key={id}>
              <div className="div-img">
                <img
                  className="imgProduct"
                  src={elem.image}
                  alt="imagem do produto"
                />
              </div>
              <div className={elem.condition === "Novo" ? "div-text" : "div-text-1"}>
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
