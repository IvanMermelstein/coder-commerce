import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import CartProvider from './context/cartContext';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route exact path="/item/:id">
                        <ItemDetailContainer />
                    </Route>
                    <Route exact path="/:categoryId?" >
                        <ItemListContainer 
                            title="Hola! Te damos la bienvenida" 
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
