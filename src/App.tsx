import './scss/app.scss'
import Home from './page/Home';
import Menu from './page/Menu';
import Cart from './page/Cart';
import Account from './page/Account';
import Reviews from './page/Reviews';
import Discounts from './page/Discounts';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}

export default App;
