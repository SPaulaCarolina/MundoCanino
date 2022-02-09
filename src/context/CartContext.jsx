import { useContext, createContext, useState } from "react";

const CartContext = createContext() 

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    
    function add(element) {
        setCartList([...cartList, element])
    }
    function removeCart() {
        setCartList([])    
    }

    return (
        <CartContext.Provider value={{cartList,add,removeCart}}>
            {children}
        </CartContext.Provider>)
};

export default CartContextProvider;
