import { Link } from 'react-router-dom'
import imag from './carrito.png'

const CartWidget = () => {
    return (
        <Link to='/cart'>
            <button className='btn btn-outline-info'>
                <img src={imag} alt='carrito' className='w-5' />
                Mi Carrito
            </button>
        </Link>   
    )
}

export default CartWidget
