import Login from "../../components/Login";
import logoLogin from "../../assets/logoLogin.png";
import imgInitial from "../../assets/imgInitial.svg";
import Registration from "../../components/Registration";
import { useContext, useEffect } from "react";
import Footer from "../../components/Footer";
import { Container, ContainerPai } from "./style";
import { HiUserAdd } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";
import { UserContext } from "../../context/UserContext/UserContext";
import { useNavigate } from "react-router-dom";

function LoginRegister() {
  const { user, loginUser, setLoginUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  return (
    <>
      <ContainerPai>
        <Container>
          <img className="LogoInicial" src={logoLogin} alt="Logo da desapega" />
          <section>
            <button
              onClick={(e) => {
                e.preventDefault();
                setLoginUser(true);
              }}
              className="login buttonInitial"
              autoFocus
            >
              <FiLogIn />
              Login
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setLoginUser(false);
              }}
              className="buttonInitial"
            >
              <HiUserAdd />
              Cadastro
            </button>
          </section>
          {loginUser ? <Login /> : <Registration />}
        </Container>
        <img
          className="img"
          src={imgInitial}
          alt="imagem de um usuário mexendo no celular"
        />
      </ContainerPai>
      <Footer />
    </>
  );
}

export default LoginRegister;
