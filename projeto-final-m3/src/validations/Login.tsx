import * as yup from "yup";

export const formSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Deve ser um e-mail"),
  password: yup.string().required("Senha Obrigatória"),
});
