import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({product}) => {
  const {addItem} = useCartContext();
  
  function onAdd(cant) {
    addItem( {element: product, quantity: cant} )
  }

  return (
      <div>
        <div className="d-flex justify-content-center">
          <div className="d-inline-flex p-2">
            <img src= {product.image} alt="foto" className="w-100" />
          </div>
          <div className="p-2 w-75">
            <h1>{product.name}</h1>
            <h6>{product.category} | ID del producto: {product.id}</h6>
            <br/>
            <p>{product.description}</p>
            <br/>
            <h4>Precio: ${product.price}</h4>
            <div className="mt-2">
              <ItemCount stock={product.stock} initial={1} onAdd={onAdd} /> 
              <div>
                <Link to='/'>
                  <Button variant="outline-secondary" className="m-1">Seguir comprando</Button>
                </Link>
                <Link to='/cart'>
                  <Button variant="outline-secondary" className="m-1">Terminar Compra</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>  
  );
}

export default ItemDetail;