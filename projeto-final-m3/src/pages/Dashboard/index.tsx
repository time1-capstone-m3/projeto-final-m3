import Card from "../../components/Card";
import CardPrincipal from "../../components/CardPrincipal";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  Container,
  Wrapper,
  ProductsList,
  DivProdutos,
  DivCardPrincipal,
} from "./style";

const Dashboard = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <DivProdutos>
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
