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
          <h1>Producto: {product.nombre}</h1>
          <h4>Id: {product.id} Categoria: {product.categoria}</h4>
          <h4>Precio: ${product.precio}</h4>
          <img src= {product.foto} alt="foto" />
        </div>
        <div className="mt-2">
            <ItemCount stock={3} initial={1} onAdd={onAdd} /> 
            <div>
              <Link to='/cart'>
                <Button className="btn btn-outline-info">Terminar Compra</Button>
              </Link>
            </div>
        </div>
      </div>  
    );
}

export default ItemDetail;