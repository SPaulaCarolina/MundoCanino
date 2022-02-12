import { useContext, createContext, useState } from "react";

const CartContext = createContext() 

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    
    function addItem(element) {
        const index = cartList.findIndex(prod => prod.element.id === element.element.id )

        if (index === -1) {
            setCartList( [ ...cartList, element ] )
        } else {
            const cant = cartList[index].cantidad
            cartList[index].cantidad = element.cantidad + cant
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
        return cartList.reduce((acum, prod) =>  acum= acum + (prod.element.precio * prod.cantidad)  ,0)
    }

    const cantidad = () => {
        return cartList.reduce((acum, prod) =>  acum += prod.cantidad  ,0)
    }


    return (
        <CartContext.Provider value={{cartList, addItem, removeCart, cantidad, totalAmount, removeItem}}>
            {children}
        </CartContext.Provider>)
};

export default CartContextProvider;
