import {useState, useEffect} from 'react'
import getProducts from './helpers/getProducts.js'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const productoId = 1;

    useEffect(() => {             
        getProducts()
        .then((data) => {
            setProducto(data.find((prod) => prod.id === productoId));
            })
            .catch(err => console.log(err));      
    }, []);  
    
    return (
        <>
            <ItemDetail producto={producto} />        
        </>
    );
}

export default ItemDetailContainer
