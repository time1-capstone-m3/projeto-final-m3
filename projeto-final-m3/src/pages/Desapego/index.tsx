import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FormContainer from "../../components/Form";
import { Wrapper } from "../Dashboard/style";
import DesapegoContainer from "./style";
import contentCadastro from "../../assets/content-cadastro-produto.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IProductForm,
  ProductContext,
} from "../../context/ProductContext/interfaces";
import { formSchemaProduct } from "../../validations/Product";
import { useContext } from "react";
import userEvent from "@testing-library/user-event";
import { UserContext } from "../../context/UserContext/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Desapego = () => {
  const { user } = useContext(UserContext);
  const { loading, setLoading, createProduct } = useContext(ProductContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductForm>({
    resolver: yupResolver(formSchemaProduct),
  });

  const navigate = useNavigate();

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
          <FormContainer>
            <form
              onSubmit={handleSubmit((formData) =>
                createProduct(formData, setLoading)
              )}
            >
              <label htmlFor="name" className="title4 semibold">
                Nome do produto
              </label>
              <input
                type="text"
                id="name"
                placeholder="Nome do produto"
                className="grey-input"
                {...register("name")}
              />
              <span>{errors.name?.message}</span>

              <label htmlFor="description" className="title4 semibold">
                Descrição
              </label>
              <textarea
                id="description"
                placeholder="Detalhe sobre o seu produto e suas condições de uso"
                className="grey-input big-input"
                {...register("description")}
              />
              <span>{errors.description?.message}</span>

              <label htmlFor="image" className="title4 semibold">
                Foto do produto
              </label>
              <input
                type="text"
                id="image"
                placeholder="URL da foto do produto"
                className="grey-input"
                {...register("image")}
              />
              <span>{errors.image?.message}</span>

              <div className="flex-column">
                <div>
                  <label htmlFor="condition" className="title4 semibold">
                    Estado de uso
                  </label>
                  <select
                    id="condition"
                    className="grey-input"
                    {...register("condition")}
                  >
                    <option value="Novo">Novo</option>
                    <option value="Usado">Usado</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="category" className="title4 semibold">
                    Categoria
                  </label>
                  <select
                    id="category"
                    className="grey-input"
                    {...register("category")}
                  >
                    <option value="Computadores">Computadores</option>
                    <option value="Smartphones">Smartphones</option>
                    <option value="Acessórios">Acessórios</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="bg-dark" disabled={loading}>
                {loading ? "Carregando" : "Desapegar!"}
              </button>
            </form>
          </FormContainer>
        </section>
      </DesapegoContainer>
      <Footer />
    </Wrapper>
  );
};

export default Desapego;
