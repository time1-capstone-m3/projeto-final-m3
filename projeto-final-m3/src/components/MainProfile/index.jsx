import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/interfaces";
import ItemProfile from "../ItemProfile";
import { Container } from "./styles";

const MainProfile = () => {
  const { filterItem } = useContext(ProductContext);

  return (
    <Container>
      <div className="header">
        <div>Meus Items</div>
        <div>
          <button
            onClick={() => filterItem("Novo")}
            className="btn_profile"
          >
            Recebidos
          </button>
          <button
            onClick={() => filterItem("Usado")}
            className="btn_profile"
          >
            Doados
          </button>
        </div>
      </div>
      <div className="card-item">
        <ul>
          <ItemProfile />
        </ul>
      </div>
    </Container>
  );
};

export default MainProfile;
