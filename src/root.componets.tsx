import { ThemeProvider } from "@mui/material/styles";
import { HashRouter } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import theme from "./theme";



const Root: React.FC = () => {
    return (
        
        <ThemeProvider theme={theme} >
            <HashRouter basename="/chicAI">
                <AppRouter />
            </HashRouter>
        </ThemeProvider>
    )
};

export default Root;

