import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCartContext } from "../context/CartContext";

const ItemDetail = ({product}) => {
  const {cartList, addItem} = useCartContext();
  
  function onAdd(cant) {
    addItem( {element: product, cantidad: cant} )
  }
  console.log(cartList)
    return (
      <div>
        <div>
          <h1>Producto: {product.name}</h1>
          <h4>Categoria: {product.category}</h4>
          <p>{product.description}</p>
          <h4>Precio: ${product.price}</h4>
          <img src= {product.image} alt="foto" />
        </div>
        <div className="mt-2">
            <ItemCount stock={3} initial={1} onAdd={onAdd} /> 
            <div>
              <Link to='/cart'>
                <Button variant='outline-info'>Terminar Compra</Button>
              </Link>
            </div>
        </div>
      </div>  
    );
}

export default ItemDetail;