import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

    // -------------------------------------------------------------------------------->>
    // Temporal para probar ItemCounter 

    // const available = 20
    // const initial = 5

    // const [stock, setStock] = useState(available)
    // const [cart, setCart] = useState(0)

    // const handleAdd = ([counter, setCounter]) => {
    //     return () => {
    //         if(stock > 0) {
    //             let left = stock - counter
    //             setCart(counter + cart)
    //             setStock(left)
    //             setCounter((initial > left) ? left : initial)
    //         } else {
    //             alert('Sin stock!')
    //         }
    //     }
    // }

    // const info = {
    //     width: '100%',
    //     marginTop: 100,
    //     textAlign: 'center'
    // }

    // Temporal para probar ItemCounter 
    // -------------------------------------------------------------------------------->>

    return (
        <div className="App">
            <Navbar />
            
            <ItemListContainer 
                title="Hola! Te damos la bienvenida" 
            />
            
            {/* <div 
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
            /> */}

            <ItemDetailContainer />
        </div>
    );
}

export default App;
