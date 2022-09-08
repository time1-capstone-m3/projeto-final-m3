import { UserContext } from "../../context/UserContext/UserContext";
import { Button, Container, LinkNav } from "./styles";
import { useContext } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BsArrowBarRight } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { useState } from "react";

const User = () => {
  const { user, logout } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <div className="container-user">
        <div className="button-container-user">
          <button
            className="button-user"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {user?.email ? (
              <div className="nome-user">
                <AiOutlineDown size={16} />
                <p>{user.name}</p>
                <img
                  className="img-user"
                  src={user.imgUrl}
                  alt="foto de perfil"
                />
              </div>
            ) : (
              <LinkNav className="linknav-top" to="/login">
                Entre ou cadastre-se
              </LinkNav>
            )}
          </button>
        </div>

        <div className={isOpen ? "visible" : "invisible"}>
          <Button>
            <LinkNav to="/profile">
              <FaUserEdit />
              <p>Acessar perfil</p>
            </LinkNav>
          </Button>
          <Button onClick={logout}>
            <LinkNav to="/">
              <BsArrowBarRight />
              <p>Sair</p>
            </LinkNav>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default User;
