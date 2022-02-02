import {useState, useEffect} from 'react'
import getProducts from './helpers/getProducts.js'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const { idProduct } = useParams()

    useEffect(() => {             
        getProducts()
        .then(res => 
            setProduct(res.find(item => item.id === idProduct)))
        .catch(err => console.log(err))
    }, [idProduct]);
    
    return (
        <>
            <ItemDetail product={product} />        
        </>
    );
}

export default ItemDetailContainer;
