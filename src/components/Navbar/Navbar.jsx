import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="link-box">
                    <Link to="/register">Regístrate</Link>
                </div>   
                <div className="link-box">
                    <Link to="/login">Lógate</Link>
                </div> 
            </nav>
        </>
    );
};

export default Navbar;
