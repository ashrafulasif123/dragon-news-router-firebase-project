import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const AuthRoot = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
        </div>
    );
};

export default AuthRoot;