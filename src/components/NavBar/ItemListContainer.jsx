import { useEffect, useState } from "react"
import getProducts from '../helpers/getProducts.js'
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [list, setList] = useState ([]);

    useEffect(() => {             
        getProducts()
        .then((data) => 
        setList(data))
        .catch(err => console.log(err));      
    }, []);

    return (
        <>
            <div id='saludo'>
                Bienvenido a MundoCanino!
            </div>
            <ItemList list={list} />
        </>
    )
}
export default ItemListContainer;