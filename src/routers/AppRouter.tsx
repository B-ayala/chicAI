import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter: React.FC = () => {
    return (
        <>
            <Routes>
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </>
    )
};

export default AppRouter;
