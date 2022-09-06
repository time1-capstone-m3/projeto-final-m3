import { HeaderContainer } from "./style";
import logo from "../../assets/logo.png";
<<<<<<< HEAD
=======
import FilterButtons from "../FilterButtons";
import User from '../../components/User';
>>>>>>> e102865db44a75c94f50a95d5794e2e8b4910291

const Header = () => {
  return (
    <HeaderContainer>
<<<<<<< HEAD
      <div>
        <img src={logo} alt="logo" />
      </div>
=======
      <div className="header-div">
      <User/>
        <img src={logo} alt="logo" />
        <input type="text" />
        <button>Entre</button>
      </div>
      <FilterButtons />
>>>>>>> e102865db44a75c94f50a95d5794e2e8b4910291
    </HeaderContainer>
  );
};

export default Header;
