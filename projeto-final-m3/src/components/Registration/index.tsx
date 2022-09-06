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

        <label htmlFor="img" className="labelImg" >Foto do perfil</label>
        <input className="grey-input" type="text" placeholder="Adicione o link da imagem" {...register('imgUrl')} id='img'/>
        <span>{errors.imgUrl?.message}</span>

        <label htmlFor="tel">Telefone</label>
        <input className="grey-input" type="text" placeholder="Ex: 61 982937182" {...register('tel')} id='tel'/>
        <span>{errors.tel?.message}</span>

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
          <option value="Acre">Acre</option>
          <option value="Alagoas">Alagoas</option>
          <option value="Amapá">Amapá</option>
          <option value="Amazonas">Amazonas</option>
          <option value="Bahia">Bahia</option>
          <option value="Ceará">Ceará</option>
          <option value="Distrito Federal">Distrito Federal</option>
          <option value="Espírito Santo">Espírito Santo</option>
          <option value="Goiás">Goiás</option>
          <option value="Maranhão">Maranhão</option>
          <option value="Mato Grosso">Mato Grosso</option>
          <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
          <option value="Minas Gerais">Minas Gerais</option>
          <option value="Pará">Pará</option>
          <option value="Paraíba">Paraíba</option>
          <option value="Paraná">Paraná</option>
          <option value="Pernambuco">Pernambuco</option>
          <option value="Piauí">Piauí</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="Rio Grande do Norte">Rio Grande do Norte</option>
          <option value="Rio Grande do Sul">Rio Grande do Sul</option>
          <option value="Rondônia">Rondônia</option>
          <option value="Roraima">Roraima</option>
          <option value="Santa Catarina">Santa Catarina</option>
          <option value="São Paulo">São Paulo</option>
          <option value="Sergipe">Sergipe</option>
          <option value="Tocantins">Tocantins</option>
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
