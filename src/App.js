import { Routes, Route } from 'react-router-dom';

import { Home } from "../src/routes/home/home.jsx";
import { Navigation } from "../src/routes/navigation/navigation.jsx";
import { Authentication } from "../src/routes/authentication/authentication.jsx";
import { Shop } from "../src/routes/shop/shop.jsx";
import { Checkout } from "../src/routes/checkout/checkout.jsx";
 
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  );
};

export default App;