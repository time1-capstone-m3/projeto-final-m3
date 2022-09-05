import { UserContext } from "../../context/UserContext/UserContext";
import { useContext } from "react";
import { ContainerCardPerfil } from "./style";

const CardPerfil = () => {
  const { user } = useContext(UserContext);
  return user ? (
    <ContainerCardPerfil>
      <div>
        <p>{user.nome}</p>
        <p>{user.email}</p>
        <p>{user.tel}</p>
        <p>{user.state}</p>
        <button className="buttonPerfil">Editar dados</button>
      </div>
      <img src={user.imgUrl} alt="imagem do produto" />
    </ContainerCardPerfil>
  ) : (
    <p>Cadastre-se</p>
  );
};

export default CardPerfil;
