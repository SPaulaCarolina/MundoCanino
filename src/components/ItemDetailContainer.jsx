import {useState, useEffect} from 'react'
import getProducts from './helpers/getProducts.js'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const productId = 1;

    useEffect(() => {             
        getProducts()
        .then((data) => {
        setProduct(data.find((prod) => prod.id === productId));
        })
        .catch(err => console.log(err));      
    }, []);
    
    return (
        <>
            <ItemDetail product={product} />        
        </>
    );
}

export default ItemDetailContainer;
