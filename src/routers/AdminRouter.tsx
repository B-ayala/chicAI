import { Route, Routes } from 'react-router-dom';
import Dashboard from '../admin/pages/dashboard/dashboard';
import ProtectedRoute from './ProtectedRoute';

const AdminRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAdmin />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
