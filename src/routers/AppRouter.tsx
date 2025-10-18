import { Route, Routes } from 'react-router-dom';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Products from '../pages/Products';
import ProductsDetail from '../pages/ProductsDetail/ProductsDetail';
import ProtectedRoute from './ProtectedRoute';

const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path='/products/detail/:id' element={<ProductsDetail/>}/>
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
