import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getProducts from '../helpers/getProducts.js'
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [list, setList] = useState ([]);
    const [loading, setloading] = useState(true)

    const { idCategory } = useParams()


    useEffect(() => { 
        if(idCategory) {
            getProducts()
            .then(res => setList(res.filter(item => item.categoria===idCategory)))
            .catch(err => console.log(err))
            .finally(()=> setloading(false))   
        } else {
            getProducts()
            .then(res => setList(res))
            .catch(err => console.log(err))  
            .finally(()=> setloading(false))     
        }            
    }, [idCategory]);

    return (
        <>
            { loading ? <h2>Cargando ...</h2> :
                <ItemList list={list} />
            }
        </>
    )
}
export default ItemListContainer;