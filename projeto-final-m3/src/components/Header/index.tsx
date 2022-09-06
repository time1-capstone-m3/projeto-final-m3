import { HeaderContainer } from "./style";
import logo from "../../assets/logo.png";
import FilterButtons from "../FilterButtons";
import User from "../../components/User";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header-div">
        <User />
        <img src={logo} alt="logo" />
        <input type="text" />
        <button>Entre</button>
      </div>
      <FilterButtons />
    </HeaderContainer>
  );
};

export default Header;
