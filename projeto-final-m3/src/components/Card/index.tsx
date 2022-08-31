import { CardContainer } from "../../styles/card";
import { useEffect, useState } from "react";

//passar os dados para o contexto de produtos

interface IDados {
  condition: string;
  id: number;
  image: string;
  isDonated: string;
  name: string;
  state: string;
  userId: number;
}

const Card = () => {
  const [product, setProduct] = useState<IDados[]>([]);

  useEffect(() => {
    fetch(`https://json-server-time1-m3.herokuapp.com/products`)
      .then((response) => response.json())
      .then((response) => setProduct(response))
      .catch((err) => console.log(err));
  }, []);

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
