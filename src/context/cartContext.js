import React, { useContext, useState } from 'react'

export const CartContext = React.createContext()
export const useCartContext = () => useContext(CartContext)

export default function CartProvider({ children, defaultCart = [] }) {
    
    const [cart, setCart] = useState(defaultCart)
    const [finished, setFinished] = useState(false)

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

    function clear () {
        setCart([])
        setFinished(false)
    }

    function totalPrice () {
        let total = 0
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price * cart[i].count
        }
        return total.toFixed(2)
    }

    function totalCount () {
        let total = 0
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].count
        }
        return total
    }

    function finish () {
        setFinished(true)
    }

    return <CartContext.Provider value={{ cart, add, remove, clear, totalPrice, totalCount, finish, finished }}>
        {children}
    </CartContext.Provider>
}
