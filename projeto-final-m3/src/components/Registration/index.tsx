import Container from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../context/UserContext/UserContext";
import { useContext } from "react";
import { RegisterData } from "../../context/UserContext/interfaces";
import { formSchemaResgistration } from "../../validations/Registration";

function Registration() {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: yupResolver(formSchemaResgistration),
  });

  return (
    <Container>
      <form onSubmit={handleSubmit(registerUser)}>
        <label htmlFor="nome">Nome</label>
        <input
          className="grey-input"
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
          id="nome"
        />
        <span>{errors.name?.message}</span>

        <label htmlFor="email">Email</label>
        <input
          className="grey-input"
          type="text"
          placeholder="Email"
          {...register("email")}
          id="email"
        />
        <span>{errors.email?.message}</span>

        <label htmlFor="senha">Senha</label>
        <input
          className="grey-input"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
          id="senha"
        />
        <span>{errors.password?.message}</span>

        <label htmlFor="confirmacaoSenha">Senha</label>
        <input
          className="grey-input"
          type="password"
          placeholder="Digite novamente sua senha"
          {...register("confirmPassword")}
          id="confirmacaoSenha"
        />
        <span>{errors.password?.message}</span>

        <label className="labelState" htmlFor="estado">
          Estado
        </label>
        <select className="grey-input" id="estado" {...register("state")}>
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
          <option value="EX">Estrangeiro</option>
        </select>
        <span>{errors.state?.message}</span>
        <>
          <button type="submit">Cadastre-se</button>
        </>
      </form>
    </Container>
  );
}

export default Registration;
