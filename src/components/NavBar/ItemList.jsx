import { CardGroup } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({list}) => {
    
    return (
        <CardGroup>
            {list.map( item => <Item 
                    id={item.id}
                    name={item.name} 
                    price={item.price} 
                    image={item.image} 
                    category={item.category}
                    description={item.description}
                    />)
            }        
        </CardGroup>  
        
    )
};

export default ItemList;
