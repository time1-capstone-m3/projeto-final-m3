import { HeaderContainer } from "./style";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="logo" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
