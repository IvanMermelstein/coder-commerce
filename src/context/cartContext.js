import React, { useContext, useState } from 'react'

export const CartContext = React.createContext()
export const useCartContext = () => useContext(CartContext)

export default function CartProvider({ children, defaultCart = [] }) {
    
    const [cart, setCart] = useState(defaultCart)

    function add(item) {

        const itemF = cart.find(it => it.id === item.id)
        if(!itemF) {
            setCart([...cart, item])
        } else {
            const index = cart.findIndex(i => i.id = itemF.id)
            const cartAux = [...cart]
            cartAux[index].count += item.count
            setCart(cartAux)
        }
    }

    function remove(itemId) {
        setCart(cart.filter( item => item.id !== itemId))
    }

    function clear (cart) {
        setCart([])
    }

    return <CartContext.Provider value={{ cart, add, remove, clear}}>
        {children}
    </CartContext.Provider>
}
