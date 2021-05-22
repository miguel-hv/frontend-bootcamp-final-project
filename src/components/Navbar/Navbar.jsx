import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <Link to="/register">Regístrate</Link>
                <Link to="/login">Lógate</Link>
            </nav>
        </>
    );
};

export default Navbar;
