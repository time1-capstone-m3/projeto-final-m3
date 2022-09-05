import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserContext';
import { Container } from './styles';
import {useContext} from 'react'

const User = () => {
    const { buttonProps, itemProps, isOpen } = useDropdownMenu(2);
    const {user} = useContext(UserContext)

    return (
        <Container>
            <button {...buttonProps}>{user ? user.nome : 'Entre ou cadastra-se'}</button>
            <div className={isOpen ? 'visible' : ''} role="menu">
                <a {...itemProps[0]} href="https://example.com">
                    Acessa perfil
                </a>
                <Link to='/' {...itemProps[1]}>
                    Sair
                </Link>
            </div>
        </Container>
    );
};

export default User;
