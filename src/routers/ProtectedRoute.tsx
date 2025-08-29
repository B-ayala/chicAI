import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from '../components/Header/NavBar/NavBar';
import TopNavBar from "../components/Header/TopNavBar/TopNavBar";


const ProtectedRoute: React.FC = () => {
    return (
           <>
           <TopNavBar />
            <NavBar />
            <Outlet />
           </>
    )
};

export default ProtectedRoute;
