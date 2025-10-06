import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import ChatBot from '../components/Chatbot/ChatBot';
import NavBar from '../components/Header/NavBar/NavBar';
import TopNavBar from '../components/Header/TopNavBar/TopNavBar';
import store from '../store';

const ProtectedRoute: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <TopNavBar />
        <NavBar />
        <Outlet />
        <ChatBot />
      </Provider>
    </>
  );
};

export default ProtectedRoute;
