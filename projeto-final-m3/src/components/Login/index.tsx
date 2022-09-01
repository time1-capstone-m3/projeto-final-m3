import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Container from "./style";
import { UserContext } from '../../context/UseContext'

function Login() {
  const { onSubmitLogin } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email('Deve ser um e-mail'),
    password: yup.string().required("Senha Obrigatória"),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  })

  return (
    <Container>
      <form onSubmit={handleSubmit((register) => onSubmitLogin(register))}>
        <label className="title4" htmlFor="email">E-mail</label>
        <input className="grey-input" type="text" placeholder="E-mail" {...register('email')} id='email'/>
        <span>{errors.email?.message}</span>

        <label className="title4" htmlFor="senha">Senha</label>
        <input className="grey-input" type="password" placeholder="Senha" {...register('password')} id='senha'/>
        <span>{errors.password?.message}</span>

        <button className="bg-dark" type="submit">Entrar</button>
      </form>
    </Container>
  );

}

export default Login
