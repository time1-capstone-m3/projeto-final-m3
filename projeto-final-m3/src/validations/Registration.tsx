import * as yup from "yup";

export const formSchemaResgistration = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").matches(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i, 'email precisa ser "teste@teste.com"'),
  password: yup
    .string()
    .required("Senha Obrigatória")
    .matches(
      /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
      "A senha precisa ter pelo menos uma letra maiúscula, uma minúscula, um dígito e um carácter"
    ),
  confirmPassword: yup
    .string()
    .required("Confirmação obrigatória")
    .oneOf([yup.ref("password")], "Confirmação precisa ser igual a senha"),
  state: yup.string().required("Estado obrigatório"),
  tel: yup.string().required('telefone obrigatório').matches(/(\(?\d{2}\)?\s)?(\d{4,5}-\d{4})/g, 'Telefone deverá está no formato (61) 98293-9382'),
  imgUrl: yup.string(),
});
