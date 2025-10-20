import { ThemeProvider } from '@mui/material/styles';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AdminRouter from './routers/AdminRouter';
import PublicRouter from './routers/PublicRouter';
import theme from './theme';

// HashRouter no necesita basename para GitHub Pages
// ya que usa fragmentos de URL (#) en lugar de rutas reales

const Root: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminRouter />} />
          <Route path="/*" element={<PublicRouter />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default Root;
