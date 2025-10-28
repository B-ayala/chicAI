import { Route, Routes } from 'react-router-dom';
import AdminNotifications from '../admin/components/notifications/AdminNotifications';
import Customer from '../admin/pages/customers/customer';
import Dashboard from '../admin/pages/dashboard/dashboard';
import Invoices from '../admin/pages/invoices/invoinces';
import Products from '../admin/pages/products/products';
import ProtectedRoute from './ProtectedRoute';

const AdminRouter: React.FC = () => {
  const adminId = localStorage.getItem('adminId') || 'admin';

  return (
    <>
      <AdminNotifications adminId={adminId} />
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
