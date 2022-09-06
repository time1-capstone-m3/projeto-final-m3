import { HeaderContainer } from "./style";
import logo from "../../assets/logo.png";
import FilterButtons from "../FilterButtons";
import User from "../../components/User";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/interfaces";


const Header = () => {
  const { setSearch} = useContext(ProductContext);

  return (
    <HeaderContainer>
      <div className="header-div">
        <img src={logo} alt="logo" />
        <input
          onChange={(event) => setSearch(event.target.value)}
          type="text"
        />
        <User />
      </div>
      <FilterButtons />
    </HeaderContainer>
  );
};

export default Header;
