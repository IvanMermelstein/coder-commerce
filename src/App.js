import React, { useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemCounter from './components/ItemCounter/ItemCounter'

function App() {

    // -------------------------------------------------------------------------------->>
    // Temporal para probar ItemCounter 

    const available = 20
    const initial = 5

    const [stock, setStock] = useState(available)
    const [cart, setCart] = useState(0)

    const handleAdd = (counter) => {
        return () => {
            if(stock > 0) {
                if (counter <= stock){
                    let left = stock - counter
                    setCart(counter + cart)
                    setStock(left)
                } else {
                    alert('No hay stock suficiente!')
                }
                // setCounter((initial > left) ? left : initial)
            } else {
                alert('Sin stock!')
            }
        }
    }

    const info = {
        width: '100%',
        marginTop: 100,
        textAlign: 'center'
    }

    // Temporal para probar ItemCounter 
    // -------------------------------------------------------------------------------->>

    return (
        <div className="App">
            <Navbar />
            
            <ItemListContainer 
                title="Hola! Te damos la bienvenida" 
            />
            
            <div 
                className="info" 
                style={info}
            >
                <h3>Disponibles: {stock}</h3>
                <h3>Inicial: {initial}</h3>
                <h3>Carrito: {cart}</h3>
            </div>
            
            <ItemCounter 
                onAdd={handleAdd}
                stock={stock}
                initial={initial}
            />
        </div>
    );
}

export default App;
