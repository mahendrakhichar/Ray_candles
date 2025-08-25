import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home/Home';
import Candles from '../pages/Candles/Candles';
import Gifts from '../pages/Gifts/Gifts';
import ContactUs from '../pages/ContactUs/ContactUs';
import CandleDetail from '../pages/CandleDetail/CandleDetail';
import GiftDetail from '../pages/GiftDetail/GiftDetail';
import Footer from '../components/Footer/Footer';
import Shipping from '../pages/Footer-links/Shipping';
import Returns from '../pages/Footer-links/Returns';
import FAQ from '../pages/Footer-links/FAQ';
import About from '../pages/Footer-links/About';
import Cart from '../pages/Cart/Cart';
import OrderDetails from '../pages/OrderDetails/OrderDetails';
import { CartProvider } from '../components/CartContext/CartContext';
import Temp from '../pages/temp';
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar cartCount={2} /> {/* Example with 2 items in cart */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Candles" element={<Candles />} />
          <Route path="/Gifts" element={<Gifts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Gifts/:id" element={<GiftDetail />} />
          <Route path="/Contactus" element={<ContactUs />} />
          <Route path="/Candles/:id" element={<CandleDetail />} />
          <Route path="/order-details" element={<OrderDetails />} />
          {/* //footer */}
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/About" element={<About />} />
          <Route path='/sweetu' element={<Temp/>}/>


        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
