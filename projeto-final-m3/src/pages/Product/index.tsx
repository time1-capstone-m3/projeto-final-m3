import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Wrapper } from "../Dashboard/style";
import ProductPageContainer from "./style";
import contentDesapego from "../../assets/content-desapego.svg";
import { ProductContext } from "../../context/ProductContext/interfaces";
import contentCadastro from "../../assets/content-cadastro-produto.svg";
import { Link, useNavigate } from "react-router-dom";
import { BiLocationPlus } from "react-icons/bi";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";

const ProductPage = () => {
  const { product, productDonate, addProduct } = useContext(ProductContext);
  const { allUsers } = useContext(UserContext);
  const idProduct = localStorage.getItem("@productId");

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header render={false} />
      <ProductPageContainer>
        <section className="left-section">
          <div className="back-to-home">
            <button className="button-home" onClick={() => navigate("/")}>
              Voltar ao ínicio
            </button>
          </div>
          <div className="content-section">
            <img src={contentDesapego} alt="" />
            <h1 className="title1 color-green bold">
              Confira mais detalhes sobre esse desapego...
            </h1>
          </div>
        </section>
        <section className="product-section shadow bg-white">
          <div className="details-top">
            <div className="image-container">
              <img src={productDonate?.image} alt="" />
            </div>
            <div className="infos-container">
              <h2 className="title2 bold">
                {productDonate?.name.toUpperCase()}
              </h2>
              <span className="title3 semibold">
                {productDonate?.state} <BiLocationPlus size={16} />
              </span>
              <h3 className="title3 bold">Descrição</h3>
              <p className="title4">{productDonate?.description}</p>
            </div>
          </div>
          <div className="details-bottom">
            <button
              onClick={() => addProduct(idProduct)}
              className="bg-dark title2 color-light semibold"
            >
              Pegar item
            </button>
          </div>
        </section>
      </ProductPageContainer>
      <Footer />
    </Wrapper>
  );
};

export default ProductPage;
