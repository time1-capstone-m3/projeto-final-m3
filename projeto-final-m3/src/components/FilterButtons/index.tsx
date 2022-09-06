import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext/interfaces";
import { ContainerButtons } from "./styles";

const FilterButtons = () => {
  const { setSearch } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <>
      <ContainerButtons>
        <div>
          <button autoFocus onClick={() => setSearch("")}>
            Todos
          </button>
          <button onClick={() => setSearch("Computadores")}>
            Computadores
          </button>
          <button onClick={() => setSearch("Smartphones")}>Smartphones</button>
          <button onClick={() => setSearch("Acessórios")}>Acessórios</button>
          <button onClick={() => setSearch("Outros")}>Outros</button>
        </div>
        <button className="button-donate" onClick={() => navigate("/donate")}>
          Quero Doar um item
        </button>
      </ContainerButtons>
    </>
  );
};

export default FilterButtons;
