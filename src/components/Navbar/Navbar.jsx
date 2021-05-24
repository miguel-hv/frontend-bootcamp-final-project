import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutAsync } from "../../redux/reducers/user.slice";
import "./Navbar.scss";

const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { user } = useSelector((state) => state.user);

    const redirect = () => {
        history.push("/");
    };

    const logout = () => {
        dispatch(logoutAsync(redirect));
    };

    return (
        <>
            <nav className="navbar">
                {!user && (
                    <>
                        <div className="link-box">
                            <Link to="/login">Login</Link>
                        </div>
                        <div className="link-box">
                            <Link to="/register">Registro</Link>
                        </div>
                    </>
                )}

                {user && (
                    <>
                        <button onClick={logout} className="button-logout">Logout</button>
                    </>
                )}
            </nav>
        </>
    );
};

export default Navbar;
