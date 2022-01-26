import { useEffect, useState } from "react"
import { getFetch } from "../helpers/mock"
import Item from "./Item";

const ItemList = () => {
    const [productos, setProductos] = useState ([])
    const [loading, setloading] = useState(true)
    
    useEffect(() => {
        getFetch
        .then(res => setProductos(res))
        .catch(err => console.log(err))
        .finally(()=> setloading(false))      
    }, [])
    
    return (
        <div>
            { loading ? <h2>LOADING...</h2> : 
                productos.map((prod) => <Item prod= {prod} />)
            }          
        </div>
    )
};

export default ItemList;
