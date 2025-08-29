import { Route, Routes } from "react-router-dom";
import NavBar from "../components/Header/NavBar/NavBar";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home/Home";

const AppRouter: React.FC = () => {
    return (
        <>
            <Routes>
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </>
    )
};

export default AppRouter;
