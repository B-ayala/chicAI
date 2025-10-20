import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Sidebar from '../admin/components/sidebar/sidebar';
import ChatBot from '../components/Chatbot/ChatBot';
import NavBar from '../components/Header/NavBar/NavBar';
import TopNavBar from '../components/Header/TopNavBar/TopNavBar';
import { MainLayout } from '../components/Layout';
import store from '../store';

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
