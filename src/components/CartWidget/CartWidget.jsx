import { Link } from 'react-router-dom'
import imag from './carrito.png'

const CartWidget = () => {
    return (
        <Link to='/cart'>
            <div>
                <img src={imag} alt='carrito' className='w-5' />
                Mi Carrito
            </div>
        </Link>   
    )
}

export default CartWidget
