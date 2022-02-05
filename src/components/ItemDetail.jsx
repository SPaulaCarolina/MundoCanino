import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({product}) => {
  const [counter, setCounter] = useState(0);
  function onAdd(cant) {
    setCounter(cant)
  }
    return (
      <div>
        <div>
          <h1>Producto: {product.nombre}</h1>
          <h4>Id: {product.id} Categoria: {product.categoria}</h4>
          <h4>Precio: ${product.precio}</h4>
          <img src= {product.foto} alt="foto" />
        </div>
        <div className="mt-2">
          {
            counter === 0 ?
            <ItemCount stock={3} initial={1} onAdd={onAdd} /> 
            :
            <div>
              <Link to='/'>
                <Button>Seguir Comprando</Button>
              </Link>
              <Link to='/cart'>
                <Button>Terminar Compra</Button>
              </Link>
            </div>
          }
          
        </div>
      </div>  
    );
}

export default ItemDetail;