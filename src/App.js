import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import { Home } from "../src/routes/home/home";
import { Navigation } from "../src/routes/navigation/navigation";
import { Authentication } from "../src/routes/authentication/authentication";
import { Shop } from "../src/routes/shop/shop";
import { Checkout } from "../src/routes/checkout/checkout";
import { checkUserSession } from "../src/store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  },);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;