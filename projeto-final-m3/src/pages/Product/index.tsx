import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FormContainer from "../../components/Form";
import { Wrapper } from "../Dashboard/style";
import ProductPageContainer from "./style";
import contentCadastro from "../../assets/content-cadastro-produto.svg";
import { ProductContext } from "../../context/ProductContext/interfaces";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { product } = useContext(ProductContext);

  return (
    <Wrapper>
      <Header />
      <ProductPageContainer>
        <section className="left-section">
          <div className="back-to-home">
            <Link to={"/"} className="title4 color-grey">
              Voltar ao início
            </Link>
          </div>
          <div className="content-section">
            <img src={contentCadastro} alt="" />
            <h1 className="title1 color-green bold">
              Hora de fazer alguém feliz, desapegando!
            </h1>
          </div>
        </section>
        <section className="details-section">
          <FormContainer>
            <h2 className="title2 bold">NOME DO PRODUTO</h2>
            <span className="title3">Estado</span>
            <h3 className="title3 semibold">Descrição</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              modi dignissimos doloremque esse vel voluptate pariatur earum,
              impedit illum, sapiente reprehenderit possimus aspernatur nobis
              harum minus eveniet autem est. Pariatur.
            </p>
          </FormContainer>
        </section>
      </ProductPageContainer>
      <Footer />
    </Wrapper>
  );
};

export default ProductPage;
