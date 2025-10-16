import { Route, Routes } from 'react-router-dom';
import Customer from '../admin/pages/customers/customer';
import Dashboard from '../admin/pages/dashboard/dashboard';
import ProtectedRoute from './ProtectedRoute';
import Products from '../admin/pages/products/products';
import Invoices from '../admin/pages/invoices/invoinces';

const AdminRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute isAdmin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customer" element={<Customer />} />
          <Route path="products" element={<Products />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default AdminRouter;
