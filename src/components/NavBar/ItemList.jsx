import Item from "./Item";

const ItemList = ({list}) => {
    
    return (
        <div>
            {list.map((items) => <Item 
                    key={items.id} 
                    nombre={items.nombre} 
                    precio={items.precio} 
                    imag={items.foto} 
                    categoria={items.categoria}
                    />)
            }          
        </div>
    )
};

export default ItemList;
