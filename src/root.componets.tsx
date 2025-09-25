import { ThemeProvider } from "@mui/material/styles";
import { HashRouter } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import theme from "./theme";

// HashRouter no necesita basename para GitHub Pages
// ya que usa fragmentos de URL (#) en lugar de rutas reales

const Root: React.FC = () => {
    return (
        <ThemeProvider theme={theme} >
            <HashRouter>
                <AppRouter />
            </HashRouter>
        </ThemeProvider>
    )
};

export default Root;

