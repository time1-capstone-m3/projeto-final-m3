import { useContext } from "react";
import Card from "../../components/Card";
import CardPerfil from "../../components/CardPerfil";
import CardPrincipal from "../../components/CardPrincipal";
import EditProfile from "../../components/EditProfile";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { UserContext } from "../../context/UserContext/UserContext";
import {
  Container,
  Wrapper,
  ProductsList,
  DivProdutos,
  DivCardPrincipal,
} from "./style";

const Dashboard = () => {
  const { modal } = useContext(UserContext);

  return (
    <Wrapper>
      <Header />
      <Container>
        <DivProdutos>
          <CardPerfil />
          {modal && <EditProfile />}
          <DivCardPrincipal>
            <CardPrincipal />
          </DivCardPrincipal>
          <ProductsList>
            <Card />
          </ProductsList>
        </DivProdutos>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Dashboard;
