import ItemProfile from "../ItemProfile";
import { Container } from "./styles";

const MainProfile = () => {

  return (
    <Container>
      <div className="header">
        <div>Meus Items</div>
      </div>
      <div className="card-item">
        <ul>
          <ItemProfile />
        </ul>
      </div>
    </Container>
  );
};

export default MainProfile;
