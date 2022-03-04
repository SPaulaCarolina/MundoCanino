import { useContext, createContext, useState } from "react";

const CartContext = createContext([]) 

export function useCartContext() {return useContext(CartContext)}

const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([])
    
    function addItem(element) {
        const index = cartList.findIndex( prod => prod.element.id === element.element.id )

        if (index === -1) {
            setCartList( [ ...cartList, element ] )
        } else {
            const cant = cartList[index].quantity
            cartList[index].quantity = element.quantity + cant
            const newCartList = [ ...cartList ]
            setCartList(newCartList)
        }
    }
    function removeCart() {
        setCartList([])    
    }
    function removeItem(id) {
        setCartList( cartList.filter( prod => prod.element.id !== id ) )
    }
    function totalAmount() {
        return cartList.reduce((acum, prod) =>  acum= acum + (prod.element.price * prod.quantity)  ,0)
    }

    const quantity = () => {
        return cartList.reduce((acum, prod) =>  acum += prod.quantity  ,0)
    }

    return  <CartContext.Provider value={{cartList, addItem, removeCart, quantity, totalAmount, removeItem}}>
                {children}
            </CartContext.Provider>
};

export default CartContextProvider;
