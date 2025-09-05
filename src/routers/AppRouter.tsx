import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home/Home";
import Products from "../pages/Products";

const AppRouter: React.FC = () => {
    return (
        <>
            <Routes>
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                </Route>
            </Routes>
        </>
    )
};

export default AppRouter;
