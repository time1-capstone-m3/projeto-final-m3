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
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
            <option value="EX">Estrangeiro</option>
          </select>
          <span>{errors.state?.message}</span>

          <button className="btn" type="submit">
            Salvar alterações
          </button>
        </form>
      </div>
    </Container>
  );
}

export default EditProfile;
