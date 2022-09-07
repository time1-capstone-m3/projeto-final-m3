import { useContext } from 'react';
import CardPerfil from '../../components/CardPerfil';
import EditProfile from '../../components/EditProfile';
import Header from '../../components/Header';
import MainProfile from '../../components/MainProfile';
import { UserContext } from '../../context/UserContext/UserContext';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer';

const Profile = () => {
    const { modal } = useContext(UserContext);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {modal && <EditProfile />}
            <Header render={false} />
            <CardPerfil />
            <MainProfile />
            
            <Footer />
        </motion.div>
    );
};

export default Profile;
