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
import {motion} from "framer-motion"

function LoginRegister() {
  const { user, loginUser, setLoginUser } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    if (user?.name) {
      navigate("/");
    }
  }, [user]);

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
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
    </motion.div>
  );
}

export default LoginRegister;
