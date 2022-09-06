import { HeaderContainer } from "./style";
import logo from "../../assets/logo.png";
import FilterButtons from "../FilterButtons";
import User from "../../components/User";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/interfaces";
import { BiSearchAlt } from "react-icons/bi";


const Header = () => {
  const { setSearch } = useContext(ProductContext);

  return (
    <HeaderContainer>
      <div className="header-div">
        <img src={logo} alt="logo" />
        <div className="container-search">
          <input
            onChange={(event) => setSearch(event.target.value)}
            type="text"
            placeholder="Buscar item"
          />
          <BiSearchAlt className="icon-search" />
        </div>
        <User />
      </div>
      <FilterButtons />
    </HeaderContainer>
  );
};

export default Header;
