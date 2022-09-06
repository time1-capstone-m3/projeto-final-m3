import * as yup from "yup";

export const formSchemaProduct = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
  image: yup
    .string()
    .required("URL da imagem obrigatória")
    .url("Deve ser uma URL"),
});
