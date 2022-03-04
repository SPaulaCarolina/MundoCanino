import { useCartContext } from '../../context/CartContext'
import './CartList.css'

const CartList = () => {
    const { cartList, removeCart, removeItem, totalAmount } = useCartContext ()
    
    return (
            <>
                {cartList.map(el => 
                    <div className='m-2'>
                        <li className='list-style'> 
                            <img 
                                src={el.element.image} 
                                alt='Item' 
                                width={25}
                                className="m-1"
                            /> 
                            {el.element.name}. 
                            <div>
                                Precio: ${el.element.price}. Cantidad: {el.quantity}
                                <button onClick={() => removeItem(el.element.id)} className='btn btn-outline-secondary btn-sm m-1'>X</button>
                            </div>
                        </li>
                    </div> 
                )}
                {`Total a pagar: $${totalAmount()}`}
                <br/>
                <button onClick={removeCart} className="btn-block btn btn-outline-secondary m-2" >Vaciar Carrito</button>
            </>
    )
}

export default CartList