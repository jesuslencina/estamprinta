import React, { useState, useEffect } from 'react';

import './styles/css/estamprinta.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { getFirestore } from './firebase/index';

import { CartProvider } from './context/Context';

import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';

function App() {
  const [stamps, setStamps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let database = getFirestore();
    let items = database.collection('stamps');
    items
      .get()
      .then((querySnapshot) => {
        let stampsArray = querySnapshot.docs.map((item) => {
          return {
            ...item.data(),
            id: item.id,
          };
        });
        setStamps(stampsArray);
      })
      .finally(setLoading(false));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer stamps={stamps} loading={loading} />
            </Route>

            <Route path="/category/:id">
              <ItemListContainer stamps={stamps} />
            </Route>

            <Route path="/item/:id">
              <ItemDetailContainer stamps={stamps} />
            </Route>

            <Route path="/cart">
              <CartContainer stamps={stamps} />
            </Route>
          </Switch>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
