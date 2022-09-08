import { HeaderContainer } from "./style";
import logo from "../../assets/logo.png";
import FilterButtons from "../FilterButtons";
import User from "../../components/User";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/interfaces";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

interface IRender {
  render: boolean;
}

const Header = ({ render }: IRender) => {
  const { setSearch } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      {render ? (
        <>
          <div className="header-div">
            <img onClick={() => navigate("/")} src={logo} alt="logo" />
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
        </>
      ) : (
        <>
          <div className="header-div">
            <img onClick={() => navigate("/")} src={logo} alt="logo" />
            <User />
          </div>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
