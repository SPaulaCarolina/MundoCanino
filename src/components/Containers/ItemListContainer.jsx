import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    const [list, setList] = useState ([]);
    const [loading, setloading] = useState(true)
    const { idCategory } = useParams()

    useEffect(() => { 
        const db = getFirestore()
        const queryCollection = collection(db, 'products')        
        const queryFilter = !idCategory ? 
            queryCollection                
            : 
            query(queryCollection, 
                where('category', '==', idCategory)    
            )    
        getDocs(queryFilter)
        .then(res => setList( res.docs.map(product => ( { id: product.id, ...product.data() } )  ) ))
        .catch((err) => console.log(err))
        .finally(() => setloading(false))          
    }, [idCategory]);

    return (
        <>
            { loading ? <h2>Cargando ...</h2> :
                <ItemList list={list} />
            }
            <p>2022	&copy; Copyright MundoCanino. Todos los derechos reservados</p>
        </>
    )
}
export default ItemListContainer;