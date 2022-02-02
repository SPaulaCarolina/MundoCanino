import { CardGroup } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({list}) => {
    
    return (
        <CardGroup>
            {list.map( item => <Item 
                    id={item.id}
                    nombre={item.nombre} 
                    precio={item.precio} 
                    imag={item.foto} 
                    categoria={item.categoria}
                    />)
            }        
        </CardGroup>  
        
    )
};

export default ItemList;
