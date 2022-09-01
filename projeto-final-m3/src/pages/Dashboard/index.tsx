import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, Wrapper, ProductsList } from './style';

const Dashboard = () => {
    return (
        <Wrapper>
            <Header />
            <Container>
                <ProductsList>
                    <Card />
                </ProductsList>
            </Container>
            <Footer />
        </Wrapper>
    );
};

export default Dashboard;
