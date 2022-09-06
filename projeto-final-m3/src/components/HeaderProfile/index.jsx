import Container from "./styles";
import { FiLogOut } from "react-icons/fi";
import logo from "../../assets/logo.png";

const HeaderProfile = () => {
  return (
    <Container>
      <div className="header">
        <img src={logo} alt="logo" />
        <div className="dropdown">
          <div className="triangle"></div>
          <button className="dropbtn">Helena</button>
          <div className="dropdown-content">
            <div className="logout">
              <FiLogOut />
              <span>Sair</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeaderProfile;
