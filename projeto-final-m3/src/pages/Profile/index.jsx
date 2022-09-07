import { useContext } from "react";
import CardPerfil from "../../components/CardPerfil";
import EditProfile from "../../components/EditProfile";
import Header from "../../components/Header";
import MainProfile from "../../components/MainProfile";
import { UserContext } from "../../context/UserContext/UserContext";

const Profile = () => {
  const { modal } = useContext(UserContext);

  return (
    <>
      {modal && <EditProfile />}
      <Header render={false} />
      <CardPerfil />
      <MainProfile />
    </>
  );
};

export default Profile;
