import * as yup from "yup";

export const formSchemaResgistration = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório"),
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
  state: yup.string().required("Módulo obrigatório"),
});
