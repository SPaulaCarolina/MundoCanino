import { Link } from 'react-router-dom'
import imag from './carrito.png'
import { Badge } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {
    const { quantity } = useCartContext()
    return (
            <Link to='/cart'>
                <Badge>{ quantity() !== 0 && quantity()}</Badge>
                <img 
                    src={imag} 
                    alt='carrito' 
                    className='m-2'
                    width="40"
                    height="40"
                />
            </Link>  
    )
}

export default CartWidget
