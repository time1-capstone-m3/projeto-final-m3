import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FormContainer from "../../components/Form";
import { Wrapper } from "../Dashboard/style";
import DonateContainer from "./style";
import contentCadastro from "../../assets/content-cadastro-produto.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IProductForm,
  ProductContext,
} from "../../context/ProductContext/interfaces";
import { formSchemaProduct } from "../../validations/Product";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Donate = () => {
  const { loading, setLoading, createProduct } = useContext(ProductContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductForm>({
    resolver: yupResolver(formSchemaProduct),
  });

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Wrapper>
      <Header render={false}/>
      <DonateContainer>
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
      </DonateContainer>
      <Footer />
    </Wrapper>
    </motion.div>
  );
};

export default Donate;
