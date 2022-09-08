import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ProductContext } from "../../context/ProductContext/interfaces";
import { UserContext } from "../../context/UserContext/UserContext";
import { ContainerButtons } from "./styles";

const FilterButtons = () => {
  const { setSearch } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <ContainerButtons>
        <div>
          <button
            className="btn-filter"
            autoFocus
            onClick={() => setSearch("")}
          >
            Todos
          </button>
          <button
            className="btn-filter"
            onClick={() => setSearch("Computadores")}
          >
            Computadores
          </button>
          <button
            className="btn-filter"
            onClick={() => setSearch("Smartphones")}
          >
            Smartphones
          </button>
          <button
            className="btn-filter"
            onClick={() => setSearch("Acessórios")}
          >
            Acessórios
          </button>
          <button className="btn-filter" onClick={() => setSearch("Outros")}>
            Outros
          </button>
        </div>
        <button
          className="button-donate"
          onClick={() => {
            if (user?.name) navigate("/donate");
            else {
              toast.info("Você precisa estar logado");
              navigate("/login");
            }
          }}
        >
          Quero Doar um item
        </button>
      </ContainerButtons>
    </>
  );
};

export default FilterButtons;
