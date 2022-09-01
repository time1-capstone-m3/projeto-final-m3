import { useContext } from 'react';
import { ProductContext } from '../../context/productContext';
import { CardContainer } from '../../styles/card';

const Card = () => {
    // {if(id!=1){

    // }}
    const { product } = useContext(ProductContext);
    return (
        <>
            {product?.map((elem, id) => {
                if (id !== 0) 
                    return (
                        <CardContainer key={id}>
                            <img src={elem.image} alt="imagem do produto" />
                            <div>
                                <p>{elem.name}</p>
                                <p className="state">{elem.condition}</p>
                                <p>
                                    {elem.state}
                                    <img
                                        src="./iconeLocation.png"
                                        alt="icone localização"
                                    />
                                </p>
                            </div>
                        </CardContainer>
                    );
                
            })}
        </>
    );
};

export default Card;
