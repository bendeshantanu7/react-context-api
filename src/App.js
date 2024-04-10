import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Item name="Macbook Pro" price={10000} />
      <Item name="Macbook air" price={8000} />
      <Item name="IPhone" price={9000} />
      <hr />
      <h1>Cart</h1>
      <Cart />
    </div>
  );
}

export default App;
