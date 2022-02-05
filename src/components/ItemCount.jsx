import { useState } from 'react';
import { Badge, Button } from 'react-bootstrap';



function ItemCount( { stock, initial, onAdd }) {
    const [count, setCount] = useState ( initial )
    const adicionar = () => {
            if ( count < stock ){
            setCount( count+1 )
        }
    }
    const disminuir = () => {
        setCount( count-1 )
    }
    const agregar = () => {
      onAdd( count )
  }
  return (
    <div>
      <Button onClick={ adicionar } variant="outline-dark">+</Button> <Badge bg="secondary">{ count }</Badge> <Button onClick={ disminuir } variant="outline-dark">-</Button>
      <br /><Button onClick={ agregar } variant="outline-dark btn-block">AGREGAR AL CARRITO</Button>
    </div>
  )
}

export default ItemCount;