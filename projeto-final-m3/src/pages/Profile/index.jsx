import { useContext } from "react";
import CardPerfil from "../../components/CardPerfil";
import EditProfile from "../../components/EditProfile";
import HeaderProfile from "../../components/HeaderProfile";
import MainProfile from "../../components/MainProfile";
import { UserContext } from "../../context/UserContext/UserContext";

const Profile = () => {

  const { modal } = useContext(UserContext);
  
  return (
    <>
      {modal && <EditProfile />}
      <HeaderProfile />
      <CardPerfil />
      <MainProfile />
    </>
  );
};

export default Profile;
