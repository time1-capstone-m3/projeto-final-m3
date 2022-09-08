import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Wrapper } from "../Dashboard/style";
import ProductPageContainer from "./style";
import contentDesapego from "../../assets/content-desapego.svg";
import { ProductContext } from "../../context/ProductContext/interfaces";
import { Link } from "react-router-dom";
import { BiLocationPlus } from "react-icons/bi";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";

const ProductPage = () => {
  const { product } = useContext(ProductContext);
  const { allUsers } = useContext(UserContext);

  return (
    <Wrapper>
      <Header render={false} />
      <ProductPageContainer>
        <section className="left-section">
          <div className="back-to-home">
            <Link to={"/"} className="title4 color-grey">
              Voltar ao início
            </Link>
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
              <img src={product[1].image} alt="" />
            </div>
            <div className="infos-container">
              <h2 className="title2 bold">{product[1].name.toUpperCase()}</h2>
              <span className="title3 semibold">
                {product[1].state} <BiLocationPlus size={16} />
              </span>
              <h3 className="title3 bold">Descrição</h3>
              <p className="title4">{product[1].description}</p>
            </div>
          </div>
          <div className="details-bottom">
            <div>
              <h3 className="title3">
                Por: {allUsers[Number(product[1].userId)].name}
              </h3>
              <h4 className="title4">
                Telefone: {allUsers[Number(product[1].userId)].tel}
              </h4>
            </div>
            <button className="bg-dark title2 color-light semibold">
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
