import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext/interfaces';
import CardPrincipalLi from './style';
import {BiLocationPlus} from 'react-icons/bi'

const CardPrincipal = () => {
    const { cardDestaquePosition } = useContext(ProductContext);
    return (
        <>
            {cardDestaquePosition.map((elem, id) => {
                if (id === 0)
                    return (
                        <CardPrincipalLi key={id}>
                            <div className="div-img">
                                <img src={elem.image} alt="imagem do produto" />
                            </div>

                            <div className="div-text">
                                <p className='title1'>{elem.name}</p>
                                <p className="state title2 color-grey">
                                    {elem.condition}
                                </p>
                                <div className='div-loc-icon'>
                                    <p className='title2'>
                                        {elem.state}
                                    </p>
                                        <BiLocationPlus size={21}/>
                                </div>
                            </div>
                        </CardPrincipalLi>
                    );
            })}
        </>
    );
};

export default CardPrincipal;
