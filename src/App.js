import React from 'react';
import './App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import CartProvider from './context/cartContext';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme'
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
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
                            <ItemListContainer />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </CartProvider>
        </ThemeProvider>
    );
}

export default App;
