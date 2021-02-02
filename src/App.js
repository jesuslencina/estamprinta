import './styles/css/estamprinta.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { CartProvider } from './context/Context';

import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';

//!DUMMY
const stamps = [
  {
    id: 0,
    title: 'Agricultura',
    imgUrl: 'https://i.imgur.com/j9FY7r7.jpg',
    origin: 'Argentina',
    desc: 'Una bella estampilla argentina mostrando un ambiente agreste.',
    price: 40,
    stock: 2,
  },
  {
    id: 1,
    title: 'Argentina en mapamundi',
    imgUrl: 'https://i.imgur.com/QKjm7Fv.jpg',
    origin: 'Argentina',
    desc: 'La Argentina vista desde un panorama planetario.',
    price: 100,
    stock: 7,
  },
  {
    id: 2,
    title: 'Flor: Begonia',
    imgUrl: 'https://i.imgur.com/edhAwje.jpg',
    origin: 'Argentina',
    desc: 'Una bella flor ilustrada.',
    price: 20,
    stock: 14,
  },
  {
    id: 3,
    title: 'Brontosaurio',
    imgUrl: 'https://i.imgur.com/gjlySm3.jpg',
    origin: 'Corea del Norte',
    desc:
      'Una muy bella estampilla con temática prehistórica, emitida como parte de una colección en la década de los 90.',
    price: 200,
    stock: 4,
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer stampsObject={stamps} />
            </Route>

            <Route path="/category/:id">
              <ItemListContainer stampsObject={stamps} />
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
