import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartList, removeCart} = useCartContext()

  return (
    <div>
       { cartList.map(item => (
        <li>{item.nombre} Precio: {item.precio} Cantidad: {item.cantidad}</li>
      ))}
      <button onClick={removeCart} >Vaciar Carrito</button>
    </div>
  )
};

export default Cart;
