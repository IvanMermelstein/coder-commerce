import React, { useContext, useState } from 'react'

export const CartContext = React.createContext()
export const useCartContext = () => useContext(CartContext)

export default function CartProvider({ children, defaultCart = [] }) {
    // Almacen de estado de compra - funciona como nuestra propia API

    let [cart, setCart] = useState(defaultCart)

    function add(item) {

        const itemF = cart.find(it => it.id === item.id)

        if(!itemF) {
            cart.push(item)
            setCart(cart)
            // setCart([...cart, item])
            // console.log(cart)
        } else {
            const index = cart.findIndex(itemF)
            cart[index] = item
            setCart(cart)
        }
    }

    function remove(itemId) {
        setCart(cart.filter( item => item.id !== itemId))
    }

    function clear (cart) {
        setCart([])
    }

    return <CartContext.Provider value={{ cart, add, remove, clear }}>
        {children}
    </CartContext.Provider>
}
