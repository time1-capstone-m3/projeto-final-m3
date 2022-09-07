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
import {motion} from "framer-motion"

const Dashboard = () => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.5 }}
  >
    <Wrapper>
      <Header render={true} />
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
    </motion.div>
  );
};

export default Dashboard;
