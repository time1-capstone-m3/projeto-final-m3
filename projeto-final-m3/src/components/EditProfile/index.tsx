import Container from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../context/UserContext/UserContext";
import { EditData } from "../../context/UserContext/interfaces";
import { useContext } from "react";
import { formSchemaEdit } from "../../validations/editProfile";
import { IoMdClose } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

function EditProfile() {
  const { edit, setModal, user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditData>({
    resolver: yupResolver(formSchemaEdit),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      tel: user?.tel,
      imgUrl: user?.imgUrl,
    },
  });

  return (
    <Container>
      <div className="modal">
        <div className="title">
          <h4>
            <FaEdit /> Editar dados
          </h4>
          <IoMdClose className="close" onClick={() => setModal(false)} />
        </div>
        <form onSubmit={handleSubmit((register) => edit(register))}>
          <label htmlFor="name">Nome</label>
          <input
            className="grey-input"
            type="text"
            {...register("name")}
            id="name"
            placeholder={user?.name}
          />
          <span>{errors.name?.message}</span>

          <label htmlFor="email">Email</label>
          <input
            className="grey-input"
            type="text"
            {...register("email")}
            id="email"
            placeholder={user?.email}
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="tel">Telefone</label>
          <input
            className="grey-input"
            type="text"
            {...register("tel")}
            id="tel"
            placeholder={user?.tel}
          />
          <span>{errors.tel?.message}</span>

          <label htmlFor="imgUrl" className="labelImg">
            Imagem
          </label>
          <input
            className="grey-input"
            type="text"
            {...register("imgUrl")}
            id="imgUrl"
            placeholder={user?.imgUrl}
          />
          <span>{errors.email?.message}</span>

          <label className="labelState" htmlFor="estado">
            Estado
          </label>
          <select className="grey-input" id="estado" {...register("state")}>
            <option value="Acre">Acre</option>
            <option value="Alagoas">Alagoas</option>
            <option value="Amap??">Amap??</option>
            <option value="Amazonas">Amazonas</option>
            <option value="Bahia">Bahia</option>
            <option value="Cear??">Cear??</option>
            <option value="Distrito Federal">Distrito Federal</option>
            <option value="Esp??rito Santo">Esp??rito Santo</option>
            <option value="Goi??s">Goi??s</option>
            <option value="Maranh??o">Maranh??o</option>
            <option value="Mato Grosso">Mato Grosso</option>
            <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
            <option value="Minas Gerais">Minas Gerais</option>
            <option value="Par??">Par??</option>
            <option value="Para??ba">Para??ba</option>
            <option value="Paran??">Paran??</option>
            <option value="Pernambuco">Pernambuco</option>
            <option value="Piau??">Piau??</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
            <option value="Rond??nia">Rond??nia</option>
            <option value="Roraima">Roraima</option>
            <option value="Santa Catarina">Santa Catarina</option>
            <option value="S??o Paulo">S??o Paulo</option>
            <option value="Sergipe">Sergipe</option>
            <option value="Tocantins">Tocantins</option>
          </select>
          <span>{errors.state?.message}</span>

          <button className="btn" type="submit">
            Salvar altera????es
          </button>
        </form>
      </div>
    </Container>
  );
}

export default EditProfile;
