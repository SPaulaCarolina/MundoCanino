import { useState } from 'react';
import { Badge, Button } from 'react-bootstrap';

function ItemCount( { stock, initial, onAdd }) {
    const [count, setCount] = useState ( initial )
    const addQ = () => {
      
      if ( count < stock ) {
        setCount( count+1 )
      }
    }
    const reduceQ = () => {
      setCount( count-1 )
    }
    const addToCart = () => {
      onAdd( count )
    }
    
  return (
    <div className='mt-3'>
      <Button onClick={ reduceQ } variant="outline-secondary" size='sm'>-</Button>
      <Badge bg="secondary" className='m-1'>{ count }</Badge> 
      <Button onClick={ addQ } variant="outline-secondary" size='sm'>+</Button>
      <br />
      <Button onClick={ addToCart } variant="outline-secondary" className='m-1'>AGREGAR AL CARRITO</Button>
    </div>
  )
}

export default ItemCount;