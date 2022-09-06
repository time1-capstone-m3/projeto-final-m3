import { UserContext } from "../../context/UserContext/UserContext";
import { useContext } from "react";
import { ContainerCardPerfil } from "./style";
import EditProfile from "../EditProfile";

const CardPerfil = () => {
  const { user, setModal, modal} = useContext(UserContext);
  return user ? (
    <ContainerCardPerfil>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.tel}</p>
        <p>{user.state}</p>
        <button className="buttonPerfil" onClick={() => setModal(true)}>
          Editar dados
        </button>
      </div>
      <img src={user.imgUrl} alt="imagem do produto" />
    </ContainerCardPerfil>
  ) : (
    <p>Cadastre-se</p>
  );
};

export default CardPerfil;
