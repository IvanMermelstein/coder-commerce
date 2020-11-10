import React, { useContext, useState } from 'react'

export const CartContext = React.createContext()
export const useCartContext = () => useContext(CartContext)

export default function CartProvider({ children, defaultCart = [] }) {
    // Almacen de estado de compra - funciona como nuestra propia API

    const [cart, setCart] = useState(defaultCart) // [item1, item2, item3]

    function add(item) {
        // Agrega el item y actualiza el estado
        // Analizar el cart y decidir si
        // const item = cart.find() // buscar si existe
        // if(!item) // agregar
        // else // actualizar
        // item = { ...item, quantity: newQuantity}
        // setCart([...cart])

        setCart([...cart, item])
        console.log('trataste de agregar el item', item.id)
    }

    function remove(itemId) {
        // Remueve item por id y actualiza el estado
        console.log('trataste de remover el item: ', itemId)
        setCart(cart.filter( item => item.id !== itemId))
        // Antes de terminar cada operacion actualizar el estado
    }

    return <CartContext.Provider value={{ cart, add, remove}}>
        {children}
    </CartContext.Provider>
}
