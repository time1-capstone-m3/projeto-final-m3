import Card from '../../components/Card';
import CardPrincipal from '../../components/CardPrincipal';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, Wrapper, ProductsList } from './style';

const Dashboard = () => {

    return (
        <Wrapper>
            <Header />
            <Container>
                    <div className='cardprincipal'>
                        <CardPrincipal />
                    </div>
                <ProductsList>
                    <Card />
                </ProductsList>
            </Container>
            <Footer />
        </Wrapper>
    );
};

export default Dashboard;
