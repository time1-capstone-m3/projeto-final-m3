import Container from "../../styles/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../context/UserContext/UserContext";
import { LoginData } from "../../context/UserContext/interfaces";
import { useContext } from "react";
import { formSchemaLogin } from "../../validations/Login";

function Login() {
  const { login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(formSchemaLogin),
  });

  return (
    <Container>
      <form onSubmit={handleSubmit((register) => login(register))}>
        <label className="title4" htmlFor="email">
          E-mail
        </label>
        <input
          className="grey-input"
          type="text"
          placeholder="E-mail"
          {...register("email")}
          id="email"
        />
        <span>{errors.email?.message}</span>

        <label className="title4" htmlFor="senha">
          Senha
        </label>
        <input
          className="grey-input"
          type="password"
          placeholder="Senha"
          {...register("password")}
          id="senha"
        />
        <span>{errors.password?.message}</span>

        <button className="bg-dark" type="submit">
          Entrar
        </button>
      </form>
    </Container>
  );
}

export default Login;
