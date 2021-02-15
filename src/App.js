import React from 'react';

import './styles/css/estamprinta.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { CartProvider } from './context/Context';

import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import OrderView from './components/OrderView/OrderView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>

            <Route path="/category/:id">
              <ItemListContainer />
            </Route>

            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>

            <Route path="/cart">
              <CartContainer />
            </Route>

            <Route path="/order/:id">
              <OrderView />
            </Route>
          </Switch>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
