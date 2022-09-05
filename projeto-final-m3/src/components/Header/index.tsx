import { HeaderContainer, Container } from './style';
import logo from '../../assets/logo.png';
import User from '../../components/User';

const Header = () => {
    return (
        <HeaderContainer>
            <Container>
                <img className='img-logo' src={logo} alt="logo" />
                <User/>
            </Container>
        </HeaderContainer>
    );
};

export default Header;
