import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home/Home';
import Candles from '../pages/Candles/Candles';
import Gifts from '../pages/Gifts/Gifts';
import ContactUs from '../pages/ContactUs/ContactUs';
import CandleDetail from '../pages/CandleDetail/CandleDetail';
import GiftDetail from '../pages/GiftDetail/GiftDetail';
import Footer from '../components/Footer/Footer';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar cartCount={2} /> {/* Example with 2 items in cart */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Candles" element={<Candles />} />
        <Route path="/Gifts" element={<Gifts />} />
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/Candles/:id" element={<CandleDetail />} />
        <Route path="/Gifts/:id" element={<GiftDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
