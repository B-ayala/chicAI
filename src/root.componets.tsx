import { ThemeProvider } from "@mui/material/styles";
import { HashRouter } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import theme from "./theme";

// Determinar si estamos en producción o desarrollo
const isProduction = window.location.hostname !== 'localhost' && 
                    window.location.hostname !== '127.0.0.1';

// Usar basename solo en producción (GitHub Pages)
const baseName = isProduction ? '/chicAI' : '';

const Root: React.FC = () => {
    return (
        <ThemeProvider theme={theme} >
            <HashRouter basename={baseName}>
                <AppRouter />
            </HashRouter>
        </ThemeProvider>
    )
};

export default Root;

