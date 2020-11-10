import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/Navbar/CartWidget'
// import { CartProvider } from './context/cartContext';

// AGREGAR STOCK Y CATEGORY EN ITEM
function App() {
    return (
        // <CartProvider value={[]}>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" >
                        <ItemListContainer 
                            title="Hola! Te damos la bienvenida" 
                        />
                    </Route>
                    <Route path="/cart">
                        <CartWidget />
                    </Route>
                    <Route exact path="/item/:id">
                        <ItemDetailContainer />
                    </Route>
                </Switch>
            </BrowserRouter>
        // </CartProvider>
    );
}

export default App;
