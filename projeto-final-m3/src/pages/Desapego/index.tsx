import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Form from "../../Form";
import { Wrapper } from "../Dashboard/style";
import DesapegoContainer from "./style";
import contentCadastro from "../../assets/content-cadastro-produto.svg";

const Desapego = () => {
  return (
    <Wrapper>
      <Header />
      <DesapegoContainer>
        <section className="content-section">
          <img src={contentCadastro} alt="" />
          <h1 className="title1 color-green bold">
            Hora de fazer alguém feliz, desapegando!
          </h1>
        </section>
        <section className="form-section">
          <Form>
            <label htmlFor="name" className="title4 semibold">
              Nome do produto
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome do produto"
              className="grey-input"
            />

            <label htmlFor="description" className="title4 semibold">
              Descrição
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Detalhe sobre o seu produto e suas condições de uso"
              className="grey-input big-input"
            />

            <label htmlFor="image" className="title4 semibold">
              Foto do produto
            </label>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="URL da foto do produto"
              className="grey-input"
            />

            <div className="flex-column">
              <div>
                <label htmlFor="state" className="title4 semibold">
                  Estado de uso
                </label>
                <select name="state" id="state" className="grey-input">
                  <option value="" disabled selected>
                    Selecione
                  </option>
                  <option value="Novo">Novo</option>
                  <option value="Usado">Usado</option>
                </select>
              </div>
              <div>
                <label htmlFor="category" className="title4 semibold">
                  Categoria
                </label>
                <select name="category" id="category" className="grey-input">
                  <option value="" disabled selected>
                    Selecione
                  </option>
                  <option value="Computadores">Computadores</option>
                  <option value="Smartphones">Smartphones</option>
                  <option value="Acessórios">Acessórios</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
            </div>
            <button type="submit" className="bg-dark">
              Desapegar!
            </button>
          </Form>
        </section>
      </DesapegoContainer>
      <Footer />
    </Wrapper>
  );
};

export default Desapego;
