import Login from "../../components/Login"
import logoLogin from '../../assets/logoLogin.png'
import imgInitial from '../../assets/imgInitial.svg'
import Registration from "../../components/Registration";
import { useState } from "react";
import Footer from "../../components/Footer";
import {Container , ContainerPai } from "./style";
import {HiUserAdd} from 'react-icons/hi'
import {FiLogIn} from 'react-icons/fi'

function LoginRegister(){
  const [login, setLogin] = useState(true)

  return (
    <>
      <ContainerPai>
        <Container>
          <img className="LogoInicial" src={logoLogin} alt="Logo da desapega" />
          <section>
            <button onClick={(e) => {
              e.preventDefault();
              setLogin(true);
              
            }} className='login buttonInitial' autoFocus><FiLogIn/>Login</button>
            <button onClick={(e) => {
              e.preventDefault();
              setLogin(false);

            }} className='buttonInitial'><HiUserAdd />Cadastro</button>
          </section>
          {login? <Login /> : <Registration />}
        </Container>
        <img className="img" src={imgInitial} alt='imagem de um usuário mexendo no celular' />
      </ContainerPai>
      <Footer/>
    </>
    
      
      
  );
}

export default LoginRegister

