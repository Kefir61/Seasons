import './scss/app.scss'
import Home from './page/Home';
import Menu from './page/Menu';
import Cart from './page/Cart';
import Reviews from './page/Reviews';
import Discounts from './page/Discounts';
import { Routes, Route } from 'react-router-dom';
import Account from './page/account/Account';
import Login from './page/account/Login';
import SignUp from './page/account/SignUp';
import Orders from './page/account/Orders';
import Favorites from './page/account/Favorites';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/orders" element={<Orders />} />
        <Route path="/account/favorites" element={<Favorites />} />
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/account/registration" element={<SignUp />} />
        <Route path="/account/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
