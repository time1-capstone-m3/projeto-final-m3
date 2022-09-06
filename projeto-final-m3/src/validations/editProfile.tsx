import * as yup from "yup";

export const formSchemaEdit = yup.object().shape({
  name: yup.string(),
  tel: yup.string(),
  email: yup.string(),

  imgUrl: yup.string(),
  state: yup.string(),
});
