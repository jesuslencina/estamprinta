import './styles/css/estamprinta.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
