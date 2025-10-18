import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Sidebar from '../admin/components/sidebar/sidebar';

import ChatBot from '../users/components/Chatbot/ChatBot';
import NavBar from '../users/components/Header/NavBar/NavBar';
import TopNavBar from '../users/components/Header/TopNavBar/TopNavBar';
import MainLayout from '../users/components/Layout/MainLayout';
import store from '../users/store';

interface ProtectedRouteProps {
  isAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAdmin }) => {
  return (
    <Provider store={store}>
      {isAdmin ? (
        // Layout de Administración
        <>
          <Sidebar />
          <MainLayout hasSidebar variant="admin">
            <Outlet />
          </MainLayout>
        </>
      ) : (
        // Layout Público - El NavBar maneja el menú en desktop y mobile
        <>
          <TopNavBar />
          <NavBar />
          <MainLayout hasSidebar={false} variant="public">
            <Outlet />
            <ChatBot />
          </MainLayout>
        </>
      )}
    </Provider>
  );
};

export default ProtectedRoute;
