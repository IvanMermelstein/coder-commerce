import React, { useState } from 'react'

const Form = ({createOrder, cart}) => {
    
    const [buyer, setBuyer] = useState({})

    return (
        <>
            <br/>
            <label>Nombre</label>    
            <input type="text" onChange={evt => setBuyer({...buyer, name: evt.target.value})} />
            <br/>
            <label>Apellido</label>    
            <input type="text" onChange={evt => setBuyer({...buyer, lastName: evt.target.value})} />
            <br/>
            <label>Telefono</label>    
            <input type="number" onChange={evt => setBuyer({...buyer, phone: evt.target.value})} />
            <br/>
            <label>Mail</label>    
            <input type="text" onChange={evt => setBuyer({...buyer, email: evt.target.value})} />
            <br/>
            <button onClick={() => createOrder(cart, buyer)}>Terminar compra</button>
        </>
    )
}

export default Form
