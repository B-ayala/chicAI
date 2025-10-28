import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AdminRouter from './routers/AdminRouter';
import PublicRouter from './routers/PublicRouter';
import store from './store';
import theme from './theme';

// HashRouter no necesita basename para GitHub Pages
// ya que usa fragmentos de URL (#) en lugar de rutas reales

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Routes>
            <Route path="/admin/*" element={<AdminRouter />} />
            <Route path="/*" element={<PublicRouter />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default Root;
