import { Provider } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from '../admin/components/sidebar/sidebar';
import ChatBot from '../components/Chatbot/ChatBot';
import NavBar from '../components/Header/NavBar/NavBar';
import TopNavBar from '../components/Header/TopNavBar/TopNavBar';
import store from '../store';

interface ProtectedRouteProps {
  isAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAdmin }) => {
  // Verificar autenticación para rutas de administrador
  if (isAdmin) {
    const userDataString = localStorage.getItem('user');
    const userData = userDataString ? JSON.parse(userDataString) : null;
    
    // Si no hay usuario o no es admin, redirigir al inicio
    if (!userData || (userData.role !== 'admin' && userData.role !== 'superAdmin')) {
      return <Navigate to="/" replace />;
    }
  }
  
  return (
    <>
      <Provider store={store}>
        {isAdmin ? (
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <Outlet />
          </div>
        ) : (
          <>
            <TopNavBar />
            <NavBar />
            <Outlet />
            <ChatBot />
          </>
        )}
      </Provider>
    </>
  );
};

export default ProtectedRoute;
