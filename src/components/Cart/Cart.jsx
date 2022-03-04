import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartList from "../CartList/CartList";
import Form from "../Form/Form";

const Cart = () => {
    const { cartList } = useCartContext()
    
    return <div> 
        {cartList.length !== 0 ? <>
                <CartList />
                <br/>
                <Form />
            </> 
            :
            <> 
                <div className="m-2">
                    <label>No hay productos en el carrito.</label>
                    <br/>
                    <Link to='/'>
                        <button className='btn btn-outline-dark m-2'>Volver al menú</button>
                    </Link>
                </div>
            </>     
        }         
    </div>
};

export default Cart;
