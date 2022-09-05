import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserContext';
import { Container } from './styles';
import { useContext } from 'react';
import teste from '../../assets/teste.svg'

const User = () => {
    const { buttonProps, itemProps, isOpen } = useDropdownMenu(2);
    const { user } = useContext(UserContext);

    return (
        <Container>
            <div>
                <button {...buttonProps}>
                    {user ? user.nome : 'Entre ou cadastra-se'}
                    <img src={teste} alt="" />
                </button>
                <div className={isOpen ? 'visible' : ''} role="menu">
                    <a {...itemProps[0]} href="https://example.com">
                        Acessar perfil
                    </a>
                    <Link to="/" {...itemProps[1]}>
                        Sair
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default User;
