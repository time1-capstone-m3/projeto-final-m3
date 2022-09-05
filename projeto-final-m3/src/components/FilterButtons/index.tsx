import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext/interfaces";

const FilterButtons = () => {
  const { arrayFilter, setSearch } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="btn-filter">
        <button autoFocus onClick={() => setSearch("")}>
          Todos
        </button>
        <button onClick={() => setSearch("Computadores")}>Computadores</button>
        <button onClick={() => setSearch("Smartphones")}>Smartphones</button>
        <button onClick={() => setSearch("Acessórios")}>Acessórios</button>
        <button onClick={() => setSearch("Outros")}>Outros</button>
      </div>
      <button>Quero Doar</button>
    </div>
  );
};

export default FilterButtons;
