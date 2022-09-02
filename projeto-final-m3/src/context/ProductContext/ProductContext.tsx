import { useEffect, useState } from 'react';
import { ProductProps, ProductContext, IProduct } from './interfaces';

function ProductProvider({ children }: ProductProps) {
    const [product, setProduct] = useState<IProduct[]>([]);
    const [cardDestaquePosition, setcardDestaquePosition] = useState<
        IProduct[]
    >([]);

    useEffect(() => {
        fetch(`https://json-server-time1-m3.herokuapp.com/products`)
            .then(response => response.json())
            .then(response => setProduct(response))
            .catch(err => console.log(err));
    }, []);

    // const cardDestaque = () => {
    //   if (cardDestaquePosition) {
    //     const cardPosition = product.filter((elem) => elem.id === 1);
    //     setcardDestaquePosition(cardPosition);
    //   }
    // };
    useEffect(() => {
        const cardPosition = product.filter(elem => elem.id === 1);
        setcardDestaquePosition(cardPosition);
    }, [product]);

    const [filterAll, setFilterAll] = useState(true);
    const [filterPcs, setFilterPcs] = useState(false);
    const [filterSmartphones, setFilterSmartphone] = useState(false);
    const [filterAcessorios, setFilterAcessorios] = useState(false);
    const [filterOutros, setFilterOutros] = useState(false);

    const handleFilter = () => {
        if (filterPcs) {
            return product.filter(
                ({ category }) => category === 'Computadores'
            );
        }
        if (filterSmartphones) {
            return product.filter(({ category }) => category === 'Smartphones');
        }
        if (filterAcessorios) {
            return product.filter(({ category }) => category === 'Acessórios');
        }
        if (filterOutros) {
            return product.filter(({ category }) => category === 'Outros');
        }
        if (filterAll) {
            return product;
        }
    };

    return (
        <ProductContext.Provider
            value={{
                product,
                cardDestaquePosition,
                handleFilter,
                setFilterAll,
                setFilterPcs,
                setFilterSmartphone,
                setFilterAcessorios,
                setFilterOutros,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;
