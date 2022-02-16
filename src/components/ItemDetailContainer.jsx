import {useState, useEffect} from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const { idProduct } = useParams()
    const [loading, setLoading] = useState(true);

    useEffect(() => {             
        const db = getFirestore()      
        const itemRef = doc(db, 'products', idProduct) 
        getDoc(itemRef)
        .then(res => setProduct( { id: res.id, ...res.data() } ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))      
    }, [idProduct]);
    
    return (
        <>
            { loading ? 
                <h2>Cargando ...</h2>
            :         
                <ItemDetail product={product} />  
            }      
        </>
    );
}

export default ItemDetailContainer;
