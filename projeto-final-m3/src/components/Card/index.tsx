import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/productContext";
import { CardContainer } from "../../styles/card";

const Card = () => {
  const { product } = useContext(ProductContext);
  return (
    <>
      {product?.map((elem, id) => (
        <CardContainer key={id}>
          <img src={elem.image} alt="imagem do produto" />
          <div>
            <p>{elem.name}</p>
            <p className="state">{elem.condition}</p>
            <p>
              {elem.state}
              <img src="./iconeLocation.png" alt="icone localização" />
            </p>
          </div>
        </CardContainer>
      ))}
    </>
  );
};

export default Card;
