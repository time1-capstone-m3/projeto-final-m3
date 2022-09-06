import * as yup from "yup";

export const formSchemaEdit = yup.object().shape({
  name: yup.string().required(),
  tel: yup.string().required().matches(/(\(?\d{2}\)?\s)?(\d{4,5}-\d{4})/g,"Telefone deverá está no formato (61) 98293-9382"),
  email: yup.string().required().matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,'email precisa ser "teste@teste.com"'),
  imgUrl: yup.string().required(),
  state: yup.string().required(),
});
