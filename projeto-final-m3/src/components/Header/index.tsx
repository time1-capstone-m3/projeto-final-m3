import { HeaderContainer } from "./style";
import logo from "../../assets/logo.png";
import FilterButtons from "../FilterButtons";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header-div">
        <img src={logo} alt="logo" />
        <input type="text" />
        <button>Entre</button>
      </div>

      <FilterButtons />
    </HeaderContainer>
  );
};

export default Header;
