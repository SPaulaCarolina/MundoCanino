import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartList, removeCart, removeItem, totalAmount} = useCartContext()

  return (
    <div>
      <div>
        {cartList.length !== 0 ?<>
            {cartList.map(el => 
                <div>
                  <li>
                    {el.element.nombre} Precio: ${el.element.precio} Cantidad: {el.cantidad}  
                    <button onClick={() => removeItem(el.element.id)} className='btn btn-outline-info m-1'>X</button>
                  </li>
                  </div> ) }
            {`La suma es $${totalAmount()}`}
          </>
          :
          <div>
            <label>No hay productos en el carrito.</label>
            <Link to='/'>
              <button className='btn btn-outline-info'>Volver al menú</button>
            </Link>
          </div>
        }
      </div>
      <button onClick={removeCart} className="btn-block btn btn-info" >Vaciar Carrito</button>
    </div>
  )
};

export default Cart;
