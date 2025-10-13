import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Sidebar from '../admin/components/sidebar/sidebar';
import ChatBot from '../components/Chatbot/ChatBot';
import NavBar from '../components/Header/NavBar/NavBar';
import TopNavBar from '../components/Header/TopNavBar/TopNavBar';
import store from '../store';

interface ProtectedRouteProps {
  isAdmin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAdmin }) => {
  return (
    <>
      <Provider store={store}>
        {isAdmin ? (
          <>
            <Sidebar />
            <Outlet />
          </>
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
