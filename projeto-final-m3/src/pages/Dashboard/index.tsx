import { useContext } from 'react';
import Card from '../../components/Card';
import CardPrincipal from '../../components/CardPrincipal';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { ProductContext } from '../../context/productContext';
import { Container, Wrapper, ProductsList } from './style';

const Dashboard = () => {
    const { cardDestaquePosition } = useContext(ProductContext);

    console.log(cardDestaquePosition);
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
