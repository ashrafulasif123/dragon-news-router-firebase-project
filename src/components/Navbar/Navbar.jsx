
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";


const Navbar = () => {
    const linkClass = ({ isActive }) =>
        isActive
            ? "text-primary font-semibold border-b-2 border-primary pb-1"
            : "text-gray-600 hover:text-primary";

    return (
        <div className="navbar flex justify-between bg-base-100 shadow-md px-6">
            {/* LEFT SIDE (LOGO) */}
            <div className="">
                <a className="text-xl font-bold">MyNews</a>
            </div>

            {/* MIDDLE MENU */}
            <div className="flex-none hidden md:flex">
                <ul className="menu menu-horizontal gap-6 px-1">
                    <li>
                        <NavLink to="/" className={linkClass}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={linkClass}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/career" className={linkClass}>
                            Career
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-none flex items-center gap-3">
                <FaUserCircle className="text-2xl text-gray-600" />

                <Link to="/login">
                    <button className="btn btn-primary btn-sm">
                        Login
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Navbar;