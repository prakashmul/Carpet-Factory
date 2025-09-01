import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { Contact } from './pages/Contact';
import  Products  from './pages/Products';
import { Home } from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ProductDetailPage from './pages/ProductDetailPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} /> 
          <Route path="product" element={<Products />} />
          <Route path="/products/:subtype" element={<ProductDetailPage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
