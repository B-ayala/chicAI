import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import theme from "./theme";



const Root: React.FC = () => {
    return (
        
        <ThemeProvider theme={theme} >
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </ThemeProvider>
    )
};

export default Root;

